import { Suspense } from "react";
import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import AddToCartButton from "./AddToCartButton";
import RelatedProductList from "@/ui/organisms/RelatedProductList";
import ReviewForm from "@/ui/organisms/ReviewForm";
import ReviewList from "@/ui/organisms/ReviewList";
import { formatMoney } from "@/utils";
import { getProductById } from "@api/products";

// export async function generateStaticParams() {
// 	const products = await getProducts({ take: 4, offset: 1 });

// 	return products.map((product) => ({ productId: product?.id })).slice(0, 10);
// }

export const revalidate = 3600;

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) return {};
	return {
		title: product.name.trim(),
		description: product.description,
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
		<>
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
					<div className="mt-4 space-y-6">
						<p className="font-sans text-base text-slate-500">
							{product.description}
						</p>
					</div>
					<div className="mt-8">
						<AddToCartButton productId={product.id} />
					</div>
				</div>
			</div>

			<Suspense fallback="Loading ...">
				<RelatedProductList />
			</Suspense>

			<div className="bg-white p-4">
				<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
					<div className="lg:col-span-4">
						<Suspense fallback="Loading ...">
							<ReviewForm productId={params.productId} />
						</Suspense>
					</div>
					<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
						<Suspense fallback="Loading ...">
							<ReviewList productId={params.productId} />
						</Suspense>
					</div>
				</div>
			</div>
		</>
	);
}
