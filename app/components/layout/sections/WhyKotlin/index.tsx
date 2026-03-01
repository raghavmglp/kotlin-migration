import { useEffect, useState } from "react";

import Button from "@rescui/button";
import { Tab, TabList, TabSeparator } from "@rescui/tab-list";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";

import { Container, Section } from "~/components/layout/primitives";

import { tabs } from "./data/data";
import "./index.scss";

hljs.registerLanguage("kotlin", kotlin);

const sections = [
  {
    title: "A productive way to write server-side applications",
    description:
      "Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.",
    buttonText: "Learn more",
    buttonLink: "/lp/server-side/",
    media: "youtube",
    youtubeId: "8xAH7RU0Y44",
  },
  {
    title: "Cross-platform layer for native applications",
    description:
      "Share application logic between web, mobile, and desktop platforms while keeping an experience native to users. Save time and get the benefit of unlimited access to features specific to these platforms.",
    buttonText: "Learn about Kotlin Multiplatform",
    buttonLink: "/docs/multiplatform.html",
    media: "image",
  },
  {
    title: "Big, friendly and helpful community",
    description:
      "Kotlin has great support and many contributors in its fast-growing global community. Enjoy the benefits of a rich ecosystem with a wide range of community libraries. Help is never far away - consult extensive community resources or ask the Kotlin team directly.",
    buttonText: "Join the community",
    buttonLink: "/community/",
    media: "youtube",
    youtubeId: "JGvk4M0Rfxo",
  },
];

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="why-kotlin-section__youtube">
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

function ProgrammingLanguage() {
  const textCn = useTextStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlighted, setHighlighted] = useState<string>("");

  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * tabs.length));
  }, []);

  useEffect(() => {
    const el = document.createElement("code");
    el.className = "language-kotlin";
    el.textContent = tabs[activeIndex].code;
    hljs.highlightElement(el);
    setHighlighted(el.innerHTML);
  }, [activeIndex]);

  return (
    <div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
      <div className="kto-col-4 kto-col-md-12">
        <h3 className={textCn("rs-h2")}>
          Modern, concise and safe programming language
        </h3>
        <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="kto-offset-top-32">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>

      <div className="kto-col-8 kto-col-md-12">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {tabs.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="programming-language__code kto-offset-top-16">
          <code
            className="hljs"
            dangerouslySetInnerHTML={{
              __html: highlighted || tabs[activeIndex].code,
            }}
          />
        </pre>
      </div>
    </div>
  );
}

function WhyKotlinContent() {
  const textCn = useTextStyles();

  return (
    <Section className="why-kotlin-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Why Kotlin</h2>

        <ProgrammingLanguage />

        {sections.map((section, index) => (
          <div
            key={index}
            className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48"
          >
            <div className="kto-col-4 kto-col-md-12">
              <h3 className={textCn("rs-h2")}>{section.title}</h3>
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
                {section.description}
              </p>
              <div className="kto-offset-top-32">
                <Button mode="outline" size="l" href={section.buttonLink}>
                  {section.buttonText}
                </Button>
              </div>
            </div>

            <div className="kto-col-8 kto-col-md-12">
              {section.media === "youtube" && (
                <YouTubeEmbed id={section.youtubeId!} />
              )}
              {section.media === "image" && (
                <img
                  src="/images/index/multiplatform.svg"
                  alt="Kotlin Multiplatform"
                  className="why-kotlin-section__image"
                />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function WhyKotlinSection() {
  return (
    <ThemeProvider theme="light">
      <WhyKotlinContent />
    </ThemeProvider>
  );
}
