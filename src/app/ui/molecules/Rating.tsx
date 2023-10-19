import "@smastrom/react-rating/style.css";
import { Rating as RatingReact } from "@smastrom/react-rating";
import { Controller, type Control } from "react-hook-form";
import Label from "@/ui/atoms/Label";
import { type FormValues } from "@/types";

export default function Rating({
	label,
	name,
	control,
	required,
}: {
	label: string;
	name: keyof FormValues;
	control: Control<FormValues>;
	required?: boolean;
}) {
	return (
		<>
			<Label>{label}</Label>
			{/* for test purpose */}
			<input type="hidden" name="rating" />
			<Controller
				name={name}
				control={control}
				rules={{ required }}
				render={({ field }) => {
					return (
						<>
							<RatingReact
								style={{ maxWidth: 100 }}
								value={+field.value}
								onChange={field.onChange}
							/>
							{!field.value && required && (
								<p className="mt-2 text-xs italic text-red-500">
									Please choose rating
								</p>
							)}
						</>
					);
				}}
			/>
		</>
	);
}
