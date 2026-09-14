"use client";

import AutoplayLoopVideo from "@/components/media/AutoplayLoopVideo";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useLayoutEffect, useRef } from "react";
import TextScramble from "@/components/animations/TextScramble";
import {
  initStackCardsEffects,
  initVelocityMarqueeRows,
  type StackCardMedia,
} from "@/lib/template/stackCardsEffects";

const MARQUEE_WORDS = [
  "Campaigns/",
  "Products/",
  "Films/",
  "Brands/",
  "Systems/",
] as const;

type VideoSources = { type: string; src: string }[];

type StackCard = {
  key: string;
  title: string;
  tags: string[];
  href: string;
  coverClassName?: string;
} & (
  | { media: "video"; poster: string; sources: VideoSources }
  | {
      media: "image";
      imageSrc: string;
      imageWidth: number;
      imageHeight: number;
    }
);

const PROJECT_CARDS: StackCard[] = [
  {
    key: "mcdonalds-qatar",
    title: "A billboard that read the weather",
    tags: ["Live DOOH", "Campaign", "Doha"],
    href: "/blogs/mcdonalds-qatar-live-dooh",
    media: "video",
    poster: "/blogs/mcdonalds-qatar-live-dooh/assets/live-panel-poster.jpg",
    sources: [
      {
        type: "video/mp4",
        src: "/blogs/mcdonalds-qatar-live-dooh/assets/live-panel.mp4",
      },
    ],
  },
  {
    key: "marketing-journey",
    title: "Your whole marketing journey, in one place",
    tags: ["Canvas", "Video", "Publishing"],
    href: "/blogs/elarislabs-marketing-journey",
    media: "image",
    imageSrc: "/blogs/elarislabs-marketing-journey/what-is-elarislabs.png",
    imageWidth: 1672,
    imageHeight: 941,
  },
  {
    key: "brand-onboarding",
    title: "One URL in, a whole brand out",
    tags: ["Onboarding", "Brand memory", "Agents"],
    href: "/blogs/elaris-scrapegraph",
    media: "image",
    imageSrc: "/blogs/elaris-scrapegraph/cover.png",
    imageWidth: 1024,
    imageHeight: 1024,
  },
  {
    key: "model-testing",
    title: "Two frontier models, one shared prompt",
    tags: ["Model testing", "Video", "Benchmarks"],
    href: "/blogs/seedance-2-5-vs-minimax-h3",
    media: "image",
    imageSrc: "/blogs/seedance-2-5-vs-minimax-h3/cover.jpg",
    imageWidth: 1200,
    imageHeight: 675,
    coverClassName: "cover-darken",
  },
];

export default function ProjectsStack() {
  const topRefs = useRef<HTMLDivElement[]>([]);
  const bottomRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const cardWrapperRefs = useRef<HTMLDivElement[]>([]);
  const cardDescriptionRefs = useRef<HTMLDivElement[]>([]);
  const cardTitleRefs = useRef<HTMLParagraphElement[]>([]);
  const cardCoverRefs = useRef<HTMLDivElement[]>([]);
  const cardImageWrapperRefs = useRef<HTMLDivElement[]>([]);
  const cardMediaRefs = useRef<StackCardMedia[]>([]);
  const introMarqueeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    return initVelocityMarqueeRows(topRefs.current, bottomRefs.current);
  }, []);

  useLayoutEffect(() => {
    return initStackCardsEffects({
      cards: cardRefs.current,
      cardWrappers: cardWrapperRefs.current,
      cardDescriptions: cardDescriptionRefs.current,
      cardTitleParagraphs: cardTitleRefs.current,
      cardCovers: cardCoverRefs.current,
      cardImageWrappers: cardImageWrapperRefs.current,
      cardMedias: cardMediaRefs.current,
      introMarquee: introMarqueeRef.current,
    });
  }, []);

  return (
    <div id="work" className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="mxd-stack-cards">
            {PROJECT_CARDS.map((card, index) => (
              <div
                key={card.key}
                className="mxd-stack-cards__card"
                ref={(el) => {
                  if (!el) return;
                  cardRefs.current[index] = el;
                }}
              >
                {index === 0 ? (
                  <div
                    className="card__marquees"
                    ref={(el) => {
                      if (!el) return;
                      introMarqueeRef.current = el;
                    }}
                  >
                    <div className="marquee marquee-stack marquee--gsap muted-extra">
                      {[0, 1].map((row) => (
                        <Fragment key={`row-${row}`}>
                          <div
                            className="marquee__top"
                            ref={(el) => {
                              if (!el) return;
                              topRefs.current[row] = el;
                            }}
                          >
                            {MARQUEE_WORDS.map((word) => (
                              <div
                                key={`top-${row}-${word}`}
                                className="marquee__item item-regular text"
                              >
                                <p className="marquee__text text-with-gliph">
                                  {word}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div
                            className="marquee__bottom"
                            ref={(el) => {
                              if (!el) return;
                              bottomRefs.current[row] = el;
                            }}
                          >
                            {MARQUEE_WORDS.map((word) => (
                              <div
                                key={`bottom-${row}-${word}`}
                                className="marquee__item item-regular text"
                              >
                                <p className="marquee__text text-with-gliph">
                                  {word}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div
                  className="card__wrapper"
                  ref={(el) => {
                    if (!el) return;
                    cardWrapperRefs.current[index] = el;
                  }}
                >
                  <div className="card__content">
                    <div
                      className="card__descr"
                      ref={(el) => {
                        if (!el) return;
                        cardDescriptionRefs.current[index] = el;
                      }}
                    >
                      <div className="card__tags">
                        {card.tags.map((tag) => (
                          <TextScramble
                            key={`${card.key}-${tag}`}
                            className="tag tag-m tag-permanent mxd-scramble"
                          >
                            {tag}
                          </TextScramble>
                        ))}
                      </div>
                      <div className="card__btngroup">
                        <Link
                          className="btn btn-line btn-line-permanent"
                          href={card.href}
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            Read the story
                          </TextScramble>
                        </Link>
                      </div>
                    </div>
                    <Link
                      className="card__title active-cursor-permanent"
                      data-cursor-text="Read Story"
                      href={card.href}
                    >
                      <p
                        className="permanent"
                        ref={(el) => {
                          if (!el) return;
                          cardTitleRefs.current[index] = el;
                        }}
                      >
                        {card.title}
                      </p>
                    </Link>
                  </div>
                  <div
                    className="card__image"
                    ref={(el) => {
                      if (!el) return;
                      cardImageWrapperRefs.current[index] = el;
                    }}
                  >
                    {card.media === "video" ? (
                      <AutoplayLoopVideo
                        className="video card__media"
                        poster={card.poster}
                        sources={card.sources}
                        ref={(el) => {
                          if (!el) return;
                          cardMediaRefs.current[index] = el;
                        }}
                      />
                    ) : (
                      <Image
                        className="card__media"
                        alt={card.title}
                        src={card.imageSrc}
                        width={card.imageWidth}
                        height={card.imageHeight}
                        ref={(el) => {
                          if (!el) return;
                          cardMediaRefs.current[index] = el;
                        }}
                      />
                    )}
                    <div
                      className={`card__cover${card.coverClassName ? ` ${card.coverClassName}` : ""}`}
                      ref={(el) => {
                        if (!el) return;
                        cardCoverRefs.current[index] = el;
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
