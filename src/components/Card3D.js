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

const Card3D = (props) => {
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