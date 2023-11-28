import { render, screen } from "@testing-library/react";
import Label from "@/ui/atoms/Label";

describe("Label", () => {
	it("renders children correctly", () => {
		render(<Label>Test Label</Label>);

		expect(screen.getByText("Test Label")).toBeInTheDocument();
	});
});
