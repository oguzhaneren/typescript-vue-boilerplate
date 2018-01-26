import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import { Todo } from '@/models';

@Component
export default class HelloWorld extends Vue {
  msg = 'Welcome to Your Vue.js App';
  value: string;
  todos:  Todo[] = [];
  async created () {
 
    const result = await axios.get('http://jsonplaceholder.typicode.com/todos');
    this.todos = result.data;
  }
}
