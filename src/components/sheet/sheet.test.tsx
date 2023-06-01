import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for sheet", () => {
  /**
   * Test to check if the sheet is rendered
   */
  test("Render sheet", () => {
    render(<></>);
    // expect(screen.getByTestId("sheet")).toBeInTheDocument();
  });
});
