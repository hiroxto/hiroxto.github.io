import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Footer from './components/Footer';

Vue.use(VeeValidate);
Validator.localize('ja', ja);

Vue.use(BootstrapVue);

library.add(
  faHome,
  faUserAlt,
  faTwitter,
  faGithub,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('page-footer', Footer);
