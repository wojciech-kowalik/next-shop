import { type UrlObject } from "url";
import { render, screen } from "@testing-library/react";
import HeaderLink from "@/ui/atoms/HeaderLink";

describe("HeaderLink", () => {
	it("renders the link correctly", () => {
		render(
			<HeaderLink href={{ pathname: "/test" } as UrlObject}>
				Test Link
			</HeaderLink>,
		);

		const link = screen.getByText("Test Link");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/test");
	});
});
