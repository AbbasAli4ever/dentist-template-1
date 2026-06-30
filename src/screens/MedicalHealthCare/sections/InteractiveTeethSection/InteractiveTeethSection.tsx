"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { services } from "@/lib/serviceData";
import type { ServiceData } from "@/lib/serviceData";
import { DentalCTAButton } from "./components/DentalCTAButton";
import { ModelLoader } from "./components/ModelLoader";
import {
  Shield,
  Star,
  Clock,
  CheckCircle2,
  Sparkles,
  Gem,
  Anchor,
  Droplets,
} from "lucide-react";

const TeethModel = dynamic(
  () => import("@/components/3d/TeethModel").then((mod) => mod.TeethModel),
  { ssr: false, loading: () => <ModelLoader /> },
);

const trustBadges = [
  { icon: Shield, label: "ADA Certified" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Same-Day Care" },
];

// Absolute positions — inset from edges so pills sit close to the model (4 services: 2 left, 2 right)
const PILL_POSITIONS = [
  "absolute top-[22%] left-[18%] z-20", // Teeth Whitening — upper-left
  "absolute top-[18%] right-[18%] z-20", // Veneers — upper-right
  "absolute top-[52%] right-[18%] z-20", // Implants — mid-right
  "absolute top-[58%] left-[18%] z-20", // Cleaning — lower-left
];

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  whitening: Sparkles,
  veneers: Gem,
  implants: Anchor,
  cleaning: Droplets,
};

function ServicePill({
  service,
  isActive,
  onClick,
  className,
}: {
  service: ServiceData;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) {
  const Icon = SERVICE_ICONS[service.id];
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-xl px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2 lg:gap-2.5 lg:rounded-2xl lg:px-3.5 lg:py-2.5 cursor-pointer text-left${className ? ` ${className}` : ""}`}
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${service.color}1e, ${service.color}09)`
          : "rgba(255,255,255,0.88)",
        border: isActive
          ? `1.5px solid ${service.color}60`
          : "1.5px solid rgba(221,216,249,0.65)",
        boxShadow: isActive
          ? `0 8px 28px ${service.color}28, 0 2px 10px rgba(0,0,0,0.07)`
          : "0 4px 14px rgba(0,0,0,0.07)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition:
          "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}
      animate={{ scale: isActive ? 1.07 : 1 }}
      whileHover={{ scale: isActive ? 1.07 : 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {/* Icon */}
      <div
        className="w-6 h-6 rounded-lg sm:w-7 sm:h-7 sm:rounded-xl lg:w-8 lg:h-8 flex items-center justify-center flex-shrink-0"
        style={{ background: `${service.color}28` }}
      >
        {Icon && (
          <Icon
            className="w-3 h-3 lg:w-4 lg:h-4"
            style={{ color: service.color }}
          />
        )}
      </div>

      {/* Label */}
      <span
        className="text-[10px] sm:text-[11px] lg:text-[13px] font-bold whitespace-nowrap [font-family:'Syne',Helvetica]"
        style={{ color: isActive ? "#111032" : "#444" }}
      >
        {service.label}
      </span>

      {/* Active pulse dot */}
      {isActive && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: service.color }}
          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.45, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      )}
    </motion.button>
  );
}

