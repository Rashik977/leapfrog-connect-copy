import React from "react";

import { MdOutlineHome } from "react-icons/md";

import { iconWrapper } from "@/utils/svg";

import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";

type MenuItemProps = {
  title: string;
  subtitle?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, subtitle }) => {
  return (
    <div className="relative group w-[11.25rem] p-1 border-gradient">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <Icon icon={<MdOutlineHome size={40} />} svg={iconWrapper} />
          <Text as="h3" variant="base">
            {title}
          </Text>
          {subtitle && <Text variant="none">{subtitle}</Text>}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
