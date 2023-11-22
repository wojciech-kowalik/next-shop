import { render, screen } from "@testing-library/react";
import Footer from "@/ui/organisms/Footer";

beforeEach(() => {
	render(<Footer />);
});

describe("Footer", () => {
	it("renders logos correctly", () => {
		const logos = screen.getAllByRole("img");

		expect(logos.length).toEqual(2);
		expect(logos[0]).toHaveAttribute("src", "/images/logo.svg");
		expect(logos[1]).toHaveAttribute("src", "/images/github.svg");
	});

	it.each([
		{ name: "About", href: "/about" },
		{ name: "Privacy Policy", href: "/policy" },
		{ name: "Regulations", href: "/regulations" },
	])("renders footer links correctly", ({ name, href }) => {
		const link = screen.getByText(name);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", href);
	});
});
