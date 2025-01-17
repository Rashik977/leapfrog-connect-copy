import React from "react";

import Icon from "@/components/atoms/Icon/Icon";

import { ProgramDetailType } from "@/types/ProgramDetailType";

import Text from "@/components/atoms/Text/Text";

const ProgramCard = ({
  tracks,
  duration,
  heading,
  icon: IconComponent,
}: ProgramDetailType) => {
  return (
    <div className="w-full lg:max-w-[18.75rem] bg-white px-6 text-green-400 sm:px-12 lg:px-6 pb-8">
      {/* Header Section */}
      <div className="sm:flex sm:flex-row sm:items-center sm:gap-6 lg:flex-col lg:items-start lg:gap-0 my-8">
        <div>
          <Icon icon={<IconComponent size={40} />} />
        </div>
        <div className="mt-8 sm:mt-0 lg:mt-8">
          <div className="mb-1">
            <Text as="h3" variant="2xl" font="serif">
              {heading}
            </Text>
            <Text as="p" variant="small">
              {duration}
            </Text>
          </div>
        </div>
      </div>

      {/* Tracks List */}
      <div>
        {tracks.map((track) => (
          <div key={track.title} className="border-t border-t-gray mb-11 ">
            <div>
              <Text as="h3" weight="bold" className="mt-3 mb-1">
                {track.title}
              </Text>
              <Text as="h4" variant="small" className="mb-3">
                {track.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
