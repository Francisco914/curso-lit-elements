import {LitElement, html} from 'lit-element';
class FirstLitComponent extends LitElement {
    render() {
        return html `<p>Mi primer componente</p>`
    }
}
customElements.define('first-lit-component',FirstLitComponent);