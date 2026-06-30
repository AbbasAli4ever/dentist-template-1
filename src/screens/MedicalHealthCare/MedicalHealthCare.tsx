import { Card, CardContent } from "../../components/ui/card";
import { AppointmentCTASection } from "./sections/AppointmentCTASection";
import { ExceptionalCareSection } from "./sections/ExceptionalCareSection";
import { FooterCreditsSection } from "./sections/FooterCreditsSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { FreeConsultationSection } from "./sections/FreeConsultationSection";
import { HeroBannerSection } from "./sections/HeroBannerSection/HeroBannerSection";
import { MedicalServicesSection } from "./sections/MedicalServicesSection";
import { PatientRecommendationSection } from "./sections/PatientRecommendationSection/PatientRecommendationSection";
import { PatientTestimonialsSection } from "./sections/PatientTestimonialsSection/PatientTestimonialsSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { QuickSupportActionsSection } from "./sections/QuickSupportActionsSection/QuickSupportActionsSection";
import { TeamShowcaseSection } from "./sections/TeamShowcaseSection/TeamShowcaseSection";

const screenSections = [
  { key: "hero", component: <HeroBannerSection /> },
  { key: "quick-support", component: <QuickSupportActionsSection /> },
  { key: "exceptional-care", component: <ExceptionalCareSection /> },
  { key: "medical-services", component: <MedicalServicesSection /> },
  {
    key: "patient-recommendation",
    component: <PatientRecommendationSection />,
  },
  { key: "free-consultation", component: <FreeConsultationSection /> },
  { key: "pricing-plans", component: <PricingPlansSection /> },
  { key: "team-showcase", component: <TeamShowcaseSection /> },
  { key: "patient-testimonials", component: <PatientTestimonialsSection /> },
  { key: "appointment-cta", component: <AppointmentCTASection /> },
  { key: "footer-links", component: <FooterLinksSection /> },
  { key: "footer-credits", component: <FooterCreditsSection /> },
];

export const MedicalHealthCare = (): JSX.Element => {
  return (
    <main className="w-full bg-white" data-model-id="2:2036">
      <div className="w-full">
        {screenSections.map((section) => (
          <section key={section.key} className="relative w-full">
            <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
              <CardContent className="p-0">{section.component}</CardContent>
            </Card>
          </section>
        ))}
      </div>
    </main>
  );
};
