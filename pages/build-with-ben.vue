<script setup>
const { data: bwbEpisodes } = useAsyncData('contentData', () => {
  return queryContent('/bwb').find()
})

console.log(bwbEpisodes)
</script>

<template>
  <h1>Build with Ben</h1>
  <ul>
    <li v-for="episode in bwbEpisodes" :key="episode._path">
      <nuxt-link :to="episode._path">{{ episode.title }}</nuxt-link>
    </li>
  </ul>
</template>

<style></style>
