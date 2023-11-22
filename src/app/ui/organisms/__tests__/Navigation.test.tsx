import { render, screen } from "@testing-library/react";
import { useRouter, usePathname } from "next/navigation";
import Navigation from "@/ui/organisms/Navigation";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
	usePathname: jest.fn(),
}));

describe("Navigation", () => {
	it("renders navigation link correctly", () => {
		const hoodiesPath = "/categories/hoodies";
		(useRouter as jest.Mock).mockReturnValue({
			asPath: "/",
		});
		(usePathname as jest.Mock).mockReturnValue(hoodiesPath);

		render(<Navigation />);

		expect(screen.getByText("Hoodies")).toHaveAttribute("href", hoodiesPath);

		expect(screen.getByText("Hoodies")).toHaveClass(
			"border-blue-500 text-slate-700",
		);
	});
});
