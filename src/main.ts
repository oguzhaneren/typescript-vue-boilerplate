// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import './hooks'; // This must be imported before any component
import 'bootstrap';
import * as Bluebird from 'bluebird';
import * as _ from 'lodash';
Promise = Bluebird as any;


import App from '@/components/App.vue';
import router from './router';



Vue.config.productionTip = false;


// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
});

