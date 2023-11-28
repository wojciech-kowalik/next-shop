import { render, screen } from "@testing-library/react";
import { useRouter, usePathname } from "next/navigation";
import ActiveLink from "@/ui/atoms/ActiveLink";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
	usePathname: jest.fn(),
}));

describe("ActiveLink", () => {
	it("renders children correctly", () => {
		(useRouter as jest.Mock).mockReturnValue({
			pathname: "/",
		});
		(usePathname as jest.Mock).mockReturnValue("/");

		render(<ActiveLink href="/">Test Link</ActiveLink>);

		expect(screen.getByText("Test Link")).toBeInTheDocument();
	});

	it("adds active class to the current page link", () => {
		(useRouter as jest.Mock).mockReturnValue({
			pathname: "/test",
		});
		(usePathname as jest.Mock).mockReturnValue("/test");

		render(
			<ActiveLink href="/test" activeClassName="active">
				Test Link
			</ActiveLink>,
		);

		expect(screen.getByText("Test Link")).toHaveClass("active");
	});
});
