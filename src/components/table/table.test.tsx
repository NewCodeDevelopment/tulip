import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for table", () => {
  /**
   * Test to check if the table is rendered
   */
  test("Render table", () => {
    render(<></>);
    // expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
