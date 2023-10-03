import Link from "next/link";
import { redirect } from "next/navigation";
import { ChangeQuantityButton } from "./ChangeQuantityButton";
import RemoveButton from "./RemoveButton";
import CheckoutButton from "./CheckoutButton";
import { formatMoney } from "@/utils";
import { getCartByIdFromCookies } from "@api/cart";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<ChangeQuantityButton
										itemId={item.id}
										quantity={item.quantity}
									/>
								</td>
								<td>{formatMoney(item.product.price / 100)}</td>
								<td>
									<RemoveButton itemId={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="mt-10 grid grid-cols-2">
				<div></div>
				<CheckoutButton />
			</div>

			<div className="mt-4 text-center">
				<Link href="/products">Continue shopping</Link>
			</div>
		</div>
	);
}
