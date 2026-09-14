"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CALENDLY_BOOKING_URL, STUDIO_APP_URL } from "@/lib/site";
import {
  MEGA_MENUS,
  TOP_LINKS,
  linkIsActive,
  type MegaMenu,
  type NavLink,
} from "@/lib/nav";
import Icon from "./Icon";
import Lockup from "./Lockup";

type MenuId = MegaMenu["id"];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const openMenu = (id: MenuId) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenu(id);
    setMobileOpen(false);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const raised = scrolled || menu !== null || mobileOpen;
  const activeMega = MEGA_MENUS.find((item) => item.id === menu) ?? null;

  return (
    <>
      {menu && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 hidden bg-coal/50 lg:block"
          onClick={() => setMenu(null)}
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          raised
            ? "border-b border-white/[0.06] bg-coal/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setMenu(null);
          }
        }}
      >
        <div className="relative mx-auto max-w-[1480px] px-5 md:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="ElarisLabs AI — home"
              className="flex items-center transition-opacity hover:opacity-80"
              onMouseEnter={() => setMenu(null)}
            >
              <Lockup height={26} />
            </Link>

            <nav
              aria-label="Primary"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
            >
              {MEGA_MENUS.map((item) => {
                const open = menu === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                      open
                        ? "bg-white/10 text-bone"
                        : "text-chrome hover:bg-white/5 hover:text-bone"
                    }`}
                    onMouseEnter={() => openMenu(item.id)}
                    onFocus={() => openMenu(item.id)}
                    onClick={() => setMenu(open ? null : item.id)}
                  >
                    {item.trigger}
                    <Icon
                      name="chevronDown"
                      size={12}
                      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                );
              })}
              {TOP_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-1.5 text-sm text-chrome transition-colors hover:bg-white/5 hover:text-bone"
                  onMouseEnter={() => setMenu(null)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className="flex items-center gap-2 sm:gap-3"
              onMouseEnter={() => setMenu(null)}
            >
              <a
                href={STUDIO_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-sm text-chrome transition-colors hover:text-bone sm:block"
              >
                Sign in
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-lume to-halo px-4 py-2 text-sm font-semibold text-coal shadow-[0_0_25px_-5px_rgba(168,205,239,0.55)] transition-all hover:brightness-110 sm:px-5"
              >
                Book a demo
              </a>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-bone lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMenu(null);
                  setMobileOpen((v) => !v);
                }}
              >
                <Icon name={mobileOpen ? "close" : "menu"} size={18} />
              </button>
            </div>
          </div>

          {activeMega && (
            <div className="absolute inset-x-5 top-full z-50 hidden pb-4 pt-2 lg:block md:inset-x-8">
              <MegaPanel menu={activeMega} pathname={pathname} />
            </div>
          )}
        </div>

        {mobileOpen && (
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/[0.06] bg-coal lg:hidden">
            <MobileNav
              pathname={pathname}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        )}
      </header>
    </>
  );
}

function MegaPanel({ menu, pathname }: { menu: MegaMenu; pathname: string }) {
  const [sidebar, main] = menu.columns;
  const mid = Math.ceil(main.links.length / 2);
  const colA = main.links.slice(0, mid);
  const colB = main.links.slice(mid);

  return (
    <div className="rounded-[28px] bg-lume p-8 text-ink shadow-[0_28px_80px_-28px_rgba(0,0,0,0.65)] lg:p-10">
      <div className="mb-8 max-w-xl">
        <h2 className="text-display text-[1.65rem] leading-tight tracking-tight text-ink md:text-[1.85rem]">
          {menu.title}
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-steel">
          {menu.description}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)]">
        <div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-chrome">
            {sidebar.heading}
          </p>
          <ul className="flex flex-col">
            {sidebar.links.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <MegaItem link={link} pathname={pathname} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-chrome">
            {main.heading}
          </p>
          <div className="grid gap-x-12 sm:grid-cols-2">
            <ul>
              {colA.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <MegaItem link={link} pathname={pathname} />
                </li>
              ))}
            </ul>
            <ul>
              {colB.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <MegaItem link={link} pathname={pathname} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Link
        href={menu.banner.href}
        className="mt-8 flex items-center gap-3 rounded-2xl bg-black/[0.04] px-4 py-3.5 text-sm text-steel transition-colors hover:bg-black/[0.07] hover:text-ink"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-lume">
          <Icon name="play" size={11} />
        </span>
        {menu.banner.label}
      </Link>
    </div>
  );
}

function MegaItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const active = linkIsActive(link.href, pathname);
  const className = `group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors ${
    active ? "bg-black/[0.06]" : "hover:bg-black/[0.04]"
  }`;

  const inner = (
    <>
      <span>
        <span className="flex items-center gap-2">
          <span className="text-[15px] font-medium text-ink">{link.label}</span>
          {link.badge && (
            <span className="rounded-full bg-ink px-1.5 py-px text-[9px] font-medium uppercase tracking-[0.12em] text-lume">
              {link.badge}
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-steel">
          {link.description}
        </span>
      </span>
      {link.external && (
        <Icon
          name="arrowUpRight"
          size={13}
          className="mt-1 shrink-0 text-chrome opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {inner}
    </Link>
  );
}

function MobileNav({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState<MenuId | null>("products");

  return (
    <div className="px-5 py-5">
      {MEGA_MENUS.map((mega) => {
        const expanded = open === mega.id;
        return (
          <div
            key={mega.id}
            className="border-b border-white/[0.06] py-1 first:pt-0"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between py-3 text-left text-base text-bone"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : mega.id)}
            >
              {mega.trigger}
              <Icon
                name="chevronDown"
                size={14}
                className={`text-chrome transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
            {expanded && (
              <div className="pb-4">
                {mega.columns.map((col) => (
                  <div key={col.heading} className="mt-3 first:mt-0">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-chrome">
                      {col.heading}
                    </p>
                    <ul>
                      {col.links.map((link) => {
                        const active = linkIsActive(link.href, pathname);
                        const itemClass = `flex items-center justify-between py-2 text-sm ${
                          active ? "text-halo" : "text-silver"
                        }`;
                        const label = (
                          <>
                            <span>
                              {link.label}
                              {link.badge ? (
                                <span className="ml-2 text-[9px] uppercase tracking-[0.12em] text-halo">
                                  {link.badge}
                                </span>
                              ) : null}
                            </span>
                            {link.external ? (
                              <Icon name="arrowUpRight" size={12} />
                            ) : null}
                          </>
                        );
                        return (
                          <li key={`${link.label}-${link.href}`}>
                            {link.external ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={itemClass}
                                onClick={onNavigate}
                              >
                                {label}
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                className={itemClass}
                                onClick={onNavigate}
                              >
                                {label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {TOP_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block border-b border-white/[0.06] py-3.5 text-base text-bone"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}

      <a
        href={STUDIO_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block text-sm text-chrome"
        onClick={onNavigate}
      >
        Sign in
      </a>
    </div>
  );
}
