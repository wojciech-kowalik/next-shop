import type { ProductItemType, ProductResponseType } from "@/types";

const productResponseToProductItem = (
	productResponse: ProductResponseType,
): ProductItemType => {
	return {
		id: productResponse.id,
		name: productResponse.title,
		category: productResponse.category,
		price: productResponse.price,
		coverImage: {
			alt: productResponse.title,
			src: productResponse.image,
		},
		description: productResponse.description,
	};
};

export const getProducts = async ({
	take = 8,
	offset,
}: {
	take?: number;
	offset: number;
}) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);
	const productsResponse = (await response.json()) as ProductResponseType[];

	return productsResponse.map(productResponseToProductItem);
};

export const getCountProducts = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const productsResponse = (await response.json()) as ProductResponseType[];

	return productsResponse.length;
};

export const getProductById = async (id: ProductResponseType["id"]) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await response.json()) as ProductResponseType;

	return productResponseToProductItem(productResponse);
};
