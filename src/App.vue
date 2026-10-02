<script setup lang="ts">
import { computed, ref } from 'vue'

import logo from '../public/images/logo-eskatonfest.webp'
import poster from '../public/images/poster-eskatonfest.webp'

import ArtistCard from './components/ArtistCard.vue'

import { artists } from './data/artists.ts'

type DayFilter = 'all' | 1 | 2

const selectedDay = ref<DayFilter>('all')

const filteredArtists = computed(() => {
  if (selectedDay.value === 'all') {
    return artists
  }

  return artists.filter((artist) => artist.day === selectedDay.value)
})
</script>

<template>
  <div class="site">
    <!-- =====================================================
         HERO
    ====================================================== -->

    <header class="hero">
      <img
        class="hero__logo"
        :src="logo"
        alt="Eskatonfest - Goth Dark Symphonic"
      >

      <div class="hero__event-info">
        <p class="hero__date">
          12 — 14 septembre 2027
        </p>

        <p class="hero__location">
          Bretagne · France
        </p>

        <div
          class="hero__divider"
          aria-hidden="true"
        >
          <span class="hero__divider-line"></span>

          <span class="hero__divider-symbol">
            ✦
          </span>

          <span class="hero__divider-line"></span>
        </div>

        <p class="hero__details">
          3 jours · 15 artistes · 3 scènes
        </p>
      </div>

      <a
        class="primary-button"
        href="#"
      >
        Acheter mon billet
      </a>
    </header>


    <main>
      <!-- ===================================================
           AFFICHE
      ==================================================== -->

      <section class="poster-section">
        <img
          class="festival-poster"
          :src="poster"
          alt="Affiche officielle Eskatonfest"
        >
      </section>


      <!-- ===================================================
           PROGRAMME
      ==================================================== -->

      <section
        id="programme"
        class="program-section"
      >
        <div class="program-container">
          <header class="program-header">
            <h1>
              Programme
            </h1>

            <p>
              Line up
            </p>
          </header>


          <!-- Filtres -->

          <div
            class="program-filters"
            aria-label="Filtrer la programmation"
          >
            <button
              type="button"
              class="filter-button"
              :class="{ 'filter-button--active': selectedDay === 'all' }"
              :aria-pressed="selectedDay === 'all'"
              @click="selectedDay = 'all'"
            >
              Tout
            </button>

            <button
              type="button"
              class="filter-button"
              :class="{ 'filter-button--active': selectedDay === 1 }"
              :aria-pressed="selectedDay === 1"
              @click="selectedDay = 1"
            >
              Jour 1
            </button>

            <button
              type="button"
              class="filter-button"
              :class="{ 'filter-button--active': selectedDay === 2 }"
              :aria-pressed="selectedDay === 2"
              @click="selectedDay = 2"
            >
              Jour 2
            </button>
          </div>


          <!-- Artistes -->

          <div class="program-grid">
            <ArtistCard
              v-for="artist in filteredArtists"
              :key="artist.id"
              :artist="artist"
            />
          </div>
        </div>
      </section>
    </main>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer class="footer">
      <div class="footer__socials">
        <a href="#">
          Instagram
        </a>

        <a href="#">
          Facebook
        </a>
      </div>


      <div class="newsletter">
        <h2>
          Newsletter
        </h2>

        <form class="newsletter__form">
          <label
            class="sr-only"
            for="email"
          >
            Adresse e-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="Votre e-mail"
          >

          <button type="submit">
            S'inscrire
          </button>
        </form>
      </div>


      <a href="mailto:contact@eskatonfest.fr">
        Contact
      </a>

      <p>
        ESKATONFEST | Tous droits réservés
      </p>
    </footer>
  </div>
</template>