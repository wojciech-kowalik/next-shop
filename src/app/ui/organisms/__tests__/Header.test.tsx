import { render, screen } from "@testing-library/react";
import Header from "@/ui/organisms/Header";

describe("Header", () => {
	it("renders children correctly", () => {
		render(<Header>Test Child</Header>);

		expect(screen.getByText("Test Child")).toBeInTheDocument();
	});
});
