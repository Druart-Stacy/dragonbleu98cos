<script setup>
import { cosplays } from '../assets/cosplays.js'

function afficherCosplay(id) {
  console.log(id)
}
</script>

<template>
  <section>
    <h2>Découvrez mes cosplays</h2>

    <div v-for="cosplay in cosplays" :key="cosplay.id">

      <img 
        :src="cosplay.image"
        :alt="cosplay.nom"
        @click="afficherCosplay(cosplay.id)"
      >

      <h3>{{ cosplay.nom }}</h3>

    </div>
  </section>
</template>