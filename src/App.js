import React, { useEffect, useState } from 'react';
import MainContainer from './components/MainContainer';
import TextTip from './components/TipText';
import Card3D from './components/Card3D';
import tips from './tips';
import reactTips from './reactTips';
import Cookies from 'js-cookie';
import randomizer from './utils/randomizer';

const App = () => {

  const [getRandomTip, setRandomTip] = useState('');
  useEffect(() => {
    const tipIndex = Cookies.get('tipIndex')
    let allTips = tips.concat(reactTips)
    if (tipIndex) {
      if (tipIndex >= allTips.length) {
        Cookies.set('tipIndex', 0)
      } else {
        Cookies.set('tipIndex', Number(tipIndex) + 1)
      }
    } else {
      Cookies.set('tipIndex', 0)
    };
    randomizer(allTips)
    const randomTip = allTips[Cookies.get('tipIndex')];
    setRandomTip(randomTip)
  }, []);

  return (
    <MainContainer>
      <TextTip>
        {getRandomTip ? getRandomTip.textContent : "Loading..."}
      </TextTip>
      <Card3D getRandomTip={getRandomTip} />
    </MainContainer>
  );
}

export default App;
