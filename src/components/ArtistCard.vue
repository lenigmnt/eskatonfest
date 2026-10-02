<script setup lang="ts">
import type { Artist } from '../types/artist'

import ornamentCardTop from '../../public/images/ornament-card-top.webp'

defineProps<{
  artist: Artist
}>()
</script>

<template>
  <article class="artist-card">
    <!-- Décoration gothique -->
    <img
      class="artist-card__ornament"
      :src="ornamentCardTop"
      alt=""
      aria-hidden="true"
    >

    <!-- Image artiste -->
    <div class="artist-card__image">
      <img
        v-if="artist.image"
        :src="artist.image"
        :alt="`Photo de ${artist.name}`"
        loading="lazy"
      >

      <span v-else>
        Image artiste
      </span>
    </div>

    <!-- Informations artiste -->
    <div class="artist-card__content">
      <h2 class="artist-card__title">
        {{ artist.name }}
      </h2>

      <p class="artist-card__description">
        {{ artist.description }}
      </p>
    </div>
  </article>
</template>

<style scoped>
/* =========================================================
   ARTIST CARD
   ========================================================= */

.artist-card {
  position: relative;

  /*
    L'ornement est en position absolute.
    On réserve donc de la place au-dessus de la card
    pour éviter qu'il remonte sur les filtres.
  */
  margin-top: 55px;

  overflow: visible;

  background: var(--wine-900);

  border:
    var(--border-050)
    solid
    var(--color-accent-default);

  border-radius: var(--radius-200);
}


/* =========================================================
   ORNEMENT
   ========================================================= */

.artist-card__ornament {
  position: absolute;

  /* Valeurs conservées */
  top: -55px;
  left: 50%;

  /* Valeur conservée */
  width: 115%;
  max-width: none;
  height: auto;

  transform: translateX(-50%);

  z-index: 3;

  pointer-events: none;
  user-select: none;
}


/* =========================================================
   IMAGE
   ========================================================= */

.artist-card__image {
  position: relative;

  aspect-ratio: 16 / 9;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: var(--neutral-a-100);
  color: var(--neutral-a-700);

  border-radius:
    var(--radius-200)
    var(--radius-200)
    0
    0;

  font-family: var(--font-body);
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
}

.artist-card__image img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}


/* Placeholder quand l'artiste n'a pas encore d'image */

.artist-card__image span {
  position: relative;

  z-index: 1;
}


/* =========================================================
   CONTENT
   ========================================================= */

.artist-card__content {
  padding: var(--spacing-400);
}

.artist-card__title {
  margin:
    0
    0
    var(--spacing-300);

  color: var(--color-text-primary);

  font-family: var(--font-body);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-medium);
}

.artist-card__description {
  margin: 0;

  color: var(--color-text-secondary);

  font-family: var(--font-body);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-small);
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 600px) {
  .artist-card {
    /*
      Comme l'ornement remonte davantage en mobile,
      on réserve également davantage d'espace.
    */
    margin-top: 65px;
  }

  .artist-card__ornament {
    /* Valeurs conservées */
    top: -65px;
    width: 116%;
  }
}
</style>