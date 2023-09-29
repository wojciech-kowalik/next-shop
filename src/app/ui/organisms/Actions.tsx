import Cart from "./Cart";
import Search from "@/ui/organisms/Search";

export default function Actions({}) {
	return (
		<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
			<div className="w-full max-w-lg lg:max-w-xs">
				<Search />
			</div>
			<div className="ml-auto h-full lg:ml-4">
				<Cart />
			</div>
		</div>
	);
}
