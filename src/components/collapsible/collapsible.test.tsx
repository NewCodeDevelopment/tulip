import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

describe("Running Test for Checkbox", () => {
  /**
   * Test to check if the Checkbox is rendered
   */
  test("Render Checkbox", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution required.
        </CollapsibleContent>
      </Collapsible>,
    );
  });
});
