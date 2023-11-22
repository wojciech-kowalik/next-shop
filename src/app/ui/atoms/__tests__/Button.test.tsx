import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useFormStatus } from "react-dom";
import Button from "@/ui/atoms/Button";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-dom", () => ({
	useFormStatus: jest.fn<
		ReturnType<typeof useFormStatus>,
		Parameters<typeof useFormStatus>
	>(),
	...jest.requireActual("react-dom"),
}));

beforeEach(() => {
	jest.clearAllMocks();
	(useFormStatus as jest.Mock).mockImplementation(() => ({
		pending: false,
	}));
});

const label = "Test Button";

describe("Button", () => {
	it("renders the button label correctly", () => {
		render(<Button label={label} />);

		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('renders "Submitting..." when isSubmitting is true', () => {
		render(<Button label={label} isSubmitting />);

		expect(screen.getByText("Submitting...")).toBeInTheDocument();
	});

	it("calls onClick when clicked", async () => {
		const mockOnClick = jest.fn();

		render(<Button label={label} onClick={mockOnClick} />);

		await userEvent.click(screen.getByText(label));

		expect(mockOnClick).toHaveBeenCalled();
	});
});
