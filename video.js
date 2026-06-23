#about {
  background: var(--ink);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.about-photo-wrap {
  position: relative;
}

.about-photo-wrap::before {
  content: '';
  position: absolute;
  top: -16px;
  left: -16px;
  right: 16px;
  bottom: 16px;
  border: 1px solid var(--earth);
  border-radius: 2px;
  z-index: 0;
}

.about-photo {
  width: 100%;
  border-radius: 2px;
  position: relative;
  z-index: 1;
  filter: sepia(12%) contrast(1.05);
  object-fit: cover;
  max-height: 520px;
}

.about-intro {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--mist);
  margin-bottom: 1.5rem;
}

.about-intro strong {
  color: var(--cream);
  font-weight: 600;
}

.about-casual {
  font-size: 1rem;
  font-style: italic;
  color: var(--sand);
  border-left: 2px solid var(--earth);
  padding-left: 1rem;
  margin: 1.5rem 0;
  line-height: 1.6;
}
