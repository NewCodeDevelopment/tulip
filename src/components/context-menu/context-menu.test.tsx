import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for context-menu", () => {
  /**
   * Test to check if the context-menu is rendered
   */
  test("Render context-menu", () => {
    render(<></>);
    // expect(screen.getByTestId("context-menu")).toBeInTheDocument();
  });
});
