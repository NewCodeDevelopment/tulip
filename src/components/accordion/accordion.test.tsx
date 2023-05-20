import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

describe("Running Test for Accordion", () => {
  /**
   * Test to check if the Accordion is rendered
   */
  test("Render Accordion", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByTestId("accordion-item")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-trigger")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-content")).toBeInTheDocument();
  });
});
