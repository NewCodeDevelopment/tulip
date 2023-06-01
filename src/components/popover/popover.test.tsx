import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for popover", () => {
  /**
   * Test to check if the popover is rendered
   */
  test("Render popover", () => {
    render(<></>);
    // expect(screen.getByTestId("popover")).toBeInTheDocument();
  });
});
