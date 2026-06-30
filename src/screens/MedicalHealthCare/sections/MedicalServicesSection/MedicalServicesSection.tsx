import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const ratingStars = Array.from({ length: 5 });

export const MedicalServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 pb-16 sm:pb-20 md:px-6 lg:pb-[120px]">
      <div className="mx-auto grid w-full max-w-[1310px] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,561px)_minmax(0,640px)] lg:gap-[94px]">
        <div className="relative">
          <div className="relative overflow-hidden rounded-none">
            <img
              className="block h-auto w-full"
              alt="Medical team"
              src="https://c.animaapp.com/mqz82gwr21qAkL/img/container-3.png"
            />
          </div>
          <Card className="absolute bottom-0 right-0 w-[215px] translate-y-[-1px] rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-none border-0 bg-white shadow-none">
            <CardContent className="px-5 py-[15px]">
              <div className="h-[26.84px] w-full">
                <div className="relative top-px h-[26px] w-[104px] bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/image.png)] bg-cover bg-center bg-no-repeat" />
              </div>
              <div className="flex w-[175.11px] flex-col items-start pt-[13px]">
                <div className="flex w-full items-center gap-0.5">
                  {ratingStars.map((_, index) => (
                    <div
                      key={`rating-star-${index}`}
                      className="flex h-6 w-6 items-center justify-center bg-[#00b67a]"
                    >
                      <span className="relative mt-[-1.00px] [font-family:'Font_Awesome_6_Pro-Black',Helvetica] text-sm font-black leading-[14px] tracking-[0] text-white">
                        
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex h-9 w-[175.11px] flex-col items-start pt-2.5">
                  <p className="relative mt-[-1.00px] mr-[-0.89px] w-fit [font-family:'Rubik',Helvetica] text-sm font-normal leading-[14px] tracking-[0] text-transparent">
                    <span className="leading-[26px] text-[#111032]">
                      TrustScore 4.8
                    </span>
                    <span className="text-base leading-[26px] text-[#111032]">
                      {" "}
                      |{" "}
                    </span>
                    <span className="leading-[26px] text-[#111032]">
                      2k reviews
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-start pt-0 lg:pt-[30px]">
          <Badge
            variant="outline"
            className="rounded-[30px] border-[#615efc33] px-4 py-[5px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#615efc]"
          >
            About Us
          </Badge>
          <header className="flex w-full max-w-[640px] flex-col items-start pt-[21px]">
            <h2 className="[font-family:'Syne',Helvetica] text-[28px] font-bold leading-[1.1] tracking-[0] text-[#111032] sm:text-[34px] md:text-5xl md:leading-[52.8px]">
              Providing Exceptional <br className="hidden md:block" /> Healthcare
              with a focus <br className="hidden md:block" /> on patient.
            </h2>
          </header>
          <div className="pt-5">
            <p className="w-full max-w-[608px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
              At Mediweb, our mission is to provide exceptional healthcare
              services with a focus on patient-centered care. We are dedicated
              to improving the health and well-being of our community through.
            </p>
          </div>
          <div className="flex w-full max-w-[640px] flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-start sm:gap-[54px]">
            <Button className="h-auto w-fit rounded-[100px] bg-[#615efc] px-[26px] py-[18px] [font-family:'Rubik',Helvetica] text-base font-normal leading-4 tracking-[0] text-white hover:bg-[#615efc]/90">
              <span>About Us</span>
              <img
                className="relative ml-[5px] shrink-0"
                alt="Image margin"
                src="https://c.animaapp.com/mqz82gwr21qAkL/img/image-margin.svg"
              />
            </Button>
            <div className="inline-flex items-center gap-[15px]">
              <div className="flex h-[60px] w-[60px] items-start overflow-hidden rounded-[30px] border border-solid border-[#615efc33] p-[5px]">
                <div className="h-[50px] w-[50px] bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/image--about---image-.png)] bg-cover bg-center bg-no-repeat" />
              </div>
              <div className="h-[29.59px] w-[105px] max-w-[105px] bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/image--about-.png)] bg-cover bg-center bg-no-repeat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
