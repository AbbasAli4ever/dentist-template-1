import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "Patient-Centered Care",
    description: "Emphasize your commitment to patient well-being",
    iconSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--service-.svg",
    iconAlt: "Image service",
    iconClassName: "w-[51px] h-[50px]",
  },
  {
    title: "Emergency Support",
    description: "Emphasize your commitment to patient well-being",
    iconSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--service--3.svg",
    iconAlt: "Image service",
    iconClassName: "w-[51px] h-[50px]",
  },
  {
    title: "Expertise and Experience",
    description: "Emphasize your commitment to patient well-being",
    iconSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-19.svg",
    iconAlt: "Container",
    iconClassName: "w-[53px] h-[52px]",
  },
  {
    title: "24/7 hour Emergency Call",
    description: "Emphasize your commitment to patient well-being",
    iconSrc: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--service--1.svg",
    iconAlt: "Image service",
    iconClassName: "w-[50px] h-[50px]",
  },
];

export const FreeConsultationSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch">
      <div className="mx-auto w-full max-w-[1760px] px-[7.5px]">
        <div className="w-full rounded-[10px] bg-[#f1f1ff] px-4 py-[72px] sm:px-6 lg:px-12 lg:py-[120px]">
          <div className="mx-auto grid w-full max-w-[1310px] grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,540px)_minmax(0,648px)] lg:gap-[95px]">
            <article className="flex w-full flex-col items-start">
              <header className="flex w-full flex-col items-start" data-aos="fade-up">
                <Badge
                  variant="outline"
                  className="rounded-[30px] border-[#615efc33] bg-transparent px-4 py-[5px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] text-[#615efc] hover:bg-transparent"
                >
                  Why Choose Us
                </Badge>
                <div className="flex w-full flex-col items-start pt-[21px]">
                  <h2 className="[font-family:'Syne',Helvetica] text-[34px] font-bold leading-[1.1] tracking-[0] text-[#111032] sm:text-[40px] lg:text-5xl lg:leading-[52.8px]">
                    Why Our Patients Recommend Us
                  </h2>
                </div>
                <div className="flex w-full flex-col items-start pt-5">
                  <p className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                    we are dedicated to providing exceptional medical care.
                  </p>
                </div>
              </header>
              <div className="flex w-full flex-col items-start pt-10">
                {features.map((feature, index) => (
                  <Card
                    key={feature.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="mt-0 w-full rounded-[20px] border border-solid border-[#615efc33] bg-transparent shadow-none [&:not(:first-child)]:mt-5"
                  >
                    <CardContent className="flex items-center gap-5 px-5 py-[22px]">
                      <img
                        className={`relative shrink-0 ${feature.iconClassName}`}
                        alt={feature.iconAlt}
                        src={feature.iconSrc}
                      />
                      <div className="flex min-w-0 flex-1 flex-col items-start">
                        <h3 className="[font-family:'Syne',Helvetica] text-xl font-bold leading-6 tracking-[0] text-[#111032]">
                          {feature.title}
                        </h3>
                        <p className="pt-2 [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </article>
            <aside
              className="flex w-full justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="relative w-full max-w-[648px]">
                <div className="relative min-h-[420px] w-full sm:min-h-[520px] lg:min-h-[591px]">
                  <div className="absolute bottom-0 left-0 z-10 h-[100%] w-[69.9%] bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/image--medicle-.png)] bg-cover bg-center bg-no-repeat" />
                  <div className="absolute right-0 top-0 z-20 h-full w-[67.6%] bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/container-4.png)] bg-contain bg-center bg-no-repeat" />
                  <div className="absolute left-[4.6%] top-[6.8%] z-30 flex flex-col items-start">
                    <h3 className="[font-family:'Syne',Helvetica] text-[44px] font-bold leading-[1.05] tracking-[0] text-white sm:text-[60px] lg:text-[80px] lg:leading-[96px]">
                      Hello!
                    </h3>
                    <div className="flex h-12 items-center gap-2 pt-[3px]">
                      <img
                        className="h-[45px] w-[45px]"
                        alt="Image medicle"
                        src="https://c.animaapp.com/mqz82gwr21qAkL/img/image--medicle--1.svg"
                      />
                      <span className="[font-family:'Rubik',Helvetica] text-[28px] font-normal leading-[26px] tracking-[0] text-white sm:text-[36px] lg:text-5xl">
                        24/7
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-[4.2%] left-[4.6%] z-30 inline-flex items-center gap-2.5">
                    <img
                      className="h-[26px] w-[26px]"
                      alt="Image medicle"
                      src="https://c.animaapp.com/mqz82gwr21qAkL/img/image--medicle--2.svg"
                    />
                    <span className="[font-family:'Rubik',Helvetica] text-lg font-normal leading-[26px] tracking-[0] text-white">
                      1-800-100-900
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
