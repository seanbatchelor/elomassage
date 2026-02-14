import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function BookAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      {/* Appointments */}
      <AccordionItem value="appointments">
        <AccordionTrigger>Appointments</AccordionTrigger>
        <AccordionContent>
          <p className="text-sage/90 leading-relaxed">
            Appointments are available in 1 hour, 1.5 hour and 2 hour durations.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Pricing */}
      <AccordionItem value="pricing">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 text-sage/90">
            <div className="space-y-2">
              <p>1 hour — $120</p>
              <p>1.5 hours — $180</p>
              <p>2 hours — $240</p>
            </div>
            <p className="leading-relaxed pt-2">
              Many clients attend on a fortnightly or monthly basis as part of their ongoing care.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Health Insurance */}
      <AccordionItem value="health-insurance">
        <AccordionTrigger>Health Insurance</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 text-sage/90">
            <p className="leading-relaxed">
              Most major private health funds are accepted.
            </p>
            <p className="leading-relaxed">
              Please confirm your level of cover for remedial massage directly with your provider.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* What to Expect */}
      <AccordionItem value="what-to-expect">
        <AccordionTrigger>What to Expect</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 text-sage/90">
            <p className="leading-relaxed">
              Your first appointment will include a brief discussion of your concerns, 
              health history and treatment goals.
            </p>
            <p className="leading-relaxed">
              Assessment and treatment are tailored to your individual needs. Techniques 
              may vary depending on presentation and response on the day.
            </p>
            <p className="leading-relaxed">
              If appropriate, recommendations for ongoing care or collaboration with other 
              practitioners may be discussed.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Cancellations */}
      <AccordionItem value="cancellations">
        <AccordionTrigger>Cancellations</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 text-sage/90">
            <p className="leading-relaxed">
              To cancel or reschedule your appointment, please contact Eloise via phone, 
              email or text.
            </p>
            <p className="leading-relaxed">
              Cancellations made with less than 24 hours' notice, or failure to attend 
              without notice, will incur a fee equal to the full cost of the session.
            </p>
            <p className="leading-relaxed">
              A small number of appointments may become available each week due to cancellations.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
