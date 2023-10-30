import CartLink from "@/ui/organisms/CartLink";
import Search from "@/ui/organisms/Search";
import HeaderLink from "@/ui/atoms/HeaderLink";

export default function ActionItems({}) {
	return (
		<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
			<div className="w-full max-w-lg lg:max-w-xs">
				<Search />
			</div>
			<div className="ml-auto flex h-full lg:ml-4">
				<CartLink />
				<HeaderLink href={{ pathname: "/sign-in" }}>Sign in</HeaderLink>
			</div>
		</div>
	);
}
