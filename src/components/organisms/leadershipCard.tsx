import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";

import { LeadershipCardProps } from "@/types/LeadershipDetailType";

import Text from "@/components/atoms/Text/Text";

const LeadershipCard = ({
  name,
  title,
  company,
  linkedinUrl,
  imageUrl,
}: LeadershipCardProps) => {
  return (
    <div className="w-[9rem] md:w-[15rem] xl:w-[17.5rem] sm:p-0">
      {/* Image Section */}
      <figure className="relative w-full h-[10rem] md:h-[17.5rem]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="100%"
          className="object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="flex flex-col gap-2 mt-3">
        <Text
          variant="base"
          as="h2"
          font="serif"
          className="md:text-lg md:leading-350"
        >
          {name}
        </Text>

        <Text
          variant="small"
          weight="bold"
          className="md:text-base md:leading-150"
        >
          {title}, {company}
        </Text>

        {/* LinkedIn Section */}
        <div className="mt-2">
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 text-sm font-regular leading-100 hover:text-green-400 transition-colors"
          >
            <FaLinkedinIn size={16} />
            <Text as="span" className="border-b leading-4" variant="none">
              LinkedIn
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
