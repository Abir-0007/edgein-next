import Link from "next/link";
import { ElemPhoto } from "../components/ElemPhoto";

type Props = {
	href?: string;
	photos: Record<string, any>[];
	heading?: string;
	text?: string;
};

export const ElemPersonCard: React.FC<Props> = ({
	href = "",
	photos,
	heading,
	text,
}) => {
	return (
		<Link href={href}>
			<a className="block bg-white p-6 rounded-lg transition-all group hover:shadow-md hover:-translate-y-1 ">
				<ElemPhoto
					photos={photos}
					wrapClass="flex items-center justify-center w-32 h-32 mx-auto rounded-full overflow-hidden"
					imgClass="object-fit h-full w-full"
					imgAlt={heading}
				/>
				{heading && (
					<h3 className="font-bold text-center text-xl mt-2 group-hover:opacity-60">
						{heading}
					</h3>
				)}
				{text && <div className="text-center text-xs">{text}</div>}
			</a>
		</Link>
	);
};
