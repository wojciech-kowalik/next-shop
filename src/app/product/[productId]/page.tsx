import Image from "next/image";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@api/products";
import { formatMoney } from "@/utils";
import { cookies } from "next/headers";
import { graphqlFetch } from "@api/fetch";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@gql/graphql";
import AddToCartButton from "@/ui/atoms/AddToCartButton";

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

async function addProductToCartAction(formData: FormData) {
	"use server";
	const cart = await getOrCreateCart();
	const productId = formData.get("productId")?.toString();
	await addProductToCart(cart.id, productId!);
}

async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await graphqlFetch(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart) {
			return cart;
		}
	}

	const { createOrder: newCart } = await graphqlFetch(CartCreateDocument, {});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
}

async function addProductToCart(orderId: string, productId: string) {
	const { product } = await graphqlFetch(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await graphqlFetch(CartAddItemDocument, {
		orderId,
		productId,
		total: product.price,
	});
}

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) notFound();

	return (
		<form action={addProductToCartAction}>
			<input hidden name="productId" value={product.id} readOnly />
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
						<AddToCartButton />
					</div>
				</div>
			</div>
		</form>
	);
}
