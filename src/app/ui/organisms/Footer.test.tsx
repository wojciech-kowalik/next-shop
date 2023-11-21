import { render, screen } from "@testing-library/react";
import Footer from "@/ui/organisms/Footer";

describe("Footer", () => {
	it("renders logos and about link correctly", () => {
		render(<Footer />);

		const logos = screen.getAllByAltText("");
		expect(logos.length).toEqual(2);
		expect(logos[0]).toHaveAttribute("src", "/images/logo.svg");
		expect(logos[1]).toHaveAttribute("src", "/images/github.svg");

		const aboutLink = screen.getByText("About");
		expect(aboutLink).toBeInTheDocument();
		expect(aboutLink).toHaveAttribute("href", "/about");
	});
});
