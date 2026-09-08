"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Motion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    let disposed = false;
    const context = gsap.context(() => {
      const header = root.current?.querySelector<HTMLElement>(".site-header");

      ScrollTrigger.create({
        trigger: ".hero1",
        start: "bottom bottom-=2",
        end: "max",
        onToggle: (self) =>
          header?.classList.toggle("is-visible", self.isActive),
      });

      ScrollTrigger.create({
        start: 40,
        end: "max",
        toggleClass: { targets: ".site-header", className: "is-scrolled" },
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroIntro = gsap.timeline();

        heroIntro
          .fromTo(
            "[data-hero1-strip]",
            {
              yPercent: (index) => (index % 2 === 0 ? -102 : 102),
            },
            {
              yPercent: 0,
              duration: 1.25,
              stagger: { each: 0.055, from: "center" },
              ease: "power3.out",
            },
          )
          .to(
            "[data-hero1-reveal]",
            {
              autoAlpha: 0,
              duration: 0.42,
              ease: "power2.out",
            },
            "-=0.12",
          )
          .set("[data-hero1-reveal]", { display: "none" });

        const entrance = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero1",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });

        entrance
          .fromTo(
            "[data-hero1-outro]",
            { scale: 1.14 },
            { scale: 1, ease: "none", duration: 1 },
            0,
          )
          .fromTo(
            "[data-hero1-intro]",
            { scale: 1 },
            { scale: 3.45, ease: "power1.in", duration: 0.88 },
            0,
          )
          .to(
            "[data-hero1-chrome]",
            { opacity: 0, y: -18, ease: "power1.in", duration: 0.22 },
            0.08,
          )
          .to(
            "[data-hero1-intro]",
            { opacity: 0, ease: "power1.in", duration: 0.12 },
            0.82,
          );

        gsap.from(".hero-line", {
          yPercent: 22,
          opacity: 0,
          duration: 1.35,
          stagger: 0.13,
          ease: "power3.out",
        });
        gsap.from("[data-hero-image]", {
          clipPath: "inset(9% 0 0 0)",
          duration: 1.65,
          ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 35,
            opacity: 0.12,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          });
        });

        gsap.fromTo(
          "[data-expand-image]",
          { clipPath: "inset(0 5% 0 5%)" },
          {
            clipPath: "inset(0 0% 0 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: ".featured",
              start: "top 85%",
              end: "top 10%",
              scrub: 1,
            },
          },
        );

        gsap.utils
          .toArray<HTMLElement>("[data-scroll-zoom]")
          .forEach((element) => {
            const image = element.querySelector(".scroll-zoom-photo img");

            if (!image) return;

            gsap.fromTo(
              image,
              { scale: 1 },
              {
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top 85%",
                  end: "bottom 15%",
                  scrub: 1.2,
                  invalidateOnRefresh: true,
                },
              },
            );
          });

        gsap.utils
          .toArray<HTMLElement>("[data-process-stage]")
          .forEach((element) => {
            gsap.fromTo(
              element.querySelector(".process-photo"),
              { clipPath: "inset(15% 0 15% 0)", scale: 0.94 },
              {
                clipPath: "inset(0% 0 0% 0)",
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  end: "top 35%",
                  scrub: 0.8,
                },
              },
            );
            gsap.from(element.querySelector(".process-line"), {
              scaleY: 0,
              transformOrigin: "top",
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 65%",
                end: "bottom 50%",
                scrub: 0.5,
              },
            });
          });
      });

      media.add(
        "(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.to(".studio-photo", {
            y: -45,
            ease: "none",
            scrollTrigger: {
              trigger: ".studio",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
          const track = root.current?.querySelector<HTMLElement>(".work-track");
          const viewport =
            root.current?.querySelector<HTMLElement>(".work-viewport");
          if (track && viewport) {
            gsap.set(viewport, { overflowX: "hidden" });
            const distance = () =>
              Math.max(0, track.scrollWidth - viewport.clientWidth);
            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                id: "work-sequence",
                trigger: ".work-pin",
                start: "top top",
                end: () => "+=" + distance(),
                pin: true,
                scrub: 0.7,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            });
            gsap.fromTo(
              ".work-progress span",
              { scaleX: 0.08 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: ".work-pin",
                  start: "top top",
                  end: () => "+=" + distance(),
                  scrub: 0.7,
                },
              },
            );
          }
        },
      );
    }, root);

    const refresh = () => {
      if (!disposed) ScrollTrigger.refresh();
    };
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      disposed = true;
      window.removeEventListener("load", refresh);
      media.revert();
      context.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
