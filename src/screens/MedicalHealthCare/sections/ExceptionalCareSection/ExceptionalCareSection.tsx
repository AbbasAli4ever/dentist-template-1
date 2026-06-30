import { Card, CardContent } from "../../../../components/ui/card";

const careItems = [
  {
    title: ["Request", "Appointment"],
    imageAlt: "Request appointment",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-22.svg",
  },
  {
    title: ["Find", "Doctors"],
    imageAlt: "Find doctors",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-27.svg",
  },
  {
    title: ["Emergency", "Call"],
    imageAlt: "Emergency call",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-20.svg",
  },
  {
    title: ["24/7", "Support"],
    imageAlt: "24/7 support",
    imageSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--service--2.svg",
  },
];

export const ExceptionalCareSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-0 py-12 sm:py-16 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1310px] px-4 sm:px-0">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-0">
          {careItems.map((item, index) => (
            <Card
              key={item.imageAlt}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-[10px] border border-solid border-[#615efc33] bg-transparent shadow-none lg:mx-[15px]"
            >
              <CardContent className="flex items-start gap-3 px-4 py-5 sm:gap-5 sm:px-5 sm:py-[30px]">
                <img
                  className="h-[44px] w-[44px] shrink-0 sm:h-[60px] sm:w-[60px]"
                  alt={item.imageAlt}
                  src={item.imageSrc}
                />
                <div className="flex flex-col items-start">
                  <h2 className="[font-family:'Syne',Helvetica] text-[15px] font-bold leading-[18px] tracking-[0] text-[#111032] sm:text-2xl sm:leading-[28.8px]">
                    {item.title[0]}
                    <br />
                    {item.title[1]}
                  </h2>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
