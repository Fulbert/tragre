<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <l-map style="width: 100%; height: 100%; min-height: 100vh;"
          :zoom="map.zoom"
          :center="map.center">

          <l-tile-layer :url="map.url" />
          <l-control positon="bottom">
            <router-view />
          </l-control>
        </l-map>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import MAPI from '../store/mapi';
import { LMap, LIcon, LTileLayer, LControl, LMarker, LPopup } from 'vue2-leaflet';

@Component({
  components: { 
    LMap,
    LIcon,
    LTileLayer,
    LControl,
    LMarker,
    LPopup
  }
})
export default class Layout extends Vue {
  map = {
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    zoom: 11,
    center: [45.175502642403586, 5.716667175292969]
  };

  M = getModule(MAPI);
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";
</style>
