import { render, screen } from "@testing-library/react";
import Loading from "@/ui/molecules/Loading";

describe("Loading", () => {
	it("renders the loading spinner correctly", () => {
		render(<Loading />);

		const spinner = screen.getByRole("status");
		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveAttribute("aria-busy", "true");
	});

	it("renders the accessible label correctly", () => {
		render(<Loading />);

		const label = screen.getByText("Loading...");
		expect(label).toBeInTheDocument();
		expect(label).toHaveClass("sr-only");
	});
});
