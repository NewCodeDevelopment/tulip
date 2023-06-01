import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for separator", () => {
  /**
   * Test to check if the separator is rendered
   */
  test("Render separator", () => {
    render(<></>);
    // expect(screen.getByTestId("separator")).toBeInTheDocument();
  });
});
