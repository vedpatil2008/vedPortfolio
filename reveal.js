#work {
  background: var(--black);
}

.work-header {
  max-width: 1100px;
  margin: 0 auto 3.5rem;
}

.work-desc {
  color: var(--mist);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 540px;
  margin-top: 1rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.work-card {
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  background: var(--ink);
  cursor: pointer;
  border: 1px solid rgba(110, 71, 59, 0.25);
  text-decoration: none;
  display: block;
  transition: border-color 0.3s, transform 0.4s;
}

.work-card:hover {
  border-color: var(--sand);
  transform: translateY(-4px);
}

.work-card-thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #1a1008;
}

.work-card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
  transition: transform 0.5s ease;
}

.work-card:hover .work-card-thumb img {
  transform: scale(1.06);
}

/* Play icon — visible on hover (desktop) / always visible (mobile) */
.play-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  background: rgba(41, 28, 14, 0.4);
}

.work-card:hover .play-icon {
  opacity: 1;
}

.play-icon svg {
  width: 48px;
  height: 48px;
}

.yt-badge {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: rgba(13, 9, 8, 0.82);
  border: 1px solid rgba(190, 181, 169, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--mist);
  text-transform: uppercase;
}

.work-card-info {
  padding: 1.1rem 1.2rem 1.3rem;
}

.work-card-label {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sand);
  margin-bottom: 0.4rem;
}

.work-card-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  color: var(--cream);
  font-weight: 700;
}

.work-card-desc {
  font-size: 0.8rem;
  color: var(--mist);
  margin-top: 0.35rem;
  line-height: 1.5;
}
