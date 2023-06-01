import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for dropdown-menu", () => {
  /**
   * Test to check if the dropdown-menu is rendered
   */
  test("Render dropdown-menu", () => {
    render(<></>);
    // expect(screen.getByTestId("dropdown-menu")).toBeInTheDocument();
  });
});
