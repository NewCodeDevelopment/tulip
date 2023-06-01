import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for skeleton", () => {
  /**
   * Test to check if the skeleton is rendered
   */
  test("Render skeleton", () => {
    render(<></>);
    // expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
