import Stripe from "stripe";
import { CheckCircle2 } from "lucide-react";
import { auth } from "@clerk/nextjs";
import Button from "@/ui/atoms/Button";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const { userId } = auth();

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(
		searchParams.session_id,
	);

	const isPaid = stripeCheckoutSession.payment_status === "paid";

	if (!isPaid) {
		return (
			<div className="bg-white p-6  md:mx-auto">
				{stripeCheckoutSession.payment_status}
			</div>
		);
	}

	return (
		<div className="bg-white p-6  md:mx-auto">
			<div className="text-center">
				<CheckCircle2 className="mx-auto my-6 h-16 w-16 text-green-600" />
				<h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
					Your order has been paid
				</h3>
				<p className="prose my-8 text-gray-600">
					Thank you for completing your secure online payment.
				</p>
				<p className="prose">Have a great day!</p>
				<div className="py-10 text-center">
					{userId ? (
						<a href="/orders">
							<Button label="Go to orders" />
						</a>
					) : (
						<a href="/">
							<Button label="Home page" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
