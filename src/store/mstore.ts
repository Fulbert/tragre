import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import Store from './index'
import MAPI from 'metromobilite-api'
import { MAPIURLParams, MAPIFeature } from 'metromobilite-api/lib/types'

const M = new MAPI()

interface Features {
  [key: string]: MAPIFeature[]
}

@Module({
  dynamic: true,
  name: 'MStore',
  namespaced: true,
  store: Store
})
export default class MStore extends VuexModule {
  public features: Features = {}

  @Mutation
  public GET_DATA(resource: string, params: MAPIURLParams): void {
    M.getData(resource, params).then(r => {
      console.log(r)
      this.features[resource] = r
    }).catch(e => {
      console.log(e)
    })
  }

  @Action
  public DOWNLOAD_STATIC_DATA(resource: string, params: MAPIURLParams): void {
    this.GET_DATA(resource, params)
  }
}
