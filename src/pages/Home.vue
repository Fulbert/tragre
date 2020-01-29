<template>
  <div class="fixed-bottom full-width q-px-sm q-pb-sm">
    <quick-access />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import QuickAccess from '../components/QuickAccess.vue'

@Component({
  components: {
    QuickAccess: QuickAccess
  }
})
export default class Home extends Vue {}
</script>