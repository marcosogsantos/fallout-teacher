import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  height: 100%;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);

  @media (max-width: 2200px) {
    right: -450px;
  }

  @media (max-width: 1300px) {
    right: 0;
    top: 32%;
  }
` 
export default Card