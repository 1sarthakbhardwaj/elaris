"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <PinnedSection
        blurSection
        className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
      >
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <CommonAnimatedText
                          as="h2"
                          className="reveal-type"
                          animation="revealType"
                        >
                          Notes from
                          <br />
                          the canvas
                        </CommonAnimatedText>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <CommonScrollAnimated
                          className="mxd-section-title__controls pre-title justify-end anim-uni-slide-up"
                          as="div"
                          animation="slideUpLine"
                        >
                          <Link
                            className="btn btn-line btn-line-default"
                            href={`/blogs`}
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              All Insights
                            </TextScramble>
                          </Link>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-block">
              <div className="mxd-blog-list">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    className="mxd-blog-list__item active-cursor-image active-cursor-permanent"
                    data-cursor-image={post.image}
                    data-cursor-text="Read Post"
                    href={post.href}
                  >
                    <div className="mxd-blog-list__divider top" />
                    <div className="container-fluid px-0 mxd-blog-list__inner">
                      <div className="row gx-0">
                        <div className="col-12 mxd-grid-padding">
                          <div className="mxd-blog-list__meta">
                            <span className="meta-tag comma-tag">
                              {post.category}
                            </span>
                            <span className="meta-time">{post.readTime}</span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-7 mxd-grid-padding">
                          <div className="mxd-blog-list__title">
                            <p>{post.title}</p>
                            <div className="mxd-blog-list__data">
                              <span className="meta-author comma-tag">
                                {post.author}
                              </span>
                              <span className="meta-date">{post.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-padding">
                          <div className="mxd-blog-list__excerpt">
                            <p className="t-medium">{post.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mxd-blog-list__divider bottom" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
