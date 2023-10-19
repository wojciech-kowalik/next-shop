import {
	ReviewCreateDocument,
	ReviewGetByProductIdDocument,
} from "@gql/graphql";
import { graphqlFetch } from "@api/fetch";
import { type FormValues } from "@/types";

export async function createReview(data: FormValues, productId: string) {
	const review = await graphqlFetch({
		query: ReviewCreateDocument,
		variables: { ...data, productId },
		next: {
			tags: ["product"],
		},
	});
	if (!review) {
		throw new Error("Failed to create review");
	}

	return review;
}

export const getReviewByProductId = async (id: string) => {
	const response = await graphqlFetch({
		query: ReviewGetByProductIdDocument,
		variables: { id },
	});
	return response.reviews;
};
