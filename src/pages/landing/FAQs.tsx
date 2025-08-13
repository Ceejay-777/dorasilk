import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="py-25 flex flex-col items-center justify-center gap-12 px-12">
      <div className="rounded-full text-deepbrown border-2 border-white-1 bg-gradient-to-r from-gold-2 to-white-2 py-2 px-5 text-sm font-medium">
        FAQs
      </div>

      <div className="max-w-[620px]">
        <h2
          className="bg-gradient-to-r from-gold-2  to-white-1
               bg-clip-text text-transparent text-[64px] leading-[76px] font-medium font-playfair-display text-center mb-6"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-[20px] text-center max-w-[800px]">
          Everything you need to know before you start creating your aesthetic
          masterpiece.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-4/5 flex flex-col gap-4"
      >
        <AccordionItem
          value="item-1"
          className="border bg-white-1 rounded-2xl text-black p-6"
        >
          <AccordionTrigger className="text-2xl text-deepbrown">
            How to access rituals
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes! You can start for free with 3 image exports per month and
              access to basic presets. For unlimited use and higher quality, we
              offer affordable paid plans.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border bg-white-1 rounded-2xl text-black p-6"
        >
          <AccordionTrigger className="text-2xl text-deepbrown">
            Where can I use the products?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes! You can start for free with 3 image exports per month and
              access to basic presets. For unlimited use and higher quality, we
              offer affordable paid plans.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border bg-white-1 rounded-2xl text-black p-6"
        >
          <AccordionTrigger className="text-2xl text-deepbrown">
            Is it for all hair types?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes! You can start for free with 3 image exports per month and
              access to basic presets. For unlimited use and higher quality, we
              offer affordable paid plans.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border bg-white-1 rounded-2xl text-black p-6"
        >
          <AccordionTrigger className="text-2xl text-deepbrown">
            Shipping / returns
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes! You can start for free with 3 image exports per month and
              access to basic presets. For unlimited use and higher quality, we
              offer affordable paid plans.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border bg-white-1 rounded-2xl text-black p-6"
        >
          <AccordionTrigger className="text-2xl text-deepbrown">
            How to verify your product
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes! You can start for free with 3 image exports per month and
              access to basic presets. For unlimited use and higher quality, we
              offer affordable paid plans.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
