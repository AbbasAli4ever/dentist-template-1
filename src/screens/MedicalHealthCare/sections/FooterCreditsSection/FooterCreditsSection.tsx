import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const footerColumns = [
  {
    title: "Contact",
    underlineClassName: "w-[91px]",
    items: [
      "Canada, 245 14h Street Office 42 Calgary, de 52473",
      "info@email.com",
      "+1 554 558 748",
    ],
    widthClassName: "max-w-[202px]",
  },
  {
    title: "Company",
    underlineClassName: "w-[110px]",
    items: ["Company", "About", "Appointment", "Contact"],
    widthClassName: "max-w-[119px]",
  },
  {
    title: "Our Services",
    underlineClassName: "w-[137px]",
    items: ["Orthopaedic", "Neurology", "Psychiatry", "Cardiology"],
    widthClassName: "max-w-[142px]",
  },
  {
    title: "Working Time",
    underlineClassName: "w-[152px]",
    items: [
      "Mon - Fri: 9.00am - 5.00pm",
      "Saturday: 10.00am - 6.00pm",
      "Sunday Closed",
    ],
    widthClassName: "max-w-[213px]",
  },
];

export const FooterCreditsSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#111032] px-4 pt-16 text-white sm:px-0 sm:pt-20 lg:pt-[105px]">
      <div className="mx-auto flex w-full max-w-[1310px] flex-col px-[7.5px]">
        <div className="flex w-full flex-col gap-8 pb-[30px] md:flex-row md:items-center md:justify-between">
          <a href="/" data-aos="fade-up" className="inline-flex shrink-0">
            <img
              className="h-[41px] w-[182px]"
              alt="MediCure"
              src="https://c.animaapp.com/mqz82gwr21qAkL/img/link-11.svg"
            />
          </a>
          <form data-aos="fade-up" data-aos-delay={100} className="w-full max-w-[418px]">
            <div className="flex items-center rounded-[100px] border border-solid border-[#615efc33] p-[5px]">
              <Input
                type="email"
                defaultValue=""
                placeholder="Enter your mail"
                className="h-[46px] flex-1 border-0 bg-transparent px-[15px] [font-family:'Rubik',Helvetica] text-base font-normal text-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                type="submit"
                className="h-auto rounded-[100px] border border-solid border-[#0d6efd] bg-[#615efc] px-[26px] py-3.5 [font-family:'Rubik',Helvetica] text-base font-normal leading-4 text-white hover:bg-[#615efc]/90"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="border-t border-[#201f57] pt-[50px] pb-20">
          <nav
            aria-label="Footer"
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between"
          >
            {footerColumns.map((column, index) => (
              <section
                key={column.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <header className="relative inline-flex flex-col items-start">
                  <h2 className="[font-family:'Syne',Helvetica] text-xl font-bold leading-6 tracking-[0] text-white">
                    {column.title}
                  </h2>
                  <div
                    className={`mt-[-1px] h-px bg-white ${column.underlineClassName}`}
                  />
                </header>
                <ul className="flex w-full flex-col items-start gap-5 pt-[45px]">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
