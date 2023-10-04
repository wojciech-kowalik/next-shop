import { ImageResponse } from "next/server";
import { getProductById } from "@api/products";

export const runtime = "edge";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		return;
	}

	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col justify-center items-center p-4"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				<div tw="font-sans uppercase text-[40px] leading-4">
					{product?.name}
				</div>
				<div tw="font-sans uppercase text-[40px] leading-4">
					{product?.description}
				</div>
				<div tw="font-sans uppercase text-[40px] leading-4">
					{product.category}
				</div>
			</div>
		),
	);
}
