import { render, screen } from "@testing-library/react";
import CollectionCoverImage from "@/ui/atoms/CollectionCoverImage";

describe("CollectionCoverImage", () => {
	it("renders the image correctly", () => {
		render(<CollectionCoverImage alt="Test Alt" src="/test.jpg" />);

		const image = screen.getByAltText("Test Alt");
		expect(image).toBeInTheDocument();
	});
});
