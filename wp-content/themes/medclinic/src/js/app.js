console.log('hello');

import Vue from 'vue';

Vue.config.productionTip = false;

let app = new Vue({
    el: '#header',
    data() {
        return {
            str: 'Hello'
        }
    }
})