import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import BootstrapVue from 'bootstrap-vue';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/js/all';

Vue.use(VeeValidate);
Validator.localize('ja', ja);

Vue.use(BootstrapVue);

Vue.component('page-footer', Footer);
