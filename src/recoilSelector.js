import { selector } from 'recoil';
import backgroundState from './backgroundAtom'

const textLengthState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const text = get(backgroundState);
    return text.length
  },
});

export default textLengthState

 