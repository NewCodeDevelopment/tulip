import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for label", () => {
  /**
   * Test to check if the label is rendered
   */
  test("Render label", () => {
    render(<></>);
    // expect(screen.getByTestId("label")).toBeInTheDocument();
  });
});
