import { useEffect } from 'react';
import CodeViwer from './CodeViewer';
import Scene from './Scene';
import Plane from './Plane';
import CardContainer from './CardContainer';
import CardContent from './CardContent';
import CardFrontFace from './CardFrontFace';
import CardBackFace from './CardBackFace';
import CardSide from './CardSide';
import CardLogo from './CardLogo';
import CodeViewerContentContainer from './CodeViewerContentContainer';
import CodeViewerContent from './CodeViewerContent';
import startPlaneRotation from '../utils/startPlaneRotation';
import updateLogoBright from '../utils/updateLogoBright';

const CONFIG = {
  x: 0,
  y: 0,
  z: 0,
  scale: 2,
  exploded: 0,
  shadowAlpha_1: 0,
  shadowAlpha_2: 0,
  showLogo: 0.7,
  reverseUpdateLogoBright: false
};

const Card3D = (props) => {

  useEffect(() => {
    document.documentElement.style.setProperty("--scale", CONFIG.scale);
    document.documentElement.style.setProperty("--exploded", CONFIG.exploded)

    var planeRotationInterval = startPlaneRotation(CONFIG)
    var updateLogoBrightInterval = setInterval(() => { updateLogoBright(CONFIG) }, 10)
    return () => {
      clearInterval(updateLogoBrightInterval);
      clearInterval(planeRotationInterval);
    }

  }, []);

    return (<CardContainer>
        <Scene>
          <Plane id="transform">
            <CardContent>
              <CardFrontFace>
                <CardSide>
                  <CodeViewerContentContainer>
                    <CodeViewerContent>
                      <CodeViwer>
                        {props.getRandomTip ? props.getRandomTip.codeString : 'Loading...'}
                      </CodeViwer>
                    </CodeViewerContent>
                  </CodeViewerContentContainer>
                </CardSide>
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
              </CardFrontFace>
              <CardBackFace>
                <CardSide >
                  <CardLogo/>
                </CardSide>
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
                <CardSide />
              </CardBackFace>
            </CardContent>
          </Plane>
        </Scene>
        </CardContainer>)
}
export default Card3D;