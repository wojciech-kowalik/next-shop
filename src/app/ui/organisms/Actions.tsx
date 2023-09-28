import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Actions({}) {
	return (
		<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
			<div className="ml-auto h-full lg:ml-4">
				<Link
					className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
					href="/cart"
				>
					<ShoppingCartIcon />
				</Link>
			</div>
		</div>
	);
}
