"use client";

import type { ReactNode } from "react";
import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import type { BlogPost } from "@/types/blog";

type ArticleShellProps = {
  post: BlogPost;
  children: ReactNode;
};

export default function ArticleShell({ post, children }: ArticleShellProps) {
  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section">
          <div className="mxd-container grid-l-container">
            <div className="mxd-block">
              <div className="inner-headline">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 mxd-grid-item">
                      <CommonLoadFade index={0}>
                        <div className="inner-headline__breadcrumbs loading-fade">
                          <div className="breadcrumbs__nav">
                            <span>
                              <Link href={`/`}>
                                <TextScramble className="mxd-scramble">
                                  Home
                                </TextScramble>
                              </Link>
                            </span>
                            <span>
                              <Link href={`/blogs`}>
                                <TextScramble className="mxd-scramble">
                                  Insights
                                </TextScramble>
                              </Link>
                            </span>
                            <span className="current-item">{post.title}</span>
                          </div>
                        </div>
                      </CommonLoadFade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-article-area">
              <div className="mxd-article-container mxd-grid-item">
                <div className="mxd-article loading-wrap">
                  <div className="mxd-article__headline">
                    <CommonLoadItem index={0}>
                      <div className="mxd-article__tags loading-item">
                        <Link href="/blogs">
                          <TextScramble className="tag tag-m meta-tag comma-tag mxd-scramble">
                            {post.category}
                          </TextScramble>
                        </Link>
                        <TextScramble className="tag tag-m meta-tag mxd-scramble">
                          {post.author}
                        </TextScramble>
                      </div>
                    </CommonLoadItem>
                    <div className="mxd-article__title">
                      <CommonAnimatedText
                        as="h2"
                        className="small loading-split"
                        animation="splitLinesLoad"
                      >
                        {post.title}
                      </CommonAnimatedText>
                    </div>
                    <CommonLoadItem index={1}>
                      <div className="mxd-article__meta loading-item">
                        <div className="mxd-article__data">
                          <span className="tag tag-m meta-tag slash-tag">
                            {post.date}
                          </span>
                          <span className="tag tag-m meta-tag">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </CommonLoadItem>
                  </div>
                  <CommonLoadItem index={2}>
                    <div className="mxd-article__thumb loading-item">
                      <Image
                        alt={post.imageAlt}
                        src={post.image}
                        width={1920}
                        height={1200}
                      />
                    </div>
                  </CommonLoadItem>
                  <div className="mxd-article__content">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
