import { FC, SVGProps } from "react";

import { email, facebookURL, instagramURL, linkedinURL } from "@/utils/social";

import facebook from "@/assets/svg/social/footer_social_fb.svg";
import instagram from "@/assets/svg/social/footer_social_instagram.svg";
import linkedin from "@/assets/svg/social/footer_social_linkedin.svg";
import mail from "@/assets/svg/social/footer_social_envelope.svg";

export type ContactLink = {
  label: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export const contactLinks: ContactLink[] = [
  {
    label: "connect@lftechnology.com",
    href: email,
    icon: mail,
  },
  {
    label: "Facebook",
    href: facebookURL,
    icon: facebook,
  },
  {
    label: "Instagram",
    href: instagramURL,
    icon: instagram,
  },
  {
    label: "LinkedIn",
    href: linkedinURL,
    icon: linkedin,
  },
];
