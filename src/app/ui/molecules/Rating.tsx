import { Rating as RatingReact } from "@smastrom/react-rating";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import Label from "@/ui/atoms/Label";
import { type FormValues } from "@/types";

export default function Rating({
	label,
	name,
	control,
	required,
	errors,
}: {
	label: string;
	name: keyof FormValues;
	control: Control<FormValues>;
	required?: boolean;
	errors: FieldErrors<FormValues>;
}) {
	return (
		<>
			<Label>{label}</Label>
			{/* for test purpose */}
			<input type="text" name="rating" />
			<Controller
				name={name}
				control={control}
				rules={{
					validate: (rating) => +rating > 0,
				}}
				render={({ field: { onChange, onBlur, value } }) => {
					return (
						<>
							<RatingReact
								isRequired={required}
								style={{ maxWidth: 100 }}
								value={+value}
								onChange={onChange}
								onBlur={onBlur}
							/>
							{errors.rating && (
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
