import { ReviewCreateDocument } from "@gql/graphql";
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
