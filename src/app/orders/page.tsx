import Link from "next/link";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { getOrdersByEmail } from "@api/order";

import SectionHeader from "@/ui/molecules/SectionHeader";
import { formatMoney } from "@/utils";

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0].emailAddress ?? "";
	const orders = await getOrdersByEmail(email);

	if (!user) {
		redirect("/sign-in");
	}

	return (
		<>
			<SectionHeader name="Orders">
				<div className="mt-4 max-w-2xl text-base text-slate-700">
					{user.firstName} {user.lastName} (
					<span className="italic">{email}</span>)
					<div>{orders.length} order(s)</div>
				</div>
			</SectionHeader>
			<div>
				<div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Id
									</th>
									<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Created at
									</th>
									<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Items
									</th>
									<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Total
									</th>
									<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								{orders &&
									orders.map((order) => (
										<tr key={order.id}>
											<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
												<p className="whitespace-no-wrap text-gray-900">
													<Link
														className="text-sm text-blue-600 underline hover:text-blue-500"
														href={`/orders/${order.id}`}
													>
														{order.id}
													</Link>
												</p>
											</td>
											<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
												<p className="whitespace-no-wrap text-gray-900">
													<time dateTime={order.createdAt as string}>
														{new Date(
															order.createdAt as string,
														).toLocaleDateString("en-US")}
													</time>
												</p>
											</td>
											<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
												<p className="whitespace-no-wrap text-gray-900">
													{order.orderItems.length}
												</p>
											</td>
											<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
												<p className="whitespace-no-wrap text-gray-900">
													{formatMoney(order.total / 100)}
												</p>
											</td>
											<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
												<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
													<span
														aria-hidden
														className="absolute inset-0 rounded-full bg-green-200 opacity-50"
													></span>
													<span className="relative">Paid</span>
												</span>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
