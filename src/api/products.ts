import type { ProductItemType, ProductResponseType } from "@/types";
import { graphqlFetch } from "@api/fetch";
import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type ProductGetByIdQuery,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsSearchByQueryDocument,
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

export const getProducts = async ({
	take = 8,
	offset,
}: {
	take?: number;
	offset: number;
}) => {
	const response = await graphqlFetch({
		query: ProductsGetListDocument,
		variables: { take, offset: offset - 1 },
	});

	return response.products.map(productResponseToProductItem);
};

export const getProductById = async (id: ProductResponseType["id"]) => {
	const response = await graphqlFetch({
		query: ProductGetByIdDocument,
		variables: { id },
	});
	return productResponseToProductItem(response.product);
};

export const getProductsByCategorySlug = async ({
	take = 8,
	offset,
	slug,
}: {
	take?: number;
	offset: number;
	slug: string;
}) => {
	const response = await graphqlFetch({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug, take, offset: offset - 1 },
	});

	return {
		products: response.categories[0].products.map(productResponseToProductItem),
		categoryName: response.categories[0].name,
	};
};

export const getProductsByCollectionSlug = async ({
	slug,
}: {
	slug: string;
}) => {
	const response = await graphqlFetch({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug },
	});

	return {
		products: response.collections[0].products.map(
			productResponseToProductItem,
		),
		collection: {
			name: response.collections[0].name,
			description: response.collections[0].description,
		},
	};
};

export const searchProducts = async ({ query }: { query: string }) => {
	const response = await graphqlFetch({
		query: ProductsSearchByQueryDocument,
		variables: { query },
	});

	return response.products.map(productResponseToProductItem);
};
