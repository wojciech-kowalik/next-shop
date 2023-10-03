import { paymentByStripeAction } from "@/cart/actions";

export default function CheckoutButton() {
	return (
		<form action={paymentByStripeAction}>
			<button
				type="submit"
				className="w-full rounded border border-transparent bg-blue-500 px-6 py-3 font-medium text-slate-50 hover:bg-blue-600 disabled:bg-gray-300"
			>
				Checkout
			</button>
		</form>
	);
}
