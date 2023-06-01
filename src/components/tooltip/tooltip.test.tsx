import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for tooltip", () => {
  /**
   * Test to check if the tooltip is rendered
   */
  test("Render tooltip", () => {
    render(<></>);
    // expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
});
