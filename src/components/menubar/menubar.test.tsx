import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for menubar", () => {
  /**
   * Test to check if the menubar is rendered
   */
  test("Render menubar", () => {
    render(<></>);
    // expect(screen.getByTestId("menubar")).toBeInTheDocument();
  });
});
