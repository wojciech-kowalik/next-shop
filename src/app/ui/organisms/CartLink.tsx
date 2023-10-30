import { ShoppingCartIcon } from "lucide-react";
import { getCartByIdFromCookies } from "@api/cart";
import HeaderLink from "@/ui/atoms/HeaderLink";

export default async function CartLink() {
	const cart = await getCartByIdFromCookies();

	const quantity =
		cart?.orderItems.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<HeaderLink href={{ pathname: "/cart" }}>
			<ShoppingCartIcon />{" "}
			<div className="w-4">
				<span className="ml-2 text-sm font-medium">{quantity}</span>
			</div>
		</HeaderLink>
	);
}
