import Label from "@/ui/atoms/Label";
import { type InputType } from "@/types";

export default function Textarea({
	label,
	name,
	register,
	errors,
	required,
}: InputType) {
	return (
		<>
			<Label>{label}</Label>
			<textarea
				className="mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
				{...register(name, { required })}
			/>
			{errors && errors[name] && required && (
				<p className="text-xs italic text-red-500">
					Please fill out this field.
				</p>
			)}
		</>
	);
}
