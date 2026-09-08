"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const links = [
  ["01", "The collection", "#selected-work"],
  ["02", "The atelier", "#studio"],
  ["03", "Our philosophy", "#philosophy"],
  ["04", "The process", "#process"],
  ["05", "Start a conversation", "#contact"],
];

export default function Navigation() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const animation = useRef<ReturnType<typeof gsap.context> | null>(null);
  const previousOverflow = useRef("");

  useEffect(
    () => () => {
      animation.current?.revert();
      if (dialog.current?.open)
        document.body.style.overflow = previousOverflow.current;
    },
    [],
  );

  function open() {
    if (!dialog.current || dialog.current.open) return;
    previousOverflow.current = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animation.current = gsap.context(() => {
        gsap.from(".menu-item", {
          y: 26,
          opacity: 0,
          duration: 0.75,
          stagger: 0.075,
          ease: "power3.out",
        });
      }, dialog.current);
    }
  }

  function close() {
    animation.current?.revert();
    dialog.current?.close();
  }

  function restore() {
    document.body.style.overflow = previousOverflow.current;
    opener.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#top" className="wordmark" aria-label="Interior home">
            Interior<span>STUDIO</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#selected-work">Selected work</a>
            <a href="#studio">The studio</a>
            <a href="#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <button
            ref={opener}
            className="menu-toggle"
            onClick={open}
            aria-haspopup="dialog"
            aria-label="Open navigation menu"
          >
            <span>Menu</span>
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="menu-dialog"
        aria-label="Site navigation"
        onClose={restore}
        onCancel={() => animation.current?.revert()}
      >
        <div className="container menu-content">
          <div className="menu-top">
            <span className="wordmark">
              Interior<span>STUDIO</span>
            </span>
            <button
              className="menu-close"
              onClick={close}
              aria-label="Close navigation menu"
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav aria-label="Expanded navigation">
            {links.map(([number, title, href]) => (
              <a className="menu-item" key={number} href={href} onClick={close}>
                <span className="label">{number}</span>
                <span>{title}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <div className="menu-foot">
            <a href="mailto:hello@eloria.studio">hello@eloria.studio</a>
            <span>Lahore, Pakistan · Commissions nationwide</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
