#hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

/* Video background */
.hero-video-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-video-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px) brightness(0.3);
  transform: scale(1.05);
}

.hero-fallback {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 30% 60%,
    rgba(110, 71, 59, 0.6) 0%,
    rgba(41, 28, 14, 0.8) 50%,
    rgba(13, 9, 8, 1) 100%
  );
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(13, 9, 8, 0.2) 0%,
    rgba(41, 28, 14, 0.25) 50%,
    rgba(13, 9, 8, 0.85) 100%
  );
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
  max-width: 900px;
  width: 100%;
}

.hero-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sand);
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.9s 0.3s forwards;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 1.6rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s 0.55s forwards;
}

.hero-headline em {
  font-style: italic;
  color: var(--sand);
}

.hero-sub {
  font-size: clamp(0.82rem, 1.8vw, 1rem);
  color: var(--mist);
  letter-spacing: 0.05em;
  line-height: 1.7;
  margin-bottom: 2.8rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.9s 0.8s forwards;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.9s 1.05s forwards;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fadeUp 0.9s 1.4s forwards;
}

.scroll-indicator span {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--mist);
}

.scroll-line {
  width: 1px;
  height: 50px;
  background: var(--sand);
  animation: scrollPulse 2s infinite;
}
