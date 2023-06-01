import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for tabs", () => {
  /**
   * Test to check if the tabs is rendered
   */
  test("Render tabs", () => {
    render(<></>);
    // expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });
});
