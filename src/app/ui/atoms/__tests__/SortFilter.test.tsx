import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import SortFilter from "@/ui/atoms/SortFilter";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
	useSearchParams: () => new URLSearchParams("/?sort=price_DESC"),
}));

describe("SortFilter", () => {
	it("renders the select options correctly", () => {
		render(<SortFilter />);

		expect(screen.getByRole("combobox")).toBeInTheDocument();
	});

	it("calls router.push with the correct query string when an option is selected", async () => {
		const mockRouter = {
			push: jest.fn(),
		};
		(useRouter as jest.Mock).mockReturnValue(mockRouter);

		render(<SortFilter />);

		await userEvent.selectOptions(screen.getByRole("combobox"), ["price_DESC"]);

		expect(mockRouter.push).toHaveBeenCalled();
	});
});
