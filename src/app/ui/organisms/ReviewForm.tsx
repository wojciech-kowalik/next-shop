"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { addReviewToProductAction } from "@/ui/organisms/actions";
import { type FormValues } from "@/types";
import Input from "@/ui/atoms/Input";
import Textarea from "@/ui/atoms/Textarea";
import Rating from "@/ui/molecules/Rating";

export default function ReviewForm({ productId }: { productId: string }) {
	const {
		register,
		handleSubmit,
		control,
		formState: { isSubmitting, errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		await addReviewToProductAction(data, productId);
	};

	return (
		<form
			data-testid="add-review-form"
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-lg"
		>
			<div className="mb-6 ">
				<div className="mb-6">
					<Input
						label="Review title"
						name="headline"
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="mb-6">
					<Textarea
						label="Review content"
						name="content"
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="mb-6 w-full">
					<Rating label="Rating" name="rating" control={control} required />
				</div>
				<div className="mb-6">
					<Input
						label="Name"
						name="name"
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="mb-6">
					<Input
						label="Email"
						name="email"
						register={register}
						errors={errors}
						required
						isEmail
					/>
				</div>
			</div>
			<button
				className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-wait"
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? "Submitting..." : "Submit review"}
			</button>
		</form>
	);
}
