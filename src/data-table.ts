import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('eonix-data-table')
export class DataTable extends LitElement {
  render() {
    return html`
      <div></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eonix-data-table': DataTable
  }
}
