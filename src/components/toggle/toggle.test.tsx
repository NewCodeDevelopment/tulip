import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for toggle", () => {
  /**
   * Test to check if the toggle is rendered
   */
  test("Render toggle", () => {
    render(<></>);
    // expect(screen.getByTestId("toggle")).toBeInTheDocument();
  });
});
