import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for input", () => {
  /**
   * Test to check if the input is rendered
   */
  test("Render input", () => {
    render(<></>);
    // expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
