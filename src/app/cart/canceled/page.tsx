import { XCircleIcon } from "lucide-react";
import Button from "@/ui/atoms/Button";

export default function CartCanceled() {
	return (
		<div className="bg-white p-6  md:mx-auto">
			<div className="text-center">
				<XCircleIcon className="mx-auto my-6 h-16 w-16 text-red-600" />
				<h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
					Checkout has been canceled!
				</h3>
				<p className="prose my-8 text-gray-600">
					Your order has been canceled. If you didn&apos;t intend to cancel,
					please contact our support team for assistance.
				</p>
				<p className="prose">
					Feel free to return to your cart to review items or start a new order.
					Thank you for considering us, and we hope to assist you with your
					purchase soon.
				</p>
				<div className="py-10 text-center">
					<a href="/">
						<Button label="Go back" />
					</a>
				</div>
			</div>
		</div>
	);
}
