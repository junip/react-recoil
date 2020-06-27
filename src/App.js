import React from 'react';

import { useRecoilState, useRecoilValue } from 'recoil' 
import backgroundState from './backgroundAtom';
import recoilSelector from './recoilSelector'

function App() {
  
  const [text, setState] = useRecoilState(backgroundState)
  const textLength = useRecoilValue(recoilSelector)
  const changeText = (e) => {
    setState(e.target.value)
  }
  
  return (
    <div className="App">
      <div><input onChange={(e) => changeText(e)}></input> </div>
      <div> { text }</div> 
      <div>{ textLength } </div>
    </div>
  );
}

export default App;
