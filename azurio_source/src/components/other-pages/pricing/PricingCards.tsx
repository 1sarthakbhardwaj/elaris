import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { ENTERPRISE_PLAN, PRICING_PLANS } from "@/data/pricing";
import type { PricingPlan } from "@/types/pricing";
import { CALENDLY_BOOKING_URL, STUDIO_APP_URL } from "@/lib/site";

const CHECK_PATH =
  "M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z";
const ARROW_PATH =
  "M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      version="1.1"
      viewBox="0 0 18 18"
    >
      <path d={CHECK_PATH} />
    </svg>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  const priceLabel = plan.monthly === 0 ? "0" : String(plan.monthly);
  const caption =
    plan.monthly === 0
      ? plan.breakdown
      : `${plan.breakdown}. Or $${plan.annualMonthly} /mo billed annually.`;

  return (
    <CommonCardBatchAnimated
      className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
      as="div"
      columns={3}
    >
      <div className="mxd-pricing-table__inner">
        <div className="mxd-pricing-table__bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={200}
            height={200}
            version="1.1"
            viewBox="0 0 200 200"
          >
            <g filter={`url(#blur-${plan.id})`}>
              <path
                fill="var(--highlight)"
                d="M200,200c0,55.2-44.8,100-100,100S0,255.2,0,200s44.8-100,100-100,100,44.8,100,100Z"
              />
            </g>
            <defs>
              <filter
                id={`blur-${plan.id}`}
                x={0}
                y={0}
                width={3000}
                height={5000}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={60}
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>
        {plan.badge ? (
          <div className="mxd-pricing-table__tag">
            <span
              className={
                plan.badgeAccent
                  ? "tag tag-m tag-bg accent"
                  : "tag tag-m tag-bg muted"
              }
            >
              {plan.badge}
            </span>
          </div>
        ) : null}
        <div className="mxd-pricing-table__data">
          <div className="pricing-data__header">
            <CommonScrollAnimated
              className="pricing-header__title anim-uni-in-up"
              as="p"
              animation="inUp"
            >
              {plan.name} <span>{plan.nameAccent}</span>
            </CommonScrollAnimated>
            <CommonScrollAnimated
              className="pricing-header__descr t-bold anim-uni-in-up"
              as="p"
              animation="inUp"
            >
              {plan.description}
            </CommonScrollAnimated>
          </div>
          <div className="pricing-data__info">
            <div className="pricing-data__price">
              <CommonScrollAnimated
                className="pricing-data__num anim-uni-in-up"
                as="div"
                animation="inUp"
              >
                <span className="pricing-data__currency">$</span>
                <span className="pricing-data__amount">{priceLabel}</span>
                <span className="pricing-data__period">/mo</span>
              </CommonScrollAnimated>
              <CommonScrollAnimated
                className="pricing-data__caption t-small t-muted t-140 anim-uni-in-up"
                as="p"
                animation="inUp"
              >
                {caption}
              </CommonScrollAnimated>
            </div>
            <CommonScrollAnimated
              className="pricing-data__btnholder anim-uni-in-up"
              as="div"
              animation="inUp"
            >
              <a
                className="btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right"
                href={STUDIO_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TextScramble className="btn-caption mxd-scramble">
                  {plan.cta}
                </TextScramble>
                <i className="btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 18 18"
                  >
                    <path d={ARROW_PATH} />
                  </svg>
                </i>
              </a>
            </CommonScrollAnimated>
          </div>
        </div>
        <div className="mxd-pricing-table__plan">
          <CommonScrollAnimated
            className="pricing-plan__caption t-bold anim-uni-in-up"
            as="p"
            animation="inUp"
          >
            What is included:
          </CommonScrollAnimated>
          <div className="pricing-plan__list">
            <ul className="mxd-check-list">
              {plan.features.map((feature) => (
                <CommonScrollAnimated
                  key={feature}
                  className="anim-uni-in-up"
                  as="li"
                  animation="inUp"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </CommonScrollAnimated>
              ))}
            </ul>
          </div>
        </div>
        <CommonScrollAnimated
          className="mxd-pricing-table__link anim-uni-in-up"
          as="div"
          animation="inUp"
        >
          <Link href={`/contact`}>Need more info? Let us talk.</Link>
        </CommonScrollAnimated>
      </div>
    </CommonCardBatchAnimated>
  );
}

export default function PricingCards() {
  return (
    <CommonLoadAnimation>
      <>
        <div className="mxd-section">
          <div className="mxd-container grid-l-container">
            <div className="mxd-block">
              <CommonLoadFade index={0}>
                <div className="mxd-pricing-table loading-fade">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {PRICING_PLANS.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                      ))}
                    </div>
                  </div>
                </div>
              </CommonLoadFade>
            </div>
            <div className="mxd-block">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <CommonScrollAnimated
                      className="tag tag-m meta-tag anim-uni-in-up"
                      as="p"
                      animation="inUp"
                    >
                      <TextScramble className="mxd-scramble">
                        Enterprise
                      </TextScramble>
                    </CommonScrollAnimated>
                    <CommonScrollAnimated
                      className="t-large t-bold anim-uni-in-up"
                      as="p"
                      animation="inUp"
                    >
                      {ENTERPRISE_PLAN.heading}
                    </CommonScrollAnimated>
                    <CommonScrollAnimated
                      className="t-medium anim-uni-in-up"
                      as="p"
                      animation="inUp"
                    >
                      {ENTERPRISE_PLAN.body}
                    </CommonScrollAnimated>
                    <ul className="mxd-check-list">
                      {ENTERPRISE_PLAN.features.map((feature) => (
                        <CommonScrollAnimated
                          key={feature}
                          className="anim-uni-in-up"
                          as="li"
                          animation="inUp"
                        >
                          <CheckIcon />
                          <span>{feature}</span>
                        </CommonScrollAnimated>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <CommonScrollAnimated
                      className="anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <a
                        className="btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right"
                        href={CALENDLY_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TextScramble className="btn-caption mxd-scramble">
                          {ENTERPRISE_PLAN.cta}
                        </TextScramble>
                        <i className="btn-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 18 18"
                          >
                            <path d={ARROW_PATH} />
                          </svg>
                        </i>
                      </a>
                    </CommonScrollAnimated>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </CommonLoadAnimation>
  );
}
