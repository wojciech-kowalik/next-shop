import Link from "next/link";
import NextImage from "next/image";
import { redirect } from "next/navigation";
import RemoveButton from "./RemoveButton";
import CheckoutButton from "./CheckoutButton";
import ChangeQuantityButton from "./ChangeQuantityButton";
import { formatMoney } from "@/utils";
import { getCartByIdFromCookies } from "@api/cart";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();

	if (cart?.orderItems.length === 0) {
		redirect("/");
	}

	return (
		<>
			<section className="mx-auto w-full max-w-7xl p-4">
				<div className="">
					<h1 className="text-3xl font-bold tracking-tight text-slate-900">
						Your Shopping Cart
					</h1>

					<h2 className="sr-only">Products in your shopping cart</h2>
					<ul
						role="list"
						className="divide-y divide-gray-200 border-b border-t border-gray-200"
					>
						{cart?.orderItems.map(
							(item) =>
								item.product && (
									<li key={item.product.id} className="flex py-4">
										<div className="flex-shrink-0 rounded-md border bg-slate-50">
											<NextImage
												className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
												width={200}
												height={200}
												src={item.product.images[0].url}
												alt=""
											/>
										</div>
										<div className="relative ml-4 flex flex-1 flex-col justify-between">
											<div>
												<div className="flex justify-between">
													<div className="pr-6">
														<h3 className="font-medium text-slate-700">
															{item.product.name}
														</h3>
														<p className="mt-1 text-sm text-slate-500">
															{item.product.categories[0].name}
														</p>
													</div>
													<p className="small-caps p-4  text-right font-semibold text-slate-900">
														{formatMoney(item.total / 100)}
													</p>
												</div>
												<div className="mt-4">
													<div className="flex">
														<ChangeQuantityButton
															data-testid="decrement"
															itemId={item.id}
															quantity={item.quantity - 1}
														>
															-
														</ChangeQuantityButton>
														<span
															className="w-8 text-center"
															data-testid="quantity"
														>
															{item.quantity}
														</span>
														<ChangeQuantityButton
															data-testid="increment"
															itemId={item.id}
															quantity={item.quantity + 1}
														>
															+
														</ChangeQuantityButton>
													</div>
													<RemoveButton itemId={item.id} />
												</div>
											</div>
										</div>
									</li>
								),
						)}
					</ul>

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
										{cart && formatMoney(cart.total / 100)}
									</div>
								</div>
							</div>
						</div>
						<div className="mt-10 grid grid-cols-2">
							<div></div>
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
			</section>
			<section className="mx-auto w-full max-w-7xl p-8">
				{/* <h1>Order #{cart.id} summary</h1>

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
			<div classNameName="mt-10 grid grid-cols-2">
				<div></div>
				<CheckoutButton />
			</div>

			<div classNameName="mt-4 text-center">
				<Link href="/products">Continue shopping</Link>
			</div> */}
			</section>
		</>
	);
}
