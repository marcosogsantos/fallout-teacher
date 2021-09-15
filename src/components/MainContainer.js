import styled from 'styled-components'
import BackgroundImage from '../images/bg.jpg'

const MainContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    `
export default MainContainer