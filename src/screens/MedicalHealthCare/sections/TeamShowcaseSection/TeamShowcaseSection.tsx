import { CheckIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$29",
    period: "per/month",
    description: "Ages16 - 24, Unlimited Play, Junior Golf Program",
    features: [
      "Echocardiogram",
      "Stress Testing",
      "Cardiac Catheterization",
      "Angioplasty and Stenting",
    ],
    featured: false,
  },
  {
    name: "Silver Plan",
    price: "$66",
    period: "per/month",
    description: "30 Rounds per Month, Pro Shop Discount",
    features: [
      "Echocardiogram",
      "Stress Testing",
      "Cardiac Catheterization",
      "Angioplasty and Stenting",
    ],
    featured: true,
  },
  {
    name: "Gold Plan",
    price: "$99",
    period: "per/month",
    description: "Ages16 - 24, Unlimited Play, Junior Golf Program",
    features: [
      "Echocardiogram",
      "Stress Testing",
      "Cardiac Catheterization",
      "Angioplasty and Stenting",
    ],
    featured: false,
  },
];

export const TeamShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-[120px]">
      <div className="mx-auto flex w-full max-w-[1310px] flex-col items-stretch">
        <header className="flex flex-col items-center pb-[30px]" data-aos="fade-up">
          <Badge className="h-auto rounded-[30px] border border-[#615efc33] bg-transparent px-4 py-[5px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] text-[#615efc] hover:bg-transparent">
            Pricing Plan
          </Badge>
          <h2 className="pt-3.5 text-center [font-family:'Syne',Helvetica] text-3xl font-bold leading-tight text-[#111032] sm:text-4xl lg:text-5xl lg:leading-[52.8px]">
            Our Pricing Best Plane
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="w-full px-0 lg:px-[35px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                className={`h-full rounded-[10px] border shadow-none ${
                  plan.featured
                    ? "border-[#e3e3e3] bg-[#615efc]"
                    : "border-[#e3e3e3] bg-white"
                }`}
              >
                <CardContent className="flex h-full flex-col px-8 py-10 sm:px-[50px]">
                  <div className="border-b border-[#d8d8d8] pb-5">
                    <p
                      className={`[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] ${
                        plan.featured ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <div
                      className={`mt-[-1px] [font-family:'Syne',Helvetica] text-5xl font-bold leading-[52.8px] ${
                        plan.featured ? "text-white" : "text-[#615efc]"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <p
                      className={`pt-1.5 [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] ${
                        plan.featured ? "text-white" : "text-[#1f1f1f]"
                      }`}
                    >
                      {plan.period}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col pt-[30px]">
                    <p
                      className={`max-w-[283px] [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] ${
                        plan.featured ? "text-white" : "text-[#6b6b6b]"
                      }`}
                    >
                      {plan.description}
                    </p>
                    <ul className="mt-10 flex flex-col gap-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <CheckIcon
                            className={`h-4 w-4 shrink-0 ${
                              plan.featured ? "text-white" : "text-[#615efc]"
                            }`}
                          />
                          <span
                            className={`[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] ${
                              plan.featured ? "text-white" : "text-[#6b6b6b]"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 flex justify-center">
                      <Button
                        type="button"
                        className={`h-auto rounded-[100px] px-[26px] py-[18px] [font-family:'Rubik',Helvetica] text-base font-normal leading-4 ${
                          plan.featured
                            ? "border border-white bg-[#615efc] text-white hover:bg-[#615efc]/90"
                            : "bg-[#615efc] text-white hover:bg-[#615efc]/90"
                        }`}
                      >
                        Booking Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
