import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const serviceCards = [
  {
    title: "Cardiology",
    description:
      "Diagnosis and treatment of heart & cardiovascular conditions.",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-24.svg",
    imageClassName: "h-[70px]",
  },
  {
    title: "Neurology",
    description:
      "Diagnosis and treatment of heart & cardiovascular conditions.",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-26.svg",
    imageClassName: "h-[65px]",
  },
  {
    title: "Dental Care",
    description:
      "Diagnosis and treatment of heart & cardiovascular conditions.",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-25.svg",
    imageClassName: "h-[62px]",
  },
  {
    title: "Mental Health",
    description:
      "Diagnosis and treatment of heart & cardiovascular conditions.",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-23.svg",
    imageClassName: "h-[62px]",
  },
  {
    title: "Medicine",
    description:
      "Diagnosis and treatment of heart & cardiovascular conditions.",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-18.svg",
    imageClassName: "h-[62px]",
  },
  {
    title: "Orthopedics",
    description:
      "Diagnosis and treatment of heart & cardiovascular conditions.",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-21.svg",
    imageClassName: "h-[62px]",
  },
];

export const PatientRecommendationSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-[120px]">
      <div className="mx-auto max-w-[1310px]">
        <div className="grid grid-cols-1 gap-y-[30px] md:grid-cols-2 xl:grid-cols-4">
          <header className="xl:col-span-2 xl:pr-[22px]">
            <div className="flex max-w-[632.5px] flex-col items-start">
              <Badge
                variant="outline"
                className="h-auto rounded-[30px] border border-[#615efc33] bg-transparent px-4 py-[5px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] text-[#615efc] hover:bg-transparent"
              >
                Our Services
              </Badge>
              <div className="pt-[21px]">
                <h2 className="[font-family:'Syne',Helvetica] text-3xl font-bold leading-[1.1] tracking-[0] text-[#111032] sm:text-5xl sm:leading-[52.8px]">
                  we provide a wide <br className="hidden sm:block" /> range of
                  medical <br className="hidden sm:block" /> services
                </h2>
              </div>
              <div className="pt-5">
                <p className="max-w-[633px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                  Our experienced and dedicated teams are committed to providing
                  comprehensive patient-centered care to meet your unique health
                  needs.
                </p>
              </div>
            </div>
          </header>
          {serviceCards.slice(0, 2).map((service) => (
            <Card
              key={service.title}
              className="rounded-[10px] border border-[#615efc33] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start px-[25px] py-[30px]">
                <img
                  className={`w-full self-stretch object-contain object-left ${service.imageClassName}`}
                  alt={service.title}
                  src={service.imageSrc}
                />
                <div className="flex h-16 w-full flex-col items-start pt-9">
                  <h3 className="[font-family:'Syne',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[0] text-[#111032]">
                    {service.title}
                  </h3>
                </div>
                <div className="w-full pt-4 pb-2.5">
                  <p className="max-w-[250px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                    {service.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center gap-[3px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#111032]"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                </button>
              </CardContent>
            </Card>
          ))}

          {serviceCards.slice(2).map((service) => (
            <Card
              key={service.title}
              className="rounded-[10px] border border-[#615efc33] bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start px-[25px] py-[30px]">
                <img
                  className={`w-full self-stretch object-contain object-left ${service.imageClassName}`}
                  alt={service.title}
                  src={service.imageSrc}
                />
                <div className="flex h-16 w-full flex-col items-start pt-9">
                  <h3 className="[font-family:'Syne',Helvetica] text-[23px] font-bold leading-[27.6px] tracking-[0] text-[#111032]">
                    {service.title}
                  </h3>
                </div>
                <div className="w-full pt-4 pb-2.5">
                  <p className="max-w-[250px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                    {service.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center gap-[3px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#111032]"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
