import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import Input from "@/ui/atoms/Input";
import { type FormValues } from "@/types";

const TestedFormWithInput = ({ isEmail }: { isEmail?: boolean }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();
	const onSubmit = jest.fn();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				isEmail={isEmail}
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

describe("Input", () => {
	it("renders the input correctly", () => {
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

	it("shows proper behavior of email field", async () => {
		render(<TestedFormWithInput isEmail />);
		const textBox = screen.getByRole("textbox");

		await userEvent.click(screen.getByRole("button"));

		expect(textBox).toHaveAttribute("type", "email");
		expect(screen.getByText("Please enter a valid email.")).toBeInTheDocument();
		expect(screen.getByRole("alert")).toHaveClass("text-red-500");

		await userEvent.type(textBox, "test@test.pl");

		expect(screen.queryByRole("alert")).not.toBeInTheDocument();
	});
});
