"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export function GSAPReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state based on direction
    const initialState = {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    };

    gsap.set(element, initialState);

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface GSAPStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function GSAPStagger({
  children,
  staggerDelay = 0.1,
  className = "",
}: GSAPStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.children;

    // Set initial state for all items
    gsap.set(items, {
      opacity: 0,
      y: 40,
    });

    // Create staggered animation
    const animation = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: staggerDelay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [staggerDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface GSAPParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function GSAPParallax({ children, speed = 0.5, className = "" }: GSAPParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface GSAPScaleOnScrollProps {
  children: React.ReactNode;
  className?: string;
  fromScale?: number;
  toScale?: number;
}

export function GSAPScaleOnScroll({
  children,
  className = "",
  fromScale = 0.9,
  toScale = 1,
}: GSAPScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { scale: fromScale });

    const animation = gsap.to(element, {
      scale: toScale,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [fromScale, toScale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Hook to refresh ScrollTrigger on layout changes
export function useRefreshScrollTrigger() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
}
