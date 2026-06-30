import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const floatingBadges = [
  {
    title: "Cardiology",
    icon: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--heart--2.svg",
    wrapperClassName:
      "absolute left-[2%] top-[44%] flex items-center rounded-[40px] border border-solid border-[#615efc33] bg-white py-1.5 pl-3 pr-4 sm:py-2 sm:pl-[21px]",
    iconClassName: "h-7 w-7 sm:h-10 sm:w-10",
    textClassName:
      "ml-2 [font-family:'Rubik',Helvetica] text-sm font-normal leading-[26px] text-[#111032] sm:ml-3 sm:text-lg",
  },
  {
    title: "Neurology",
    icon: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--heart--1.svg",
    wrapperClassName:
      "absolute left-0 top-[71%] flex items-center rounded-[40px] border border-solid border-[#615efc33] bg-white py-1.5 pl-3 pr-4 sm:py-2 sm:pl-[21px]",
    iconClassName: "h-6 w-6 sm:h-[35px] sm:w-[35px]",
    textClassName:
      "ml-2 [font-family:'Rubik',Helvetica] text-sm font-normal leading-[26px] text-[#111032] sm:ml-3 sm:text-lg",
  },
  {
    title: "Orthopedics",
    icon: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--heart-.svg",
    wrapperClassName:
      "absolute right-[2%] top-[66%] flex items-center rounded-[40px] border border-solid border-[#615efc33] bg-white py-1.5 pl-3 pr-4 sm:py-2 sm:pl-[21px]",
    iconClassName: "h-7 w-7 sm:h-[38px] sm:w-[38px]",
    textClassName:
      "ml-2 [font-family:'Rubik',Helvetica] text-sm font-normal leading-[26px] text-[#111032] sm:ml-3 sm:text-lg",
  },
];

export const QuickSupportActionsSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch">
      <div className="mx-auto w-full max-w-[1760px] px-4">
        <Card className="overflow-hidden rounded-none border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="relative w-full bg-[url(https://c.animaapp.com/mqz82gwr21qAkL/img/container-1.png)] bg-contain bg-center bg-no-repeat px-4 py-12 sm:px-6 sm:py-[72px] md:px-10 lg:min-h-[798px] lg:px-16 xl:px-[110px]">
              <div className="grid items-center gap-10 lg:min-h-[654px] lg:grid-cols-[minmax(0,815px)_minmax(0,537px)] lg:gap-6">
                <header className="flex max-w-[815px] flex-col items-start">
                  <div className="flex items-center gap-0.5">
                    <img
                      className="h-[26px] w-[26px]"
                      alt="Image icons"
                      src="https://c.animaapp.com/mqz82gwr21qAkL/img/image--icons-.svg"
                    />
                    <p className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                      Your Health Our Priority
                    </p>
                  </div>
                  <div className="mt-3 flex w-full flex-col items-start">
                    <h2 className="[font-family:'Syne',Helvetica] text-[40px] font-bold leading-[1.05] tracking-[0] text-[#111032] sm:text-[64px] lg:text-[90px] lg:leading-[99px]">
                      Your Health
                      <br />
                      Our Priority
                    </h2>
                  </div>
                  <div className="flex max-w-[580px] flex-col items-start pt-5">
                    <p className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#111032]">
                      We provide comprehensive healthcare services with a
                      personal touch, ensuring you receive the best care
                      possible.
                    </p>
                  </div>
                  <div className="pt-10">
                    <Card className="max-w-[520px] rounded-[33px] border border-solid border-[#615efc33] bg-white shadow-none">
                      <CardContent className="flex flex-col gap-3 p-1.5 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:pl-[25px]">
                        <Select>
                          <SelectTrigger className="h-[42px] w-full rounded-[5px] border-0 bg-white px-[18px] shadow-none [font-family:'Rubik',Helvetica] text-sm font-normal leading-10 tracking-[0] text-[#6b6b6b] focus:ring-0 sm:w-[170px]">
                            <SelectValue placeholder="Select Department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="department">
                              Select Department
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger className="h-[42px] w-full rounded-[5px] border-0 bg-white px-[18px] shadow-none [font-family:'Rubik',Helvetica] text-sm font-normal leading-10 tracking-[0] text-[#6b6b6b] focus:ring-0 sm:w-[170px]">
                            <SelectValue placeholder="Select Doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="doctor">
                              Select Doctor
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Button className="h-auto rounded-[100px] bg-[#615efc] px-6 py-3.5 [font-family:'Rubik',Helvetica] text-base font-normal leading-4 tracking-[0] text-white hover:bg-[#615efc]/90">
                          Find Doctors
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </header>
                <div className="relative mx-auto flex h-full w-full max-w-[537px] items-end justify-center overflow-visible px-2 sm:px-6 lg:justify-end lg:px-0">
                  <div className="relative h-[420px] w-full max-w-[537px] bg-[url(/dentist.png)] bg-contain bg-bottom bg-no-repeat sm:h-[560px] sm:bg-center lg:h-[571px]">
                    {floatingBadges.map((badge) => (
                      <div key={badge.title} className={badge.wrapperClassName}>
                        <img
                          className={badge.iconClassName}
                          alt={badge.title}
                          src={badge.icon}
                        />
                        <span className={badge.textClassName}>
                          {badge.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
