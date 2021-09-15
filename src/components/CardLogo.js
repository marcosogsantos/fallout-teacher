import styled from 'styled-components'

const CardLogoStyle = styled.div`
  background-color:    var(--base) !important;
  display:             flex;
  flex:                1 1 100%;
  height:              100px;
  width: 100px;
  overflow:            hidden;
  position:            relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%) scaleX(-1);
  border-radius: 100%;
  border: 4px solid rgb(0, 253, 55);
  box-shadow: rgb(50, 255, 50) 0px 0px var(--shadowAlpha_2),  rgb(50, 255, 50) 0px 0px var(--shadowAlpha_2);;
  opacity:             var(--showLogo);

  img {
    filter:              grayscale(100%) contrast(1) blur(var(--blur));
    flex:                1 0 100%;
    height:              100%;
    max-width:           100%;
    mix-blend-mode:      var(--bg-blend);
    object-fit:          cover;
    opacity:             var(--opacity);
    position:            relative;
    width:               100%;
}
&::before {
  background-color:    var(--foreground) !important;
  bottom:              0;
  content:             '';
  height:              100%;
  left:                0;
  mix-blend-mode:      var(--fg-blend);
  position:            absolute;
  right:               0;
  top:                 0;
  width:               100%;
  z-index:             1;
}
  `
const CardLogo = () =>{
  return (
    <CardLogoStyle>
      <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"></img>
    </CardLogoStyle>
  )
}
export default CardLogo