import Label from "@/ui/atoms/Label";
import { type InputType } from "@/types";

export default function Input({
	label,
	name,
	errors,
	register,
	required,
	isEmail = false,
}: InputType) {
	const emailPattern =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<>
			<Label>{label}</Label>
			<input
				type={isEmail ? "email" : "text"}
				role="textbox"
				className="mb-3 block w-full appearance-none rounded border  px-4 py-3 leading-tight text-gray-700 required:border-red-500 focus:bg-white focus:outline-none"
				{...register(name, {
					required,
					pattern: isEmail ? emailPattern : undefined,
				})}
			/>
			{errors && errors[name] && required && (
				<p role="alert" className="text-xs italic text-red-500">
					{isEmail
						? `Please enter a valid email.`
						: `Please fill out this field.`}
				</p>
			)}
		</>
	);
}
