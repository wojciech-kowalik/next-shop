import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { getOrdersByEmail } from "@api/order";

export default async function OrderPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0].emailAddress ?? "";
	const orders = await getOrdersByEmail(email);

	if (!user) {
		redirect("/sign-in");
	}

	return (
		<div className="my-auto flex h-screen flex-col items-center">
			<h1>Order Page</h1>
			{orders &&
				orders.map((order) => (
					<div key={order.id}>
						<h2>Order {order.id}</h2>
						<p>Order Total: {order.total}</p>

						<p>Order Items:</p>
						<ul>
							{order.orderItems.map((orderItem) => (
								<li key={orderItem.id}>
									{orderItem.product.name} - {orderItem.quantity} -{" "}
									{orderItem.product.price}
								</li>
							))}
						</ul>
					</div>
				))}
		</div>
	);
}
