import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const topFields = [
  {
    id: "patient-name",
    placeholder: "Patient name",
    type: "text",
  },
  {
    id: "phone-number",
    placeholder: "Phone Number",
    type: "text",
  },
];

const selectFields = [
  {
    id: "department",
    placeholder: "Select Department",
  },
  {
    id: "doctor",
    placeholder: "Select Doctor",
  },
  {
    id: "doctor-time",
    placeholder: "Select Doctor Time",
  },
];

export const PricingPlansSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full justify-center px-4 py-16 sm:py-20 lg:py-[120px]">
      <div className="w-full max-w-[1310px] px-[7.5px]">
        <Card className="overflow-hidden rounded-[10px] border-0 bg-transparent shadow-none">
          <CardContent className="grid p-0 md:grid-cols-2">
            <section
              aria-labelledby="consulting-title"
              className="flex flex-col justify-between gap-8 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:min-h-[658px] md:gap-0 lg:p-[70px]"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/mqz82gwr21qAkL/img/container-5.png)",
              }}
            >
              <div className="flex flex-col items-start">
                <h2
                  id="consulting-title"
                  className="[font-family:'Syne',Helvetica] text-4xl font-bold leading-[1.1] tracking-[0] text-white sm:text-5xl sm:leading-[52.8px]"
                >
                  Book your Free Consulting
                </h2>
              </div>
              <form className="mt-5 flex w-full max-w-[508px] flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {topFields.map((field) => (
                    <Input
                      key={field.id}
                      id={field.id}
                      type={field.type}
                      defaultValue=""
                      placeholder={field.placeholder}
                      className="h-[50px] rounded-[25px] border-white bg-transparent px-[15px] text-sm text-white placeholder:text-white [font-family:'Rubik',Helvetica]"
                    />
                  ))}
                </div>
                {selectFields.slice(0, 1).map((field) => (
                  <button
                    key={field.id}
                    type="button"
                    className="flex h-[50px] w-full items-center justify-between rounded-[100px] border border-[#ddd8f9] bg-transparent px-[18px] pr-[22px] text-left"
                  >
                    <span className="[font-family:'Rubik',Helvetica] text-sm font-normal leading-10 tracking-[0] text-white">
                      {field.placeholder}
                    </span>
                    <ChevronDownIcon className="h-4 w-4 text-white" />
                  </button>
                ))}

                {selectFields.slice(1, 2).map((field) => (
                  <button
                    key={field.id}
                    type="button"
                    className="mt-4 flex h-[50px] w-full items-center justify-between rounded-[100px] border border-[#ddd8f9] bg-transparent px-[18px] pr-[22px] text-left"
                  >
                    <span className="[font-family:'Rubik',Helvetica] text-sm font-normal leading-10 tracking-[0] text-white">
                      {field.placeholder}
                    </span>
                    <ChevronDownIcon className="h-4 w-4 text-white" />
                  </button>
                ))}

                <Input
                  id="appointment-date"
                  type="text"
                  defaultValue=""
                  placeholder="mm/dd/yyyy"
                  className="mt-8 h-[50px] rounded-[25px] border-white bg-transparent px-[15px] text-sm text-white placeholder:text-white [font-family:'Rubik',Helvetica]"
                />
                {selectFields.slice(2).map((field) => (
                  <button
                    key={field.id}
                    type="button"
                    className="flex h-[50px] w-full items-center justify-between rounded-[100px] border border-[#ddd8f9] bg-transparent px-[18px] pr-[22px] text-left"
                  >
                    <span className="[font-family:'Rubik',Helvetica] text-sm font-normal leading-10 tracking-[0] text-white">
                      {field.placeholder}
                    </span>
                    <ChevronDownIcon className="h-4 w-4 text-white" />
                  </button>
                ))}

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="h-auto rounded-[100px] bg-white px-[26px] py-[18px] text-base font-normal leading-4 text-[#615efc] hover:bg-white/95 [font-family:'Rubik',Helvetica]"
                  >
                    <span>Appoinment</span>
                    <img
                      className="ml-[5px] shrink-0"
                      alt="Image margin"
                      src="https://c.animaapp.com/mqz82gwr21qAkL/img/image-margin.svg"
                    />
                  </Button>
                </div>
              </form>
            </section>
            <aside
              aria-label="Medical consultation visual"
              className="min-h-[280px] bg-cover bg-center bg-no-repeat sm:min-h-[360px] md:min-h-[658px]"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/mqz82gwr21qAkL/img/container-6.png)",
              }}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
