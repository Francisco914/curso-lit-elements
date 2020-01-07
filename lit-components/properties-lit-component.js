import {LitElement, html} from 'lit-element';

class PropertiesLitComponent extends LitElement {
    static get Properties(){
        return {
            myProp: {
                type: String
            }
        }
    }
    constructor() {
        super();
        this.myProp = 'Francisco';
    }

    render() {
        return html `<p>Este es el component de ${this.myProp}</p>`;
    }
}
customElements.define('properties-lit-component', PropertiesLitComponent);