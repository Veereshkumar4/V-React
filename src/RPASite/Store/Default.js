// store.js
import {observable, action, configure} from 'mobx';

configure({
    computedRequiresReaction: true
})

class CounterStore {
  @observable 
  counter = 0;

  @observable
  names = ['abc', 'cde', 'efg']

  @action
  increment() { this.counter++; }
  
  @action
  decrement() { this.counter--; }
}

export default new CounterStore();

