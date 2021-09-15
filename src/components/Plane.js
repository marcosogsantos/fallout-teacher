import styled from 'styled-components'

const Plane = styled.div`
  height: 2vmin;
  width: 14.8vmin;
  transform-style: preserve-3d;
  transform: scale(var(--scale, 2)) rotateX(calc(var(--start-x) * 1deg)) rotateY(calc(var(--start-y) * 1deg)) rotateX(90deg) rotateX(calc(var(--x, 0) * 1deg)) rotateY(calc(var(--y, 0) * 1deg)) rotateZ(calc(var(--z, 0) * 1deg));
  -webkit-animation: spin 2s infinite linear var(--state, paused);
  animation: spin 2s infinite linear var(--state, paused);
` 
export default Plane