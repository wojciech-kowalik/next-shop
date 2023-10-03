import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

// run on dev mode
// curl -X POST --data-binary '{"productId": "1"}' localhost:3000/api/webhook
export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		typeof body.productId === "string"
	) {
		console.log(`Revalidating /product/${body.productId}`);
		revalidatePath(`/product/${body.productId}`);
		console.log(`Revalidating /products`);
		revalidatePath(`/products`);
		return new Response(null, { status: 204 });
	} else {
		return new Response(null, { status: 400 });
	}
}
