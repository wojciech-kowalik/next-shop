import { paymentByStripeAction } from "@/cart/actions";
import Button from "@/ui/atoms/Button";

export default function CheckoutButton() {
	return (
		<form action={paymentByStripeAction}>
			<Button label="Checkout" type="submit" />
		</form>
	);
}
