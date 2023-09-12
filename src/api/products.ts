import type { ProductItemType, ProductResponseType } from "@/types";

const productResponseToProductItem = (productResponse: ProductResponseType) => {
	return {
		id: productResponse.id,
		name: productResponse.title,
		category: productResponse.category,
		price: productResponse.price,
		coverImage: {
			alt: productResponse.title,
			src: productResponse.image,
		},
	};
};

export const getProducts = async () => {
	const response = await fetch(
		"https://naszsklep-api.vercel.app/api/products?take=20",
	);
	const productsResponse = (await response.json()) as ProductResponseType[];

	return productsResponse.map(productResponseToProductItem);
};

export const getProductById = async (id: ProductResponseType["id"]) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await response.json()) as ProductResponseType;

	return productResponseToProductItem(productResponse);
};
