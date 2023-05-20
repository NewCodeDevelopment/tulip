import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./avatar";

describe("Running Test for  Avatar", () => {
  /**
   * Test to check if the Avatar is rendered
   */
  test("Render Avatar", () => {
    render(<Avatar />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });
});
