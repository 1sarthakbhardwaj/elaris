import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogGrid() {
  return (
    <>
      <BlurSection
        id="posts"
        className="mxd-section bg-color-base padding-bottom-tag-m"
      >
        <div className="mxd-container grid-l-container">
          <div className="mxd-posts-area">
            <div className="mxd-posts-container fullwidth-posts-container">
              <div className="mxd-posts-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-posts-grid__row">
                    {BLOG_POSTS.map((post) => (
                      <CommonCardBatchAnimated
                        key={post.slug}
                        className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                        as="div"
                        columns={3}
                      >
                        <article className="mxd-post post-simple-alt">
                          <div className="post-simple-alt__date">
                            <span className="meta-date">{post.date}</span>
                          </div>
                          <Link
                            className="post-simple-alt__media active-cursor-permanent"
                            data-cursor-text="Read Post"
                            href={post.href}
                          >
                            <Image
                              alt={post.imageAlt}
                              src={post.image}
                              width={1170}
                              height={800}
                            />
                          </Link>
                          <div className="post-simple-alt__caption">
                            <div className="post-simple-alt__title">
                              <h3>
                                <Link href={post.href}>{post.title}</Link>
                              </h3>
                            </div>
                            <div className="post-simple-alt__tags">
                              <Link
                                href="/blogs"
                                className="tag tag-s tag-medium"
                              >
                                <TextScramble className="mxd-scramble">
                                  {post.category}
                                </TextScramble>
                              </Link>
                            </div>
                          </div>
                        </article>
                      </CommonCardBatchAnimated>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
