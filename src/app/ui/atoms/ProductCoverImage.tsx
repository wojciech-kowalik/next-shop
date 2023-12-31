import NextImage from "next/image";

type Props = {
	alt: string;
	src: string;
};

export default function ProductCoverImage({ alt, src }: Props) {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<NextImage
				width={320}
				height={320}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				alt={alt}
				src={src}
			/>
		</div>
	);
}
