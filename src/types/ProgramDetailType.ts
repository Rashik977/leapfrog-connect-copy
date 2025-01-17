import { ReactNode } from "react";
import { IconType } from "react-icons";

export type ProgramDetailType = {
  heading: string;
  duration: string;
  icon: IconType;
  tracks: {
    title: string;
    description: ReactNode;
  }[];
};
