import { LeadershipCardProps } from "@/types/LeadershipDetailType";

import { teamAsb, teamCb, teamCs, teamHk, teamKb, teamSs } from "@/utils/image";
import {
  linkedinAsb,
  linkedinCb,
  linkedinCs,
  linkedinHk,
  linkedinKb,
  linkedinSs,
} from "@/utils/social";

export const leadership: LeadershipCardProps[] = [
  {
    name: "Chandika Bhandari",
    title: "President",
    company: "Leapfrog Technology",
    linkedinUrl: linkedinCb,
    imageUrl: teamCb,
  },
  {
    name: "Himal Karmacharya",
    title: "President",
    company: "Leapfrog Technology",
    linkedinUrl: linkedinHk,
    imageUrl: teamHk,
  },
  {
    name: "Chris Sprague",
    title: "CEO",
    company: "Leapfrog Technology",
    linkedinUrl: linkedinCs,
    imageUrl: teamCs,
  },
  {
    name: "Ankur Sharma",
    title: "Director",
    company: "Leapfrog Connect",
    linkedinUrl: linkedinAsb,
    imageUrl: teamAsb,
  },
  {
    name: "Sandeep Sharma",
    title: "Director",
    company: "Leapfrog Connect",
    linkedinUrl: linkedinSs,
    imageUrl: teamSs,
  },
  {
    name: "Kailash Bijayananda",
    title: "SVP",
    company: "Leapfrog Technology",
    linkedinUrl: linkedinKb,
    imageUrl: teamKb,
  },
];
