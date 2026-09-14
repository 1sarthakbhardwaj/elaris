"use client";

import Link from "next/link";
import { useRef } from "react";
import ThemeSwitcher from "@/components/headers/ThemeSwitcher";
import TextScramble from "@/components/animations/TextScramble";
import { useLenis } from "@/components/common/LenisContext";
import { useHeaderScrollHidden } from "@/hooks/useHeaderScrollHidden";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { usePathname } from "next/navigation";

type Header1Props = {
  initialTheme: "light" | "dark";
};

export default function Header1({ initialTheme }: Header1Props) {
  const headerRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  useHeaderScrollHidden(headerRef, lenis);
  const pathname = usePathname();
  const isPermanent =
    pathname === "/" ||
    pathname === "/index-branding-studio" ||
    pathname === "/index-digital-agency" ||
    pathname === "/index-web-studio" ||
    pathname === "/index-freelancer-portfolio" ||
    pathname === "/index-design-studio" ||
    pathname === "/works-default" ||
    pathname === "/services" ||
    pathname === "/team" ||
    pathname === "/blog-creative";
  return (
    <CommonLoadAnimation>
      <header
        id="header"
        ref={headerRef}
        className={`mxd-header ${isPermanent ? "mxd-header-permanent" : ""}`}
      >
        <CommonLoadFade index={0}>
          <div className="mxd-header__logo loading-fade">
            <Link className="mxd-logo" href={`/`}>
              <svg
                className="mxd-logo__image"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 15 12"
              >
                <path d="M1,1h2v10H1V1ZM1,1h7v2H1V1ZM1,5h6v2H1V5ZM1,9h13v2H1V9ZM8,1h2v10H8V1Z" />
              </svg>
              <div className="mxd-logo__text">
                <TextScramble className="mxd-scramble">ElarisLabs</TextScramble>
                <TextScramble className="mxd-scramble">AI</TextScramble>
              </div>
            </Link>
          </div>
        </CommonLoadFade>
        <CommonLoadFade index={1}>
          <div className="mxd-header__controls loading-fade">
            <ThemeSwitcher
              isPermanent={isPermanent}
              initialTheme={initialTheme}
            />
          </div>
        </CommonLoadFade>
      </header>
    </CommonLoadAnimation>
  );
}
