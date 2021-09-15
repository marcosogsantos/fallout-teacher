import React, { useEffect, useState } from 'react';
import MainContainer from './components/MainContainer';
import TextTip from './components/TipText';
import Card3D from './components/Card3D';
import tips from './tips';
import reactTips from './reactTips';
import seedrandom from 'seedrandom';
import Cookies from 'js-cookie';

let randomize = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const myRandomFunction = new seedrandom('randomSeed' + i);
    const randomArrayIndex = Math.floor(myRandomFunction.quick() * (i + 1));
    [array[i], array[randomArrayIndex]] = [array[randomArrayIndex], array[i]];
  }
}

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
    randomize(allTips)
    const randomTip = allTips[Cookies.get('tipIndex')];
    setRandomTip(randomTip)


    var updateRotateZ
    var updateLogoBrightInterval

    document.documentElement.style.setProperty("--scale", CONFIG.scale);
    document.documentElement.style.setProperty("--exploded", CONFIG.exploded)
    var el
    const defineRotatePlane = () => {
      el = document.getElementById('transform')
      if (!el) {
        setTimeout(() => {
          defineRotatePlane()
        }, 100)
      } else {

        var isDown = false
        var mouseStartClickPosition = {
          x: 0,
          y: 9
        }

        function wheel(e) {
          e.preventDefault();
          var delta = e.wheelDelta || -e.detail;
          CONFIG.scale += delta > 0 ? .1 : -.1;
          document.documentElement.style.setProperty("--scale", CONFIG.scale);
        }

        document.addEventListener('mousewheel', wheel, false);
        document.addEventListener('DOMMouseScroll', wheel, false);

        document.addEventListener('mousedown', function (e) {
          e.preventDefault();
          isDown = true;
          mouseStartClickPosition = {
            x: e.clientX,
            y: e.clientY
          };
        }, false);

        document.addEventListener('mousemove', function (e) {

          if (isDown) {
            if (e.clientX < mouseStartClickPosition.x) {
              var newZ = CONFIG.z >= 360 ? 0 : CONFIG.z + 2
              document.documentElement.style.setProperty("--z", newZ)
            } else {
              var newZ = CONFIG.z <= 0 ? 360 : CONFIG.z - 2
              document.documentElement.style.setProperty("--z", newZ)
            }
            CONFIG.z = newZ
          }
          mouseStartClickPosition = {
            x: e.clientX,
            y: e.clientY
          };
        }, false);

        document.addEventListener('mouseup', function () {
          isDown = false;
        }, false);

        const update = () => {
          if (!isDown) {
            var newZ = CONFIG.z >= 360 ? 0 : CONFIG.z + .2
            document.documentElement.style.setProperty("--z", newZ)
            CONFIG.z = newZ
          }
          if (CONFIG.z > 60 && CONFIG.z < 243) {
            CONFIG.showLogo = 0.8
          } else {
            CONFIG.showLogo = 0
          }
          document.documentElement.style.setProperty("--showLogo", CONFIG.showLogo)
        }
        updateRotateZ = setInterval(() => { update() }, 25)
      }
    }
    defineRotatePlane()

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
      clearInterval(updateRotateZ);
    }

  }, []);

  return (
    <MainContainer>
      <TextTip>
        {getRandomTip ? getRandomTip.textContent : "Loading..."}
      </TextTip>
      <Card3D getRandomTip={getRandomTip}/>
    </MainContainer>
  );
}

export default App;
