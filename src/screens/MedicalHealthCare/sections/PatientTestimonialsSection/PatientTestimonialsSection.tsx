import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const doctors = [
  {
    name: "Dr. Rachel Evans",
    title: "MBBS, MD - Oncologists",
    image: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--team--8.png",
  },
  {
    name: "Dr. Emily Carter",
    title: "MBBS, MD - Oncologists",
    image: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--team--9.png",
  },
  {
    name: "Dr. Lisa Morgan,",
    title: "MBBS, MD - Oncologists",
    image: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--team--10.png",
  },
  {
    name: "Dr. Jessica Lee",
    title: "MBBS, MD - Oncologists",
    image: "https://c.animaapp.com/mqz82gwr21qAkL/img/image--team--11.png",
  },
];

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
  { label: "YouTube", icon: YoutubeIcon },
  { label: "Twitter", icon: TwitterIcon },
];

export const PatientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-[1760px] px-2">
        <div className="rounded-[10px] bg-[#f1f1ff] py-16 sm:py-20 lg:py-[120px]">
          <div className="mx-auto w-full max-w-[1310px] px-4 sm:px-[15px]">
            <header className="flex flex-col gap-8 pb-[50px] lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[416.22px]">
                <Badge className="h-auto rounded-[30px] border border-solid border-[#615efc33] bg-transparent px-4 py-[5px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] text-[#615efc] hover:bg-transparent">
                  Our Doctors
                </Badge>
                <div className="pt-[21px]">
                  <h2 className="[font-family:'Syne',Helvetica] text-4xl font-bold leading-[1.1] tracking-[0] text-[#111032] sm:text-5xl">
                    Discover Expert
                    <br />
                    Team Member
                  </h2>
                </div>
              </div>
              <div className="max-w-[520px]">
                <p className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                  our team of dedicated and highly skilled doctors is at the
                  heart of our commitment to providing exceptional medical care.
                  Each member of our team brings a wealth of knowledge,
                  experience.
                </p>
              </div>
            </header>
            <div className="flex flex-col items-center">
              <div className="grid w-full grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[30px]">
                {doctors.map((doctor) => (
                  <article key={doctor.name} className="flex justify-center">
                    <Card className="w-full max-w-[298px] border-0 bg-transparent shadow-none">
                      <CardContent className="p-0">
                        <div className="w-full">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="aspect-[298/337] h-auto w-full object-cover sm:aspect-auto sm:h-[337px]"
                          />
                        </div>
                        <div className="flex flex-col items-center pt-[30px] text-center">
                          <h3 className="[font-family:'Syne',Helvetica] text-xl font-bold leading-6 tracking-[0] text-[#111032]">
                            {doctor.name}
                          </h3>
                          <p className="mt-0.5 [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#6b6b6b]">
                            {doctor.title}
                          </p>
                          <nav
                            aria-label={`${doctor.name} social links`}
                            className="pt-2.5"
                          >
                            <ul className="flex items-center justify-center gap-3">
                              {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                  <li key={social.label}>
                                    <button
                                      type="button"
                                      aria-label={social.label}
                                      className="flex h-auto items-center justify-center text-[#615efc] transition-opacity hover:opacity-80"
                                    >
                                      <Icon className="h-4 w-4" />
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </nav>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
              <div className="mt-[30px] flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Go to slide 1"
                  className="h-auto w-5 rounded-[10px] bg-[#615efc] py-1"
                />
                <button
                  type="button"
                  aria-label="Go to slide 2"
                  className="h-auto w-2 rounded-lg bg-black/20 py-1"
                />
                <button
                  type="button"
                  aria-label="Go to slide 3"
                  className="h-auto w-2 rounded-lg bg-black/20 py-1"
                />
                <button
                  type="button"
                  aria-label="Go to slide 4"
                  className="h-auto w-2 rounded-lg bg-black/20 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
