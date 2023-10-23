"use server";

import { revalidateTag } from "next/cache";
import { createReview } from "@api/review";
import { type FormValues } from "@/types";

export async function addReviewToProductAction(
	data: FormValues,
	productId: string,
) {
	await createReview(data, productId);

	revalidateTag("product");
}
