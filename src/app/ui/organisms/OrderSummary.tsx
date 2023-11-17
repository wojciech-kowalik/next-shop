import { formatMoney } from "@/utils";

export default function OrderSummary({ total }: { total: number }) {
	return (
		<div className="mb-4 mt-4">
			<div className="rounded-lg bg-gray-50 p-4">
				<h2 className="sr-only">Order summary</h2>
				<div className="-my-4 divide-y divide-gray-200 text-xl">
					<div className="flex items-center justify-between py-4">
						<div>
							<div className="text-slate-900">Order total</div>
						</div>
						<div className="font-semibold text-slate-900">
							{formatMoney(total / 100)}
							<div className="text-right text-xs text-slate-500">
								VAT included
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
