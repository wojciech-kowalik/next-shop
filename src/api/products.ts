import type { ProductItemType, ProductResponseType } from "@/types";
import { graphqlFetch } from "@api/fetch";
import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type ProductGetByIdQuery,
} from "@gql/graphql";

const productResponseToProductItem = (
	product: ProductGetByIdQuery["product"],
): ProductItemType | null => {
	if (!product) return null;
	return {
		id: product.id,
		name: product.name,
		category: product.categories[0].name,
		price: product.price,
		coverImage: {
			src: product.images[0].url,
			alt: product.name,
		},
		description: product.description,
	};
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const getProducts = async ({
	take = 8,
	offset,
}: {
	take?: number;
	offset: number;
}) => {
	const response = await graphqlFetch(ProductsGetListDocument, {
		take,
		offset,
	});
	return response.products.map(productResponseToProductItem);
};

export const getCountProducts = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const productsResponse = (await response.json()) as ProductResponseType[];

	return productsResponse.length;
};

export const getProductById = async (id: ProductResponseType["id"]) => {
	const response = await graphqlFetch(ProductGetByIdDocument, { id });

	return productResponseToProductItem(response.product);
};
