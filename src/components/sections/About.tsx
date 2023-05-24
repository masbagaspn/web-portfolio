import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../App";

import Section from "../commons/Section";
import about from "../../data/about-me.json";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useWindowSize from "../../hooks/useWindowSize";

const About = () => {
  const { width } = useWindowSize();
  const context = useContext(AppContext);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(aboutRef, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      context?.setSectionInView("about");
    }
  }, [width, isVisible, context]);

  return (
    <Section title="ABOUT">
      <div
        ref={aboutRef}
        className="space-y-4 sm:text-xl lg:font-light lg:text-lg lg:space-y-12"
      >
        {about.description.map((s, i) => (
          <p className="flex flex-wrap gap-1" key={i}>
            {s
              .split(" ")
              .map((w, idx) =>
                w.includes("HTML") ||
                w.includes("CSS") ||
                w.includes("JavaScript") ||
                w.includes("React") ||
                w.includes("TailwindCSS") ? (
                  <span key={idx} className="text-lime-400">{`${w} `}</span>
                ) : (
                  <span key={idx}>{`${w}`}</span>
                )
              )}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default About;
