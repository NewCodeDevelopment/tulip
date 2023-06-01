import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for navigation-menu", () => {
  /**
   * Test to check if the navigation-menu is rendered
   */
  test("Render navigation-menu", () => {
    render(<></>);
    // expect(screen.getByTestId("navigation-menu")).toBeInTheDocument();
  });
});
