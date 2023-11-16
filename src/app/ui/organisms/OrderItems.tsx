import React from "react";
import NextImage from "next/image";
import { formatMoney } from "@/utils";
import { type CartGetByIdQuery, type CartOrderFragment } from "@gql/graphql";

export default function OrderItems({
	order,
	renderQantity,
}: {
	order: CartGetByIdQuery["order"];
	renderQantity: (item: CartOrderFragment["orderItems"][0]) => React.ReactNode;
}) {
	return (
		<ul role="list">
			{order?.orderItems.map(
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
										<p className="p-4 text-right font-semibold text-slate-900">
											{formatMoney(item.total / 100)}
										</p>
									</div>
									<div className="mt-4">{renderQantity(item)}</div>
								</div>
							</div>
						</li>
					),
			)}
		</ul>
	);
}
