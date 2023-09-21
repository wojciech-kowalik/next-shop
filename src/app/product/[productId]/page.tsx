import Image from "next/image";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@api/products";
import { formatMoney } from "@/utils";

export async function generateStaticParams() {
	const products = await getProducts({ take: 4, offset: 1 });

	return products.map((product) => ({ productId: product?.id })).slice(0, 10);
}

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) return {};
	return {
		title: `Product ${product.name}`,
		description: product.description,
		openGraph: {
			title: `Product ${product.name}`,
			description: product.description,
			images: [
				{
					url: product.coverImage.src,
					alt: product.coverImage.alt,
				},
			],
		},
	};
};

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) notFound();

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div className="overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
				<Image
					className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
					width={256}
					height={256}
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
			</div>
			<div className="px-6">
				<h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">
					{product.name}
				</h1>
				<div className="mt-4 flex items-center">
					<div className="font-base small-caps text-lg text-slate-800">
						{formatMoney(product.price / 100)}
					</div>
				</div>
				<div className="mt-4 space-y-6">
					<p className="font-sans text-base text-slate-500">
						{product.category}
					</p>
				</div>
				<div className="mt-8">
					<button
						type="submit"
						data-testid="add-to-cart-button"
						className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
