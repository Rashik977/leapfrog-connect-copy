import Image from "next/image";
import Link from "next/link";

import { footerConnectLogo, footerLFLogo } from "@/utils/svg";

import Container from "@/components/atoms/container/container";
import Text from "@/components/atoms/Text/Text";
import Divider from "@/components/atoms/Divider/Divider";

import { connectLinks, policyLinks } from "@/constants/footer";
import { contactLinks } from "@/constants/social";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <Container className="max-w-[66.25rem] py-8 md:pb-14">
        <figure className="mb-5 md:mb-14 md:mt-14 w-[14.375rem] md:w-auto">
          <Image
            src={footerConnectLogo}
            alt="Logo"
            width={350}
            height={40}
            className="h-auto"
          />
        </figure>

        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
          {/* Left Column */}
          <div className="md:max-w-[12.5rem] lg:max-w-[26.0625rem]">
            <Text
              as="h3"
              variant="base"
              weight="bold"
              className="max-w-[23.0625rem] mb-5"
            >
              Leapfrog Connect empowers next generation of IT talents.
            </Text>
            <Text variant="small">
              With Industry standard training, hands-on experience, and
              employment ready preparation Leapfrog Connect adds value to what
              you have learned in academics and prepare you for the
              international job market.
            </Text>
          </div>

          {/* Right Column with Connect and Contact */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-[6.25rem]">
            {/* Connect Section */}
            <div className="w-[9.75rem]">
              <Text as="h3" variant="base" weight="bold">
                Connect
              </Text>
              <div className="mt-6 flex flex-col gap-6">
                {connectLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm leading-100 text-green-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-[13rem]">
              <Text as="h3" variant="base" weight="bold">
                Contact us
              </Text>
              <div className="mt-6 flex flex-col gap-6">
                {contactLinks.map((link) => (
                  <div key={link.label} className="flex gap-2 items-center">
                    <link.icon className="h-auto w-4" />

                    <Link
                      href={link.href}
                      className="text-sm text-green-300 hover:text-green-400 transition-colors"
                      target="_blank"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Divider variant="hidden" />
          </div>
        </div>

        {/* Policy Links - Moved outside the first div */}
        <div className="flex flex-col md:flex-row gap-6 my-5 md:my-14 text-green-300">
          {policyLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm leading-100 hover:text-green-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Border and Copyright */}
        <Divider />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-5 md:mt-[2.75rem]">
          <Text variant="small" className="md:text-left">
            Copyright 2024, Leapfrog Connect. All rights reserved.
          </Text>
          <Link href="https://www.lftechnology.com" target="_blank">
            <figure>
              <Image
                src={footerLFLogo}
                alt="Logo"
                width={125}
                height={24}
                className="h-auto"
              />
            </figure>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
