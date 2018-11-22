import Vue from 'vue';
import Footer from './components/Footer';
import VeeValidate, { Validator } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import BootstrapVue from 'bootstrap-vue';

Vue.use(VeeValidate);
Validator.localize('ja', ja);

Vue.use(BootstrapVue);

Vue.component('page-footer', Footer);
