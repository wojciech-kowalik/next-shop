import { notFound } from "next/navigation";
import SectionHeader from "@/ui/molecules/SectionHeader";
import OrderItems from "@/ui/organisms/OrderItems";
import OrderSummary from "@/ui/organisms/OrderSummary";
import { getOrderById } from "@api/order";

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
			<OrderItems
				order={order}
				renderQantity={(item) => (
					<span className="w-8 text-center" data-testid="quantity">
						Quantity: {item.quantity}
					</span>
				)}
			/>
			<OrderSummary total={order.total} />
		</>
	);
}
