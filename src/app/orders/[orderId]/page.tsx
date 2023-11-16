import { notFound } from "next/navigation";
import SectionHeader from "@/ui/molecules/SectionHeader";
import OrderItems from "@/ui/organisms/OrderItems";
import { getOrderById } from "@api/order";
import { formatMoney } from "@/utils";

export default async function OrderPage({
	params,
}: {
	params: { orderId: string };
}) {
	const order = await getOrderById(params.orderId);

	if (!order) {
		notFound();
	}

	return (
		<>
			<SectionHeader name="Order">
				<div className="mt-4 max-w-2xl text-base text-slate-700">
					<div>{params.orderId}</div>
					<time dateTime={order.createdAt as string}>
						<b>Created at:</b>{" "}
						{new Date(order.createdAt as string).toLocaleDateString("en-US")}
					</time>
				</div>
			</SectionHeader>
			<div className="mb-4 mt-4">
				<div className="rounded-lg bg-gray-50 p-4">
					<h2 className="sr-only">Order summary</h2>
					<div className="-my-4 divide-y divide-gray-200 text-xl">
						<div className="flex items-center justify-between py-4">
							<div>
								<div className="text-slate-900">Order total</div>
							</div>
							<div className="font-semibold text-slate-900">
								{formatMoney(order.total / 100)}
								<div className="text-right text-xs text-slate-500">
									VAT included
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<OrderItems
				order={order}
				renderQantity={(item) => (
					<span className="w-8 text-center" data-testid="quantity">
						Quantity: {item.quantity}
					</span>
				)}
			/>
		</>
	);
}
