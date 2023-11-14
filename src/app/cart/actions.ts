"use server";

import Stripe from "stripe";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	getCartByIdFromCookies,
	changeItemQuantity,
	removeItemFromCart,
} from "@api/cart";

export async function removeItemFromCartAction(itemId: string) {
	await removeItemFromCart(itemId);
	revalidateTag("cart");
}

export async function changeItemQuantityAction(
	itemId: string,
	quantity: number,
	price: number,
) {
	const total = price * quantity;
	await changeItemQuantity(itemId, quantity, total);
	revalidateTag("cart");
}

export async function paymentByStripeAction() {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const cart = await getCartByIdFromCookies();
	if (!cart) {
		return;
	}

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems
			.map((item) =>
				item.product
					? {
							price_data: {
								currency: "usd",
								product_data: {
									name: item.product.name,
									description: item.product.description ?? "",
									images: item.product.images.map((i) => i.url),
								},
								unit_amount: item.product.price,
							},
							quantity: item.quantity,
					  }
					: {},
			)
			.filter(Boolean),
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/canceled`,
	});

	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
}
