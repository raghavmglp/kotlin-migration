import React from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";

import { Container, Section } from "app/components/layout";
import { newsData } from "data/news"; // Assuming newsData is in a local data file
import "./index.scss";

// These paths point directly into your public folder
const bannerImg = "/images/index/banners/kotlin-1.6.20.png";
const bannerMobileImg = "/images/index/banners/kotlin-1.6.20-mobile.png";

export function LatestFromKotlinSection() {
    const textCn = useTextStyles();

    return (
        <ThemeProvider theme="dark">
            <Section className="latest-from-kotlin-section">
                <Container>
                    <h2 className={textCn("rs-h1")}>Latest from Kotlin</h2>

                    {/* Banner Section */}
                    <div className="latest-from-kotlin-section__banner kto-offset-top-32">
                        <a
                            href="https://blog.jetbrains.com/kotlin/2022/04/kotlin-1-6-20-released/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="latest-from-kotlin-section__banner-link"
                        >
                            <picture>
                                <source media="(max-width: 537px)" srcSet={bannerMobileImg} />
                                <img
                                    src={bannerImg}
                                    alt="Kotlin 1.6.20 released"
                                    className="latest-from-kotlin-section__banner-img"
                                />
                            </picture>
                        </a>
                    </div>

                    {/* News Grid */}
                    <div className="kto-grid kto-grid-gap-32 kto-offset-top-48">
                        {newsData.map((news, index) => (
                            <div key={index} className="kto-col-3 kto-col-md-6 kto-col-sm-12">
                                <p className={cn(textCn("rs-text-3"), "latest-from-kotlin-section__tag")}>
                                    {news.tag}
                                </p>
                                <h3 className={cn(textCn("rs-text-2"), "kto-offset-top-8")}>
                                    <a
                                        href={news.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(textCn("rs-link"), "latest-from-kotlin-section__news-link")}
                                    >
                                        {news.title}
                                    </a>
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="latest-from-kotlin-section__actions kto-offset-top-48">
                        <Button
                            mode="outline"
                            size="l"
                            href="https://blog.jetbrains.com/kotlin/"
                            target="_blank"
                        >
                            Kotlin blog
                        </Button>
                    </div>
                </Container>
            </Section>
        </ThemeProvider>
    );
}