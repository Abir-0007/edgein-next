import type { GetStaticProps } from "next";
import { useEffect, useState, Fragment } from "react";
import { ElemButton } from "../components/ElemButton";
import { ElemLogo } from "./ElemLogo";
import { IconLinkedIn } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
const validator = require("validator");

type Props = {
	show: boolean;
	onSignUp: (email: string, password: string) => void;
	onForgotPassword: () => void;
	onClose: () => void;
	linkedInError: string;
};

export default function LoginModal(props: Props) {
	useEffect(() => {
		setEmail("");
		setPassword("");
		setEmailError("");
		setErrorMessage("");
		setUnsuccessMessage(props.linkedInError ? props.linkedInError : "");
	}, [props.show, props.linkedInError]);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [unsuccessMessage, setUnsuccessMessage] = useState("");

	const validateEmail = (value: string) => {
		setEmail(value);
		if (validator.isEmail(value)) {
			setEmailError("");
		} else {
			setEmailError("Enter valid Email!");
		}
	};

	const validate = (value: string) => {
		setPassword(value);
		if (
			validator.isStrongPassword(value, {
				minLength: 8,
				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 1,
			})
		) {
			setErrorMessage("");
		} else {
			setErrorMessage(
				"Password should have least 8 characters including a lower-case letter, an upper-case letter, a number, a special character"
			);
		}
	};

	const onLogin = async () => {
		validateEmail(email);

		if (emailError || !email) {
			return;
		}
		try {
			const response = await fetch("/api/signin/", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.status === 401 || response.status === 403) {
				const responseText = await response.clone().text();
				setUnsuccessMessage(responseText);
			} else if (response.status === 404) {
				// 404 returns in both cases
				try {
					const res = await response.clone().json();
					if (res.nextStep && res.nextStep === "SIGNUP") {
						onSignUp(email, password);
					}
				} catch (err) {
					const waitlistRes = await response.clone().text();
					if (waitlistRes === "Invalid Email") {
						setUnsuccessMessage(
							`Your email ${email} has been added to our waitlist.  We'll be in touch soon!`
						);
					}
				}
			} else if (response.status === 200) {
				window.location.href = "/";
			}
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}
	};

	const onSignUp = (email: string, password: string) => {
		props.onSignUp(email, password);
	};

	const onClose = () => {
		props.onClose();
	};

	const onForgotPassword = () => {
		props.onClose();
		props.onForgotPassword();
	};

	const onLinkedInClick = () => {
		const url = `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&connection=linkedin&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&scope=openid%20profile%20email%20offline_access`;
		window.location.href = url;
	};

	return (
		<>
			<Transition.Root show={props.show} as={Fragment}>
				<Dialog as="div" onClose={onClose} className="relative z-[60]">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed z-10 inset-0 bg-black/20 transition-opacity backdrop-blur-sm" />
					</Transition.Child>

					<div className="fixed inset-0 z-[50] m-6 min-h-0 flex flex-col items-center justify-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-300"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="max-w-2xl w-full p-6 mx-auto rounded-lg shadow-2xl bg-white overflow-x-hidden overflow-y-scroll overscroll-y-none lg:p-12">
								<div className="max-w-xs mx-auto w-full">
									{unsuccessMessage ? (
										<>
											{/* <h1 className="text-center text-2xl lg:text-3xl font-bold">Registration Complete</h1> */}
											<p className="mt-2 text-dark-400 text-center">
												{unsuccessMessage}
											</p>
										</>
									) : (
										<>
											<div className="flex items-center h-12 w-12 p-2 mx-auto rounded-full shadow">
												<ElemLogo mode="icon" className="w-10 aspect-square" />
											</div>
											<h1 className="mt-4 text-2xl text-center font-bold lg:text-3xl">
												Welcome to EdgeIn
											</h1>
											<ElemButton
												roundedFull={false}
												onClick={onLinkedInClick}
												btn="white"
												className="w-full mt-5 gap-x-2 text-center rounded-md text-[#0077B5] border border-black/10 hover:text-[#0077B5] hover:border-[#0077B5] hover:bg-slate-50"
											>
												<IconLinkedIn
													title="LinkedIn"
													className="h-6 w-6 text-[#0077B5]"
												/>
												Continue with LinkedIn
											</ElemButton>

											<div className=" flex py-3 items-center">
												<div className="flex-grow border-t border-black/10"></div>
												<span className="flex-shrink mx-4 font-bold">or</span>
												<div className="flex-grow border-t border-black/10"></div>
											</div>

											<div className="flex flex-col space-y-2">
												<label>
													<input
														name="email"
														type="email"
														value={email}
														disabled={isLoading}
														onChange={(event) =>
															validateEmail(event?.target.value)
														}
														placeholder="Email"
														className={`mt-2 appearance-none rounded-md block w-full px-3 h-10 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500  ${
															emailError === ""
																? "ring-1 ring-slate-200"
																: "ring-2 ring-rose-400 focus:ring-rose-400"
														}`}
													/>
													{emailError === "" ? null : (
														<div className="mt-2 font-bold text-sm">
															{emailError}
														</div>
													)}
												</label>
												<label>
													<input
														name="password"
														type="password"
														value={password}
														disabled={isLoading}
														onChange={(event) => validate(event?.target.value)}
														placeholder="Password"
														className={`mt-2 appearance-none rounded-md block w-full px-3 h-10 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500  ${
															errorMessage === ""
																? "ring-1 ring-slate-200"
																: "ring-2 ring-rose-400 focus:ring-rose-400"
														}`}
													/>
													{errorMessage === "" ? null : (
														<div className="mt-2 font-bold text-sm">
															{errorMessage}
														</div>
													)}
												</label>

												<ElemButton
													className="w-full"
													onClick={onLogin}
													btn="primary"
													loading={isLoading}
												>
													Login
												</ElemButton>

												<ElemButton
													className="w-full font-normal text-primary-500"
													onClick={onForgotPassword}
													loading={isLoading}
												>
													Forgot Password?
												</ElemButton>
												<div>
													<ElemButton
														className="w-full mt-4"
														onClick={() => onSignUp("", "")}
														btn="ol-primary"
														loading={isLoading}
													>
														Create an account
													</ElemButton>
												</div>
											</div>
										</>
									)}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