function ActiveInfoCard({ service }: { service: ServiceData }) {
  const Icon = SERVICE_ICONS[service.id];
  return (
    <motion.div
      key={service.id}
      className="w-full max-w-[620px] mx-auto px-4"
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <div
        className="relative rounded-3xl px-3 py-3 sm:px-5 sm:py-4 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.93)",
          border: `1px solid ${service.color}30`,
          boxShadow: `0 20px 56px rgba(0,0,0,0.1), 0 4px 16px ${service.color}1a`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Icon */}
          <div
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${service.color}20` }}
          >
            {Icon && (
              <Icon
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: service.color }}
              />
            )}
          </div>

          {/* Title + benefits */}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-[#111032] [font-family:'Syne',Helvetica] mb-1.5">
              {service.title}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-0.5">
              {service.benefits.slice(0, 2).map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: service.color }}
                  />
                  <span className="text-[11px] text-[#6b6b6b] leading-snug">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <DentalCTAButton
            variant="primary"
            size="sm"
            className="flex-shrink-0 whitespace-nowrap hidden sm:inline-flex"
          >
            {service.cta}
          </DentalCTAButton>
        </div>
      </div>
    </motion.div>
  );
}

export function InteractiveTeethSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const activeServiceData = activeService
    ? services.find((s) => s.id === activeService) ?? services[0]
    : null;

  return (
    <section className="relative flex flex-col h-auto max-sm:gap-8 items-center overflow-hidden bg-gradient-to-br from-[#fbfbff] via-[#f1f1ff] to-[#f4f3ff] pt-5 pb-5 lg:h-[700px] xl:h-[800px] lg:pt-8">
      <div className="dental-blob-1" aria-hidden="true" />
      <div className="dental-blob-2" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#615efc 1px, transparent 1px), linear-gradient(90deg, #615efc 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ── Heading ── */}
      <div
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center flex-none"
        data-aos="fade-up"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dental-glass border border-[#ddd8f9] mb-2 lg:mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-semibold text-[#5956ff] [font-family:'Rubik',Helvetica]">
            Now Accepting New Patients
          </span>
        </motion.div>

        <motion.h2
          className="font-bold text-2xl sm:text-3xl lg:text-6xl leading-[1.05] tracking-tight text-[#111032] [font-family:'Syne',Helvetica] mb-2 lg:mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Your <span className="dental-gradient-text">Perfect</span> Smile
          Starts{" "}
          <span className="relative inline-block">
            Here
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #615efc, #8f8cff)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            />
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-2 max-sm:pt-1 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full dental-glass text-xs font-semibold text-[#6b6b6b]"
            >
              <Icon className="w-3 h-3 text-[#615efc]" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── 3D Model + floating service pills ── */}
      <div className="relative z-10 w-full h-[280px] sm:h-[360px] lg:flex-1 lg:h-auto lg:min-h-0 mt-3 lg:mt-4">
        {/* Colour-reactive ambient glow */}
        <div
          className="absolute inset-[12%] rounded-full pointer-events-none z-0"
          style={{
            background: activeServiceData
              ? `radial-gradient(circle, ${activeServiceData.color}28 0%, ${activeServiceData.color}0d 50%, transparent 70%)`
              : "radial-gradient(circle, #C8B87A28 0%, #C8B87A0d 50%, transparent 70%)",
            filter: "blur(36px)",
            transition: "background 1s ease",
          }}
          aria-hidden="true"
        />

        {/* Canvas — fills entire model zone */}
        <div className="absolute inset-0 z-10 dental-canvas-container">
          <TeethModel activeService={activeService} />
        </div>

        {/* Service pills — desktop absolute layout (lg+) */}
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            className={`hidden lg:block ${PILL_POSITIONS[idx]}`}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + idx * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <ServicePill
              service={service}
              isActive={activeService === service.id}
              onClick={() => setActiveService(service.id)}
            />
          </motion.div>
        ))}

        {/* ── Active service info card — floats over the model at the bottom (desktop only) ── */}
        <div className="absolute bottom-3 left-0 right-0 z-30 hidden lg:block pointer-events-none">
          <AnimatePresence mode="wait">
            {activeServiceData ? (
              <motion.div
                key={activeServiceData.id}
                className="pointer-events-auto"
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
              >
                <ActiveInfoCard service={activeServiceData} />
              </motion.div>
            ) : (
              <motion.p
                key="prompt-desktop"
                className="text-center text-sm text-[#9090b0] [font-family:'Rubik',Helvetica] px-4 pointer-events-auto"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4 }}
              >
                👆 Select a service to see how it transforms your smile
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Service pills — mobile 2-column grid (below lg) */}
      <div className="lg:hidden relative z-10 w-full px-4 mt-3">
        <div className="grid w-full grid-cols-2 gap-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="w-full"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + idx * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <ServicePill
                service={service}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Active service info — sits below model, no overlap ── */}
      <div
        className="relative z-10 w-full flex-none pb-2"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <AnimatePresence mode="wait">
          {activeServiceData ? (
            <ActiveInfoCard key={activeServiceData.id} service={activeServiceData} />
          ) : (
            <motion.p
              key="prompt-mobile"
              className="text-center text-sm text-[#9090b0] [font-family:'Rubik',Helvetica] px-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4 }}
            >
              👆 Tap a service to see the transformation
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
