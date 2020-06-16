import "./main.postcss";

import "./images/apple-touch-icon.png";
import "./images/favicon-32x32.png";
import "./images/favicon-16x16.png";
import "./images/site.webmanifest";
import "./images/safari-pinned-tab.svg";
import "./images/favicon.ico";

import Vue from 'vue';
import Page from './components/Page.vue';
import PaddedSection from './components/PaddedSection.vue';
import ImageWithContent from './components/ImageWithContent.vue';
import Modal from './components/Modal.vue';
import ModalInner from './components/ModalInner.vue';

Vue.component('padded-section', PaddedSection);
Vue.component('image-with-content', ImageWithContent);
Vue.component('modal', Modal);
Vue.component('modal-inner', ModalInner);

let root = new Vue({
    el: '#page',
    render: h => h(Page),
    mounted () {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    }
});