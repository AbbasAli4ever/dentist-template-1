"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  Clock3Icon,
  FacebookIcon,
  LinkedinIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  TwitterIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const topBarItemsLeft = [
  {
    icon: MapPinIcon,
    label: "2702 Memory Lane, Chicago, IL 60605",
  },
  {
    icon: Clock3Icon,
    label: "Monday - Friday 08:00 - 20:00",
  },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: TwitterIcon, label: "Twitter" },
];

const navigationItems = [
  { label: "Home", active: true, expanded: true },
  { label: "Pages", active: false, expanded: false },
  { label: "Service", active: false, expanded: false },
  { label: "Our Doctors", active: false, expanded: false },
  { label: "Blog", active: false, expanded: false },
  { label: "Contact", active: false, expanded: null },
];

export const HeroBannerSection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full self-stretch  bg-transparent">
      <div className="w-full bg-[#615efc] max-sm:hidden">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-2 px-4 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0">
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-0 lg:gap-[50px]">
            {topBarItemsLeft.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="inline-flex items-center gap-[7px] px-0 py-2.5"
                >
                  <Icon
                    className="h-[18px] w-[18px] text-white"
                    strokeWidth={1.75}
                  />
                  <p className="[font-family:'Rubik',Helvetica] text-sm font-normal leading-[26px] tracking-[0] text-white whitespace-nowrap">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-0 lg:gap-[50px]">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-[7px] px-0 py-2.5"
            >
              <PhoneIcon
                className="h-[18px] w-[18px] text-white"
                strokeWidth={1.75}
              />
              <p className="[font-family:'Rubik',Helvetica] text-sm font-normal leading-[26px] tracking-[0] text-white whitespace-nowrap">
                Emergency Line: 1-800-100-900
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className="inline-flex items-center gap-5"
            >
              <p className="[font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] text-white whitespace-nowrap">
                Follow Us-
              </p>
              <nav
                aria-label="Social media"
                className="inline-flex items-center gap-3"
              >
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      aria-label={item.label}
                      className="inline-flex h-[26px] w-[18px] items-center justify-center text-white transition-opacity hover:opacity-80"
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:h-[81px] lg:gap-10 lg:py-0">
          <img
            data-aos="fade-up"
            className="h-12 w-auto shrink-0 object-contain sm:h-[60px] lg:h-[81px] lg:w-[182px]"
            alt="Mediweb logo"
            src="https://c.animaapp.com/mqz82gwr21qAkL/img/link-10.svg"
          />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-x-4 lg:flex lg:gap-x-8 2xl:gap-x-[50px]"
          >
            {navigationItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`inline-flex items-center gap-1 py-[27px] text-left [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] whitespace-nowrap transition-colors ${
                  item.active
                    ? "text-[#5956ff]"
                    : "text-[#111032] hover:text-[#615efc]"
                }`}
              >
                <span>{item.label}</span>
                {item.expanded === true && (
                  <ChevronUpIcon className="h-4 w-4" strokeWidth={1.75} />
                )}
                {item.expanded === false && (
                  <ChevronDownIcon className="h-4 w-4" strokeWidth={1.75} />
                )}
              </button>
            ))}
          </nav>

          <div
            data-aos="fade-up"
            className="hidden shrink-0 items-center gap-3 lg:flex lg:gap-5"
          >
            <div className="relative hidden w-44 lg:block lg:w-56 2xl:w-60">
              <Input
                type="search"
                aria-label="Search"
                defaultValue=""
                placeholder="SearchIcon..."
                className="h-11 rounded-[100px] border-[#ddd8f9] pr-11 [font-family:'Rubik',Helvetica] text-sm font-normal tracking-[0] text-[#6b6b6b] placeholder:text-[#6b6b6b] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <SearchIcon
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#615efc]"
                strokeWidth={1.75}
              />
            </div>
            <Button
              type="button"
              className="h-auto shrink-0 rounded-[100px] bg-[#615efc] px-5 py-[13px] [font-family:'Rubik',Helvetica] text-base font-normal leading-4 tracking-[0] whitespace-nowrap text-white hover:bg-[#5552f0] lg:px-[26px]"
            >
              <span>Appointment</span>
              <img
                className="shrink-0"
                alt="Image margin"
                src="https://c.animaapp.com/mqz82gwr21qAkL/img/image-margin.svg"
              />
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#111032] transition-colors hover:bg-[#615efc]/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" strokeWidth={1.75} />
            ) : (
              <MenuIcon className="h-6 w-6" strokeWidth={1.75} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#ddd8f9] bg-white px-4 pb-6 pt-2 sm:px-6 lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`inline-flex items-center justify-between gap-1 py-3 text-left [font-family:'Rubik',Helvetica] text-base font-normal leading-[26px] tracking-[0] transition-colors ${
                    item.active
                      ? "text-[#5956ff]"
                      : "text-[#111032] hover:text-[#615efc]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.expanded === true && (
                    <ChevronUpIcon className="h-4 w-4" strokeWidth={1.75} />
                  )}
                  {item.expanded === false && (
                    <ChevronDownIcon className="h-4 w-4" strokeWidth={1.75} />
                  )}
                </button>
              ))}
            </nav>
            <div className="relative mt-4 w-full">
              <Input
                type="search"
                aria-label="Search"
                defaultValue=""
                placeholder="SearchIcon..."
                className="h-11 rounded-[100px] border-[#ddd8f9] pr-11 [font-family:'Rubik',Helvetica] text-sm font-normal tracking-[0] text-[#6b6b6b] placeholder:text-[#6b6b6b] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <SearchIcon
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#615efc]"
                strokeWidth={1.75}
              />
            </div>
            <Button
              type="button"
              className="mt-4 h-auto w-full rounded-[100px] bg-[#615efc] px-[26px] py-[13px] [font-family:'Rubik',Helvetica] text-base font-normal leading-4 tracking-[0] text-white hover:bg-[#5552f0]"
            >
              <span>Appointment</span>
              <img
                className="shrink-0"
                alt="Image margin"
                src="https://c.animaapp.com/mqz82gwr21qAkL/img/image-margin.svg"
              />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
