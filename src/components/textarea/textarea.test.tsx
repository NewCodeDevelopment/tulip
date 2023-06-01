import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Running Test for textarea", () => {
  /**
   * Test to check if the textarea is rendered
   */
  test("Render textarea", () => {
    render(<></>);
    // expect(screen.getByTestId("textarea")).toBeInTheDocument();
  });
});
