"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import TextScramble from "@/components/animations/TextScramble";
import { BLOG_POSTS } from "@/data/blogs";

const categoryCounts = BLOG_POSTS.reduce<Record<string, number>>(
  (counts, post) => {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
    return counts;
  },
  {},
);

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section padding-bottom-default">
          <div className="mxd-container grid-l-container">
            <CommonLoadFade index={0}>
              <div className="mxd-posts-area loading-fade">
                <div className="mxd-posts-container mxd-grid-item">
                  {featured ? (
                    <article className="mxd-post post-featured">
                      <Link
                        className="post-featured__container active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href={featured.href}
                      >
                        <div className="post-featured__thumb">
                          <Image
                            alt={featured.imageAlt}
                            src={featured.image}
                            width={1400}
                            height={900}
                          />
                          <div className="post-featured__cover" />
                        </div>
                        <div className="post-featured__content">
                          <div className="post-featured__meta">
                            <div className="post-featured__data">
                              <TextScramble className="tag tag-s-mobile tag-permanent mxd-scramble">
                                {featured.date}
                              </TextScramble>
                              <TextScramble className="tag tag-s-mobile tag-permanent mxd-scramble">
                                {featured.readTime}
                              </TextScramble>
                            </div>
                            <div className="post-featured__categories">
                              <TextScramble className="tag tag-s-mobile tag-permanent mxd-scramble">
                                {featured.category}
                              </TextScramble>
                            </div>
                          </div>
                          <div className="post-featured__info">
                            <h2 className="post-featured__title permanent">
                              {featured.title}
                            </h2>
                            <div className="post-featured__excerpt">
                              <p className="t-medium t-permanent">
                                {featured.excerpt}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ) : null}
                  <div className="mxd-posts-list">
                    {rest.map((post) => (
                      <article key={post.slug} className="mxd-post post-simple">
                        <div className="post-simple__divider top" />
                        <Link
                          className="post-simple__container active-cursor-image active-cursor-permanent"
                          data-cursor-image={post.image}
                          data-cursor-text="Read Post"
                          href={post.href}
                        >
                          <div className="container-fluid px-0 post-simple__inner">
                            <div className="row gx-0">
                              <div className="col-12">
                                <div className="post-simple__meta">
                                  <span className="meta-tag comma-tag">
                                    {post.category}
                                  </span>
                                  <span className="meta-time">
                                    {post.readTime}
                                  </span>
                                </div>
                              </div>
                              <div className="col-12 col-xxl-7">
                                <div className="post-simple__title">
                                  <h3>{post.title}</h3>
                                  <div className="post-simple__data">
                                    <span className="meta-author comma-tag">
                                      {post.author}
                                    </span>
                                    <span className="meta-date">{post.date}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-xxl-5">
                                <div className="post-simple__excerpt">
                                  <p className="t-medium">{post.excerpt}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="post-simple__divider bottom" />
                      </article>
                    ))}
                  </div>
                </div>
                <div className="mxd-sidebar mxd-grid-item">
                  <div className="mxd-sidebar__widget widget-search">
                    <div className="widget-search__form">
                      <form
                        className="form search-form"
                        action="#"
                        method="get"
                        onSubmit={(event) => event.preventDefault()}
                      >
                        <input
                          id="search"
                          type="search"
                          name="search"
                          placeholder="Search"
                        />
                        <button
                          className="btn btn-form no-scale btn-absolute-right btn-line-medium"
                          type="submit"
                          aria-label="Search"
                        >
                          <i className="ph ph-magnifying-glass" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="mxd-sidebar__widget">
                    <div className="widget__title">
                      <p>/ Discover</p>
                    </div>
                    <ul className="widget__categories">
                      {Object.entries(categoryCounts).map(([name, count]) => (
                        <li key={name} className="categories__item">
                          <Link href="/blogs" className="categories__link">
                            {name}
                            <span>{String(count).padStart(2, "0")}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mxd-sidebar__widget">
                    <div className="widget__title">
                      <p>/ Latest posts</p>
                    </div>
                    <ul className="widget__recent-posts">
                      {BLOG_POSTS.map((post) => (
                        <li key={post.slug} className="recent-post__item">
                          <div className="recent-post__thumb">
                            <Link href={post.href}>
                              <Image
                                alt={post.imageAlt}
                                src={post.image}
                                width={300}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="recent-post__content">
                            <div className="recent-post__meta">
                              <TextScramble className="meta-tag tag-s comma-tag mxd-scramble">
                                {post.category}
                              </TextScramble>
                            </div>
                            <div className="recent-post__title">
                              <Link href={post.href}>{post.title}</Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mxd-sidebar__widget bg-base-tint radius-m widget-about">
                    <div className="widget__title">
                      <p>/ About</p>
                    </div>
                    <div className="widget__descr">
                      <p className="t-small">
                        Notes from the canvas.{" "}
                        <span>
                          Model tests, live campaigns, and how the operating
                          system actually ships.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CommonLoadFade>
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
