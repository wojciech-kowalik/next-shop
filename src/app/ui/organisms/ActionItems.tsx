import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CartLink from "@/ui/molecules/CartLink";
import OrderLink from "@/ui/molecules/OrderLink";
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
				<SignedIn>
					<OrderLink />
					<UserButton
						afterSignOutUrl="/"
						afterMultiSessionSingleSignOutUrl="/"
						appearance={{
							elements: {
								userButtonBox:
									"flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500  hover:text-slate-700",
							},
						}}
					/>
				</SignedIn>
				<SignedOut>
					<HeaderLink href={{ pathname: "/sign-in" }}>Sign in</HeaderLink>
				</SignedOut>
			</div>
		</div>
	);
}
