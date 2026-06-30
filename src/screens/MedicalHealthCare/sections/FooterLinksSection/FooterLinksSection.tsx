import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const ctaData = {
  eyebrow: "Book Appointment",
  titleLines: ["Request Your", "Appointment"],
  buttonLabel: "Get Appointment",
  backgroundImage: "https://c.animaapp.com/mqz82gwr21qAkL/img/container-17.png",
};

export const FooterLinksSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 pb-16 sm:pb-20 md:px-6 lg:pb-[120px]">
      <div className="mx-auto w-full max-w-[1310px]">
        <Card className="overflow-hidden rounded-[10px] border-0 bg-transparent shadow-none">
          <CardContent className="flex min-h-[420px] flex-col items-center justify-center bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/container-17.png)] bg-cover bg-center px-6 py-[76px] sm:px-10 md:px-12">
            <div className="inline-flex items-center justify-center rounded-[30px] border border-solid border-[#ffffff1a] px-4 py-[5px]">
              <p className="[font-family:'Rubik',Helvetica] text-center text-base font-normal leading-[26px] tracking-[0] text-white">
                {ctaData.eyebrow}
              </p>
            </div>
            <header className="flex w-full max-w-[1295px] flex-col items-center pt-5 text-center">
              <h2 className="[font-family:'Syne',Helvetica] text-center font-bold tracking-[0] text-white text-[40px] leading-[42px] sm:text-[52px] sm:leading-[54px] md:text-[64px] md:leading-[64px]">
                <span>{ctaData.titleLines[0]}</span>
                <br />
                <span className="text-white text-[36px] leading-[40px] sm:text-[44px] sm:leading-[46px] md:text-5xl md:leading-[48px]">
                  {ctaData.titleLines[1]}
                </span>
              </h2>
            </header>
            <div className="flex w-full justify-center pt-[30px]">
              <Button
                type="button"
                className="h-auto rounded-[100px] bg-white px-[26px] py-[18px] [font-family:'Rubik',Helvetica] text-base font-normal leading-4 tracking-[0] text-[#615efc] hover:bg-white/90"
              >
                {ctaData.buttonLabel}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
