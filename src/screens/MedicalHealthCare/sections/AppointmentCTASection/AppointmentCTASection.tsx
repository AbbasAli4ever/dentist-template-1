import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    quote:
      "An exceptional cardiologist. His ability to explain with complex medical issues in a way that's easy to understand is truly impressive Thomas.",
    author: "Malan Patel",
    avatar: "https://c.animaapp.com/mqz82gwr21qAkL/img/link-8.png",
  },
  {
    quote:
      "Dr. Robert Thompson is an exceptional cardiologist. His ability to explain with complex medical issues in a way that's easy to understand is truly impressive.",
    author: "Joker Vandi",
    avatar: "https://c.animaapp.com/mqz82gwr21qAkL/img/link-9.png",
  },
  {
    quote:
      "Dr. Robert Thompson is an exceptional cardiologist. His ability to explain with complex medical issues in a way that's easy to understand is truly impressive.",
    author: "David Patel",
    avatar: "https://c.animaapp.com/mqz82gwr21qAkL/img/link-7.png",
  },
];

const paginationDots = [
  { className: "w-5 bg-[#615efc] opacity-100", active: true },
  { className: "w-2 bg-black/20 opacity-100", active: false },
  { className: "w-2 bg-black/20 opacity-100", active: false },
  { className: "w-2 bg-black/20 opacity-100", active: false },
];

export const AppointmentCTASection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1310px] flex-col items-center">
        <header className="flex w-full flex-col items-center">
          <div className="inline-flex items-center justify-center rounded-[30px] border border-solid border-[#615efc33] px-4 py-[5px]">
            <p className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-[#615efc]">
              Client Feedback
            </p>
          </div>
          <div className="flex w-full justify-center pt-3.5">
            <h2 className="[font-family:'Syne',Helvetica] text-center text-[28px] font-bold leading-[1.1] tracking-[0] text-[#111032] sm:text-4xl lg:text-5xl lg:leading-[52.8px]">
              Words from Our <br className="hidden sm:block" /> Patients
            </h2>
          </div>
        </header>
        <div className="mt-[30px] flex w-full flex-col items-center">
          <div className="grid w-full max-w-[1295px] grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.author}-${index}`}
                className="rounded-[10px] border-0 bg-[#f1f1ff] shadow-none"
              >
                <CardContent className="flex h-full min-h-[337px] flex-col justify-between p-[31px]">
                  <div className="flex flex-col gap-8">
                    <div className="text-[#615efc]">
                      <span className="[font-family:'Font_Awesome_6_Pro-Black',Helvetica] text-sm font-black leading-[14px] tracking-[0]">
                        
                      </span>
                    </div>
                    <p className="[font-family:'Rubik',Helvetica] text-lg font-normal leading-[26px] tracking-[0] text-[#111032]">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2.5">
                    <div
                      aria-hidden="true"
                      className="h-[50px] w-[50px] rounded-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${testimonial.avatar})` }}
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="[font-family:'Syne',Helvetica] text-lg font-bold leading-[21.6px] tracking-[0] text-[#111032]">
                        {testimonial.author}
                      </h3>
                      <div className="flex items-center gap-[6px] pt-[3px] text-sm leading-[14px] text-[#fe922f]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <span
                            key={`${testimonial.author}-star-${starIndex}`}
                            aria-hidden="true"
                            className="[font-family:'Font_Awesome_6_Pro-Black',Helvetica] font-black tracking-[0]"
                          >
                            
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div
            className="mt-12 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Testimonial pagination"
          >
            {paginationDots.map((dot, index) => (
              <button
                key={`pagination-dot-${index}`}
                type="button"
                aria-label={`Go to testimonial page ${index + 1}`}
                aria-selected={dot.active}
                role="tab"
                className={`h-2 rounded-[10px] transition-opacity ${dot.className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
