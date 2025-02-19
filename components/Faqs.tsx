import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BoxReveal } from "./magicui/box-reveal";
import { TypingAnimation } from "./magicui/typing-animation";

const Faqs = () => {
  return (
    <div id="faqs" className="w-full px-10 sm:px-0 sm:min-h-screen flex flex-col gap-10 mt-20 items-center">
    <BoxReveal>
    <h1 className="font-bebas text-white text-5xl text-center sm:text-7xl">
        frequently asked questions
      </h1>
    </BoxReveal>
    <TypingAnimation className="font-jetbrains text-brand text-xl">not so frequently</TypingAnimation>
      <Accordion className="w-full md:w-[60%] sm:mt-32 mb-10" type="single" collapsible>
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="list-trigger">Is it accessible?</AccordionTrigger>
          <AccordionContent className="list-item">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="">
          <AccordionTrigger className="list-trigger">Is it accessible?</AccordionTrigger>
          <AccordionContent className="list-item">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="">
          <AccordionTrigger className="list-trigger">Is it accessible?</AccordionTrigger>
          <AccordionContent className="list-item">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="">
          <AccordionTrigger className="list-trigger">Is it accessible?</AccordionTrigger>
          <AccordionContent className="list-item">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="">
          <AccordionTrigger className="list-trigger">Is it accessible?</AccordionTrigger>
          <AccordionContent className="list-item">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      
      </Accordion>
    </div>
  );
};

export default Faqs;
