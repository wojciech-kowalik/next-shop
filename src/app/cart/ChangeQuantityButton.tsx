"use client";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { changeItemQuantityAction } from "@/cart/actions";

interface ChangeQuantityButtonProps extends ComponentPropsWithoutRef<"button"> {
	itemId: string;
	quantity: number;
	"data-testid": string;
	children: ReactNode;
}

export default function ChangeQuantityButton({
	itemId,
	quantity,
	children,
	...rest
}: ChangeQuantityButtonProps) {
	return (
		<button
			data-testid={rest["data-testid"]}
			className="h-6 w-6 border"
			onClick={async () => {
				if (quantity >= 1) await changeItemQuantityAction(itemId, quantity);
			}}
		>
			{children}
		</button>
	);
}
