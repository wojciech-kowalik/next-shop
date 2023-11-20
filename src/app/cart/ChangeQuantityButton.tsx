"use client";
import { toast } from "react-toastify";
import {
	useTransition,
	type ComponentPropsWithoutRef,
	type ReactNode,
} from "react";
import { changeItemQuantityAction } from "@/cart/actions";

interface ChangeQuantityButtonProps extends ComponentPropsWithoutRef<"button"> {
	itemId: string;
	quantity: number;
	price: number;
	"data-testid": string;
	children: ReactNode;
}

export default function ChangeQuantityButton({
	itemId,
	quantity,
	price,
	children,
	...rest
}: ChangeQuantityButtonProps) {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			data-testid={rest["data-testid"]}
			className="h-6 w-6 cursor-pointer border disabled:cursor-wait disabled:text-slate-400 disabled:opacity-50"
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					if (quantity >= 1) {
						await changeItemQuantityAction(itemId, quantity, price);
						toast.success("Quantity updated");
					}
				})
			}
		>
			{children}
		</button>
	);
}
