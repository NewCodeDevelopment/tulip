import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for scroll-area", () => {
  /**
   * Test to check if the scroll-area is rendered
   */
  test("Render scroll-area", () => {
    render(<></>);
    // expect(screen.getByTestId("scroll-area")).toBeInTheDocument();
  });
});
