import React from "react";
import Link from "next/link";

import { GettingStartedCardType } from "@/types/GettingStartedDetailType";

import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";

const GettingStartedCard: React.FC<GettingStartedCardType> = ({
  subtitle,
  buttonText,
  buttonURL,
}) => {
  return (
    <div className="w-[19.5rem] border-gradient">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-8 px-12 py-8">
          <div className="w-auto h-[12.5rem]"></div>
          <Text>{subtitle}</Text>
          <Link href={buttonURL}>
            <Button className="w-full">{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedCard;
