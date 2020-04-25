import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

class IntegrationChannels extends connect(store)(PageView) {
  static get properties() {
    return {
      operatoMMS: String
    }
  }

  get context() {
    return {
      title: 'integration channels'
    }
  }

  render() {
    return html`
      <section>
        <h2>Integration Channels</h2>
      </section>
    `
  }

  stateChanged(state) {}
}

customElements.define('mms-integration-channels', IntegrationChannels)
