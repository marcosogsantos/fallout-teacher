import styled from 'styled-components'

const CardBackFace = styled.div`

height: calc(var(--depth) * 1vmin);
  width: calc(var(--width) * 1vmin);
  transform-style: preserve-3d;
  position: absolute;
  font-size: 1rem;
  transform: translate3d(0, 0, 5vmin);

  --height: 28;
  --width: 40.8;
  --depth: 0.2;
  top: 50%;
  left: 50%;
  
  transform: translate3d(-50%, 1.01vmin, 0);

  div {
  background-color: var(--primary);
  background-size: cover;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
}

  &>div:nth-of-type(1) {
    height: calc(var(--height) * 1vmin);
    width: 100%;
    transform-origin: 50% 50%;
    transform: rotateX(-90deg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc((var(--depth) / 2) * 1vmin));
  }

  &>div:nth-of-type(2) {
    background-color: rgba(50, 255, 50,.1);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: drop-shadow(16px 16px 20px rgb(0, 255, 98));
  box-shadow: -5px 15px 40px #04ff0077 ;
  }

  &>div:nth-of-type(3) {
    height: calc(var(--height) * 1vmin);
    width: calc(var(--depth) * 1vmin);
    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0, 0, calc((var(--width) / 2) * 1vmin));
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &>div:nth-of-type(4) {
    height: calc(var(--height) * 1vmin);
    width: calc(var(--depth) * 1vmin);
    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0, calc((var(--width) / 2) * 1vmin));
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &>div:nth-of-type(5) {
    height: calc(var(--depth) * 1vmin);
    width: calc(var(--width) * 1vmin);
    transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / 2) * 1vmin));
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &>div:nth-of-type(6) {
    height: calc(var(--depth) * 1vmin);
    width: calc(var(--width) * 1vmin);
    transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / 2) * -1vmin)) rotateX(180deg);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`
export default CardBackFace