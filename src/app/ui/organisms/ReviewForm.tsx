"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addReviewToProductAction } from "@/ui/organisms/actions";
import { type FormValues } from "@/types";
import Input from "@/ui/atoms/Input";
import Textarea from "@/ui/atoms/Textarea";
import Button from "@/ui/atoms/Button";
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
		toast.success("Review added");
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
					<Rating
						label="Rating"
						name="rating"
						control={control}
						errors={errors}
						required
					/>
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
			<Button
				label="Submit review"
				type="submit"
				isSubmitting={isSubmitting}
				data-testid="button-review-subimt"
			/>
		</form>
	);
}
