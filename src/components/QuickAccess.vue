<template>
  <q-select
    v-model="choice"
    :options="options"
    use-input fill-input>
    <template v-slot:option="scope">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section avatar>
          <q-icon :name="scope.opt.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label v-html="scope.opt.label" />
          <q-item-label caption>{{ scope.opt.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { QuickAccessOption } from './types'

@Component
export default class QuickAccess extends Vue {
  choice: QuickAccessOption | null = null
  options: QuickAccessOption[] = [{
    label: 'Go home',
    icon: 'home',
    color: 'green'
  }, {
    label: 'Go to work',
    icon: 'work',
    color: 'grey'
  }, {
    label: 'Settings',
    icon: 'settings',
    color: 'grey',
    callback: () => {
      this.$router.push({ name: 'settings' })
    }
  }]

  
}
</script>