import { atom } from 'recoil';

const backgroundState = atom({
  key: 'backgroundState1', // unique ID (with respect to other atoms/selectors)
  default: 'junip', // default value (aka initial value)
});



export default backgroundState