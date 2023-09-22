import NextImage from "next/image";

type Props = {
	alt: string;
	src: string;
};

export default function ColectionCoverImage({ alt, src }: Props) {
	return (
		<div className="aspect-sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-md border bg-slate-50 transition hover:bg-slate-100 group-hover:scale-110 group-hover:opacity-75 sm:h-64">
			<NextImage
				width={256}
				height={256}
				className="w-h-full h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				alt={alt}
				src={src}
			/>
		</div>
	);
}
