import Vue from 'vue'
import MAPI from 'metromobilite-api'

const M = new MAPI()

Vue.prototype.$MAPI = M
