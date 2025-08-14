import { useEffect } from 'react';

function useAutoScroll(sections, isPaused) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const animationFrameIds = {};

    for (const { ref, data, speed, key } of sections) {
      if (!data || data.length === 0) continue;
      const container = ref.current;
      if (!container) continue;

      let lastTime = performance.now();
      const scrollStep = (now) => {
        const delta = (now - lastTime) / 16.67;
        lastTime = now;

        if (isPaused[key]) {
          animationFrameIds[key] = requestAnimationFrame(scrollStep);
          return;
        }

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) {
          container.scrollLeft = 0;
          return;
        }

        container.scrollLeft += speed * delta;
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        }
        animationFrameIds[key] = requestAnimationFrame(scrollStep);
      };
      animationFrameIds[key] = requestAnimationFrame(scrollStep);
    }

    return () => {
      for (const key in animationFrameIds) {
        cancelAnimationFrame(animationFrameIds[key]);
      }
    };
  }, [sections, isPaused]);
}

export default useAutoScroll;