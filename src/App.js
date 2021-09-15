import React, { useEffect, useState } from 'react';
import MainContainer from './components/MainContainer';
import TextTip from './components/TipText';
import Card3D from './components/Card3D';
import tips from './tips';
import reactTips from './reactTips';
import Cookies from 'js-cookie';
import randomizer from './utils/randomizer';
import startPlaneRotation from './utils/startPlaneRotation';

const App = () => {

  const CONFIG = {
    x: 0,
    y: 0,
    z: 0,
    scale: 2,
    exploded: 0,
    shadowAlpha_1: 0,
    shadowAlpha_2: 0,
    showLogo: 0.7

  };

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

  useEffect(() => {
    document.documentElement.style.setProperty("--scale", CONFIG.scale);
    document.documentElement.style.setProperty("--exploded", CONFIG.exploded)

    var planeRotationInterval = startPlaneRotation(CONFIG)
    var updateLogoBrightInterval

    var reverseUpdateLogoBright = false
    const updateLogoBright = () => {
      if (reverseUpdateLogoBright) {
        if (CONFIG.shadowAlpha_2 < 80) {
          CONFIG.shadowAlpha_2 = CONFIG.shadowAlpha_2 + .1
          document.documentElement.style.setProperty("--shadowAlpha_2", CONFIG.shadowAlpha_2 + "px")
        } else {
          reverseUpdateLogoBright = false
        }
      } else {
        if (CONFIG.shadowAlpha_2 > 30) {
          CONFIG.shadowAlpha_2 = CONFIG.shadowAlpha_2 - .1
          document.documentElement.style.setProperty("--shadowAlpha_2", CONFIG.shadowAlpha_2 + "px")
        } else {
          reverseUpdateLogoBright = true
        }
      }

    }

    updateLogoBrightInterval = setInterval(() => { updateLogoBright() }, 10)
    return () => {
      clearInterval(updateLogoBrightInterval);
      clearInterval(planeRotationInterval);
    }

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
