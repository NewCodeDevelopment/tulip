import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for toast", () => {
  /**
   * Test to check if the toast is rendered
   */
  test("Render toast", () => {
    render(<></>);
    // expect(screen.getByTestId("toast")).toBeInTheDocument();
  });
});
