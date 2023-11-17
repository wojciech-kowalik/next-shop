import { LayoutListIcon } from "lucide-react";
import HeaderLink from "@/ui/atoms/HeaderLink";

export default function OrderLink() {
	return (
		<HeaderLink href={{ pathname: "/orders" }}>
			<LayoutListIcon />
		</HeaderLink>
	);
}
