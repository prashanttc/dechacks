import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BoxReveal } from "./magicui/box-reveal";
import { TypingAnimation } from "./magicui/typing-animation";
import { faqs } from "@/lib/utils";

const Faqs = () => {
  return (
    <div id="faqs" className="w-full z-10 px-10 sm:px-0 mb-10 xl:mb-32 sm:min-h-screen flex flex-col gap-10 mt-20 items-center">
    <BoxReveal>
    <h1 className="font-bebas text-white text-5xl text-center sm:text-7xl">
        frequently asked questions
      </h1>
    </BoxReveal>
    <TypingAnimation className=" text-brand text-xl">Got a question? Keep it to yourself.</TypingAnimation>
      <Accordion className="w-full md:w-[80%] sm:mt-20 mb-10" type="single" collapsible>
    {faqs.map((faq)=>(
  <AccordionItem key={faq.value} value={faq.value} >
  <AccordionTrigger className="list-trigger">{faq.trigger}</AccordionTrigger>
  <AccordionContent className="list-item">
{faq.content}  </AccordionContent>
</AccordionItem>
    ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
