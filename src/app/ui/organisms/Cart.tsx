import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { getCartByIdFromCookies } from "@api/cart";

export default async function Cart() {
	const cart = await getCartByIdFromCookies();
	const quantity = cart?.orderItems.length || 0;

	return (
		<Link
			className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
			href="/cart"
		>
			<ShoppingCartIcon />{" "}
			<div className="w-4">
				<span className="ml-2 text-sm font-medium">{quantity}</span>
			</div>
		</Link>
	);
}
