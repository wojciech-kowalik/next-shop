import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import Textarea from "@/ui/atoms/Textarea";
import { type FormValues } from "@/types";

const TestedFormWithInput = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();
	const onSubmit = jest.fn();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Textarea
				label="Test Label"
				name="name"
				register={register}
				required
				errors={errors}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

describe("Textarea", () => {
	it("renders the textarea correctly", () => {
		render(<TestedFormWithInput />);

		const input = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("name", "name");
	});

	it("displays an error message when required and not filled", async () => {
		render(<TestedFormWithInput />);

		await userEvent.click(screen.getByRole("button"));

		expect(screen.getByText("Please fill out this field.")).toBeInTheDocument();
	});
});
