/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { updateOrderDataById } from "@api/order";

export async function POST(req: NextRequest): Promise<Response> {
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	if (!webhookSecret) {
		return new Response("No webhook secret", { status: 500 });
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		return new Response("No Stripe secret key", { status: 500 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const signature = req.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await req.text(),
		signature,
		webhookSecret,
	) as Stripe.DiscriminatedEvent;

	const eventDataObject = event.data.object as {
		customer_details?: { email?: string };
		amount_total?: number;
		metadata?: { cartId?: string };
	};
	const email = eventDataObject?.customer_details?.email ?? "";
	const total = eventDataObject?.amount_total ?? 0;
	const cartId = eventDataObject?.metadata?.cartId ?? "";

	if (event.type === "checkout.session.completed") {
		console.log(`🔔  Checkout session completed!`);
		console.log(`🔔  Email: ${email}`);
		console.log(`🔔  Total: ${total}`);

		await updateOrderDataById(cartId, email, total);
	} else {
		console.log(`🔔  Unhandled event type: ${event.type}`);
	}

	return new Response(null, { status: 204 });
}
