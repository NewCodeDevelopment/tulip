import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for hover-card", () => {
  /**
   * Test to check if the hover-card is rendered
   */
  test("Render hover-card", () => {
    render(<></>);
    // expect(screen.getByTestId("hover-card")).toBeInTheDocument();
  });
});
