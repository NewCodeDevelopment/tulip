import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AspectRatio } from "./aspect-ratio";

describe("Running Test for AspectRatio", () => {
  /**
   * Test to check if the AspectRatio is rendered
   */
  test("Render AspectRatio", () => {
    render(<AspectRatio />);
  });
});
