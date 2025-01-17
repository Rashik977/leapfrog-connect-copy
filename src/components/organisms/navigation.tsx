"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { headerConnectLogo, menuClose, menuOpen } from "@/utils/svg";

import useScroll from "@/hooks/useScroll";

import Label from "@/components/atoms/Label/Label";
import Container from "@/components/atoms/container/container";

import { navItems, pagesWithBgColor } from "@/constants/navigation";
import { contactLinks } from "@/constants/social";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isScrolled = useScroll();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const getLabelProps = (href: string) => {
    if (href === "/contact") {
      return {
        variant: "colored" as const,
        size: "bold" as const,
      };
    }

    if (pathname === href) {
      return {
        variant: "underline" as const,
        size: "bold" as const,
      };
    }

    return {
      variant: "default" as const,
      size: "default" as const,
    };
  };

  const hasBgColor = isScrolled || pagesWithBgColor.includes(pathname);

  return (
    <Container
      className={`fixed w-full flex justify-center z-20 p-0 transition-colors duration-300 ${
        hasBgColor ? "bg-green-400" : "bg-transparent"
      }`}
      Tag={"nav"}
    >
      <div className="left-0 max-w-[80rem] w-full px-6 lg:px-16 py-5 lg:py-6">
        <div className="mx-auto flex justify-between items-center">
          <Link href="/" className="z-20">
            <figure>
              <Image
                src={headerConnectLogo}
                alt="Logo"
                height={40}
                width={121}
              />
            </figure>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Label
                  {...getLabelProps(item.href)}
                  className="hover:text-green-100 transition-colors duration-300"
                >
                  {item.label}
                </Label>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Image src={menuClose} alt="Menu Closed" width={24} height={24} />
            ) : (
              <Image src={menuOpen} alt="Menu Open" width={24} height={24} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 h-full bg-green-400 px-8 z-10 md:hidden pt-36 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-green-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-9 mb-20 text-green-100">
              {contactLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-sm"
                  target="_blank"
                >
                  <link.icon className="h-auto w-8" fill="currentColor" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navigation;
