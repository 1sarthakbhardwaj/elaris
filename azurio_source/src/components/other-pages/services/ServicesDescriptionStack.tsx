"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import TextScramble from "@/components/animations/TextScramble";
import CommonServicesStack, {
  ServicesStackSlot,
} from "@/components/animations/CommonServicesStack";

const IMG_W = 1200;
const IMG_H = 1300;
const IMG_ALT = "ElarisLabs Sample Image";

type Card = {
  subtitle: string;
  title: string;
  tagCols: [string[], string[]];
  image: string;
  descrClass: string;
  descr: ReactNode;
};

const CARDS: Card[] = [
  {
    subtitle: "01 / Build",
    title: "Websites & app UI",
    tagCols: [
      ["Landing pages", "Design to code", "App frontends", "Node canvas"],
      ["Interactions", "Responsive", "Editable output"],
    ],
    image: "/img/services/services-stack/s01.webp",
    descrClass: "t-large t-bold services-card__descr",
    descr: (
      <>
        Autonomous design to code agents build production ready web
        experiences.
        <span>
          Interactive frontend components are generated on an editable two
          dimensional canvas, so what lands is a real interface rather than a
          flat picture of one.
        </span>
      </>
    ),
  },
  {
    subtitle: "02 / Build",
    title: "Decks & brand memory",
    tagCols: [
      ["Pitch decks", "Investor slides", "Brand kits", "Guardrails"],
      ["Typography", "Colour rules", "Logo rules"],
    ],
    image: "/img/services/services-stack/s02.webp",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Brand assets and operating data become investor ready slides in one
        pass.
        <span>
          A shared brand engine compiles colour, type and logo rules as hard
          guardrails at render time, across websites, apps and decks alike.
        </span>
      </>
    ),
  },
  {
    subtitle: "03 / Grow",
    title: "Ad campaign OS",
    tagCols: [
      ["500+ variants", "Recomposition", "Arabic RTL"],
      ["Retail OOH", "Catalog assets"],
    ],
    image: "/img/services/services-stack/s03.webp",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Generate, recompose and localise more than five hundred ad variants
        in a single parallel pass,{" "}
        <span>
          with native Arabic right to left mirroring and script re typesetting
          handled at render time rather than patched afterwards.
        </span>
      </>
    ),
  },
  {
    subtitle: "04 / Grow",
    title: "Video, social & analytics",
    tagCols: [
      ["Text to video", "Product reshoots", "Scheduling"],
      ["Pre flight scoring", "Listening"],
    ],
    image: "/img/services/services-stack/s04.webp",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Dynamic video, cross channel publishing and performance signal in one
        loop.
        <span>
          Score creative before the spend, publish to five plus channels from
          the canvas, then watch sentiment and rerun the branch that moved.
        </span>
      </>
    ),
  },
];

function Tag({ children }: { children: string }) {
  return (
    <TextScramble className="tag tag-s-mobile mxd-scramble">
      {children}
    </TextScramble>
  );
}

function ServiceCard({ card, index }: { card: Card; index: number }) {
  const [colA, colB] = card.tagCols;
  return (
    <ServicesStackSlot part="card" index={index}>
      <div className="mxd-stack-services__card">
        <ServicesStackSlot part="wrapper" index={index}>
          <div className="services-card__wrapper">
            <div className="services-card__content">
              <div className="services-card__info">
                <div className="services-card__subtitle">
                  <Tag>{card.subtitle}</Tag>
                </div>
                <div className="services-card__title">
                  <ServicesStackSlot part="title" index={index}>
                    <div className="services-card__title-text">
                      {card.title}
                    </div>
                  </ServicesStackSlot>
                </div>
                <ServicesStackSlot part="tags" index={index}>
                  <div className="services-card__tags">
                    <div className="tags-column">
                      {colA.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div className="tags-column">
                      {colB.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </ServicesStackSlot>
              </div>
              <ServicesStackSlot part="descr" index={index}>
                <div className={card.descrClass}>{card.descr}</div>
              </ServicesStackSlot>
            </div>
            <ServicesStackSlot part="image" index={index}>
              <div className="services-card__image">
                <Image
                  src={card.image}
                  width={IMG_W}
                  height={IMG_H}
                  alt={IMG_ALT}
                />
                <div className="services-card__cover" />
              </div>
            </ServicesStackSlot>
          </div>
        </ServicesStackSlot>
      </div>
    </ServicesStackSlot>
  );
}

export default function ServicesDescriptionStack() {
  return (
    <div id="services" className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <CommonServicesStack className="mxd-stack-services">
            {CARDS.map((card, index) => (
              <ServiceCard key={card.subtitle} card={card} index={index} />
            ))}
          </CommonServicesStack>
        </div>
      </div>
    </div>
  );
}
