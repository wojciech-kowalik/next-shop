import Link from "next/link";
import { redirect } from "next/navigation";
import RemoveButton from "./RemoveButton";
import CheckoutButton from "./CheckoutButton";
import ChangeQuantityButton from "./ChangeQuantityButton";
import { formatMoney } from "@/utils";
import { getCartByIdFromCookies } from "@api/cart";
import SectionHeader from "@/ui/molecules/SectionHeader";
import OrderItems from "@/ui/organisms/OrderItems";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();

	if (!cart || !cart.orderItems.length) {
		redirect("/");
	}

	const total = cart
		? cart.orderItems.reduce((acc, item) => acc + item.total, 0)
		: 0;

	return (
		<>
			<div>
				<SectionHeader name="Your shopping cart" />
				<div></div>
				<h2 className="sr-only">Products in your shopping cart</h2>
				<OrderItems
					order={cart}
					renderQantity={(item) => (
						<>
							<div className="flex">
								<ChangeQuantityButton
									data-testid="decrement"
									itemId={item.id}
									price={item.product?.price ?? 0}
									quantity={item.quantity - 1}
								>
									-
								</ChangeQuantityButton>
								<span className="w-8 text-center" data-testid="quantity">
									{item.quantity}
								</span>
								<ChangeQuantityButton
									data-testid="increment"
									itemId={item.id}
									price={item.product?.price ?? 0}
									quantity={item.quantity + 1}
								>
									+
								</ChangeQuantityButton>
							</div>
							<RemoveButton itemId={item.id} />
						</>
					)}
				/>

				<div className="mt-8">
					<div className="rounded-lg bg-gray-50 p-4">
						<h2 className="sr-only">Order summary</h2>
						<div className="-my-4 divide-y divide-gray-200 text-sm">
							<div className="flex items-center justify-between py-4">
								<div>
									<div className="text-slate-900">Order total</div>
									<p className="mt-1 text-sm text-slate-500">
										Shipping and taxes will be calculated at the next step
									</p>
								</div>
								<div className=" small-caps font-medium text-slate-900">
									{formatMoney(total / 100)}
								</div>
							</div>
						</div>
					</div>
					<div className="mt-10 ">
						<CheckoutButton />
					</div>
					<div className="mt-4 text-center ">
						<Link
							className="text-sm font-medium text-blue-600 hover:text-blue-500"
							href="/products"
						>
							Continue shopping
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
