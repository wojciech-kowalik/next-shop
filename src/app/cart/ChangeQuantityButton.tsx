"use client";

import { useOptimistic } from "react";
import { changeItemQuantityAction } from "@/cart/actions";

export function ChangeQuantityButton({
	itemId,
	quantity,
}: {
	itemId: string;
	quantity: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantityAction(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
}
