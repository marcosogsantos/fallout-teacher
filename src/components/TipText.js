import styled from 'styled-components'

const TextTip = styled.div`
  position: absolute;
  color: rgb(25, 255, 25);
  left: 50px;
  right: 50px;
  bottom: 50px;
  max-width: 800px;
  max-height: 200px;
  overflow: auto;
  box-shadow: 2px 2px 0 0px hsl(0, 0%, 0%) , inset 2px 2px 0 0 #000000;
  padding: 25px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: .1px;
  line-height: 1.4;
  border: solid 3px rgb(25, 255, 25);
  text-shadow: 2px 2px 0px rgba(0,0,0,1);
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 14px;
    left: 25px;
    right: 25px;
    padding: 10px;
  }

` 
export default TextTip