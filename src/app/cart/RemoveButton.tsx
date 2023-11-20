"use client";

import { toast } from "react-toastify";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItemFromCartAction } from "@/cart/actions";

export default function RemoveButton({ itemId }: { itemId: string }) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await toast.promise(removeItemFromCartAction(itemId), {
						success: "Removed from cart",
						error: "Error removing from cart",
					});
					router.refresh();
				});
			}}
			className="cursor-pointer text-red-500 disabled:cursor-wait disabled:text-slate-400 disabled:opacity-50"
		>
			Remove
		</button>
	);
}
