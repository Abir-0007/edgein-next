import CookieService from "../utils/cookie";
import { NextResponse, NextRequest } from "next/server";
import { mutate } from "../graphql/hasuraAdmin";

export async function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();
	console.log({ url });

	// Prevent security issues – users should not be able to canonically access
	// the pages/sites folder and its respective contents. This can also be done
	// via rewrites to a custom 404 page
	if (
		[
			`/`,
			`/login/`,
			`/waitlist/`,
			`/contact/`,
			`/privacy/`,
			`/terms/`,
			`/team/`,
			`/api/login/`,
			`/api/user/`,
			`/admin/app/`,
			`/404/`,
			`/api/login_attempt/`,
			`/api/check_email/`,
			`/api/get_access_token/`,
			`/api/refresh_token/`,
		].includes(url.pathname) ||
		url.pathname.endsWith(".png") ||
		url.pathname.endsWith(".jpg") ||
		url.pathname.endsWith(".ico") ||
		process.env.DEV_MODE
	) {
		console.log("pass-thur", url.pathname);
		return NextResponse.next();
	}

	if (
		url.searchParams.get("revalidation_auth") ===
		process.env.REVALIDATION_AUTH_TOKEN
	) {
		return NextResponse.next();
	}
	let user;
	try {
		user = await CookieService.getUser(CookieService.getAuthToken(req.cookies));
		if (!user) {
			console.log("no-user", url.pathname);
			return NextResponse.redirect(
				new URL(`/login/?redirect=${encodeURIComponent(url.pathname)}`, req.url)
			);
		}
		if (!user.email.endsWith("5of5.vc") && url.pathname.includes("/admin/")) {
			return NextResponse.redirect(
				new URL(`/404?redirect=${encodeURIComponent(url.pathname)}`, req.url)
			);
		}
	} catch (error) {
		console.log(error);
		return NextResponse.redirect(
			new URL(`/login/?redirect=${encodeURIComponent(url.pathname)}`, req.url)
		);
	}

	if (![`/api/graphql/`].includes(url.pathname)) {
		mutate({
			mutation: `
				mutation InsertAction($object: actions_insert_input!) {
					insert_actions_one(
						object: $object
					) {
						id
					}
				}
			`,
			variables: {
				object: {
					action: "View",
					page: url.pathname,
					properties: {},
					user: user.email,
				},
			},
		});
	}

	console.log("pass-thur");
	return NextResponse.next();
}
