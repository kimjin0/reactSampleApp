import {observable} from 'mobx';

const switchA = observable({
  isLed: false,
  toggle(value) {
    this.isLed = value;
  },
});

export default switchA;
