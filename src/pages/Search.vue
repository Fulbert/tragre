<template>
  <q-page-sticky position="bottom" expand>
    <div class="full-width q-pa-sm">
      <q-select
        v-model="search"
        :options="options"
        @filter="filterOptions"
        use-input
        use-chips
        multiple
        input-debounce="0"
        borderless elevated
        label="What do we do now?"
        class="full-width bg-white text-grey rounded-borders q-px-sm">

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

        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>

      </q-select>
    </div>
  </q-page-sticky>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface SearchOption {
  label: string,
  [key: string]: string
}

@Component
export default class Search extends Vue {
  search: object[] = []
  defaultOptions: SearchOption[] = [{
    label: 'Go back home',
    description: 'All roads go home',
    icon: 'home',
    type: 'spot',
    value: 'home'
  }, {
    label: 'Go to work',
    description: 'Naaaah',
    icon: 'work',
    type: 'spot',
    value: 'work'
  }]


  options: SearchOption[] = this.defaultOptions

  filterOptions (val: string, done: VoidFunction): void {
    const needle: string = val.toLowerCase()
    let filteredOptions: SearchOption[] = []
    if (needle !== '') filteredOptions = this.defaultOptions.filter((o: SearchOption) => o.label.toLowerCase().indexOf(needle) > -1)
    else filteredOptions = this.options
    this.options = filteredOptions
    done()
  }
}
</script>