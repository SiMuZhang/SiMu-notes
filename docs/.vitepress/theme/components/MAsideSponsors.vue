<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

const data = [
  {
    items: [{ img: 'https://picture.gptkong.com/20240617/16533d8a65a13b4bf2aa22796efb2d07b0.png' }],
  },
  {
    items: [{ img: 'https://picture.gptkong.com/20240617/1656b97979a9f44a398f40fb7386c68340.png' }],
  },
]
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-link {
  height: 200px;
}
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 200px;
}
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-width: 200px;
}
</style>
