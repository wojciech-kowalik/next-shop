"use client";

import { type ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface Props
	extends Pick<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"name" | "type" | "onClick"
	> {
	label: string;
	isSubmitting?: boolean;
	"data-testid"?: string;
}

export default function Button({ "data-testid": dataTestId, ...props }: Props) {
	const { pending } = useFormStatus();
	const { label, isSubmitting, type, name, onClick } = props;

	return (
		<button
			name={name}
			data-testid={dataTestId}
			onClick={onClick}
			className="inline-flex h-10 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
			type={type}
			disabled={isSubmitting || pending}
		>
			{isSubmitting || pending ? "Submitting..." : label}
		</button>
	);
}
