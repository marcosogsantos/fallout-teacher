(this["webpackJsonppushy-teacher"]=this["webpackJsonppushy-teacher"]||[]).push([[0],{261:function(e,o){},262:function(e,o,n){"use strict";n.r(o);var t,a,r,s,i,c,d,m,l,p,u,v,h=n(0),g=n.n(h),f=n(17),b=n.n(f),x=(n(31),n(26)),j=n(2),y=n(3),C=n.p+"static/media/bg.4355d016.jpg",S=y.a.div(t||(t=Object(j.a)(["\n    min-height: 100vh;\n    max-width: 100vw;\n    max-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    background: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    "])),C),w=y.a.div(a||(a=Object(j.a)(["\n  position: absolute;\n  color: rgb(25, 255, 25);\n  left: 50px;\n  right: 50px;\n  bottom: 50px;\n  max-width: 800px;\n  max-height: 200px;\n  overflow: auto;\n  box-shadow: 2px 2px 0 0px hsl(0, 0%, 0%) , inset 2px 2px 0 0 #000000;\n  padding: 25px;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: .1px;\n  line-height: 1.4;\n  border: solid 3px rgb(25, 255, 25);\n  text-shadow: 2px 2px 0px rgba(0,0,0,1);\n  z-index: 1;\n\n  @media (max-width: 1200px) {\n    font-size: 14px;\n    left: 25px;\n    right: 25px;\n    padding: 10px;\n  }\n\n"]))),z=n(264),O={hljs:{display:"block",overflowX:"hidden",padding:"0.5em",background:"none",color:"#00ff00",fontSize:"10px"},"hljs-name":{color:"#01a3a3",fontWeight:"bold"},"hljs-tag":{color:"#778899"},"hljs-meta":{color:"#778899"},"hljs-subst":{color:"#444"},"hljs-comment":{color:"#888888"},"hljs-keyword":{fontWeight:"bold"},"hljs-attribute":{fontWeight:"bold"},"hljs-selector-tag":{fontWeight:"bold"},"hljs-meta-keyword":{fontWeight:"bold"},"hljs-doctag":{fontWeight:"bold"},"hljs-type":{color:"#4286f4"},"hljs-string":{color:"#4286f4"},"hljs-number":{color:"#4286f4"},"hljs-selector-id":{color:"#4286f4"},"hljs-selector-class":{color:"#4286f4"},"hljs-quote":{color:"#4286f4"},"hljs-template-tag":{color:"#4286f4"},"hljs-deletion":{color:"#4286f4"},"hljs-title":{color:"#4286f4",fontWeight:"bold"},"hljs-section":{color:"#4286f4",fontWeight:"bold"},"hljs-regexp":{color:"#BC6060"},"hljs-symbol":{color:"#BC6060"},"hljs-variable":{color:"#BC6060"},"hljs-template-variable":{color:"#BC6060"},"hljs-link":{color:"#BC6060"},"hljs-selector-attr":{color:"#BC6060"},"hljs-selector-pseudo":{color:"#BC6060"},"hljs-literal":{color:"#62bcbc"},"hljs-built_in":{color:"#25c6c6"},"hljs-bullet":{color:"#25c6c6"},"hljs-code":{color:"#25c6c6"},"hljs-addition":{color:"#25c6c6"},"hljs-meta-string":{color:"#4d99bf"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},q=n(1),N=function(e){return Object(q.jsx)(z.a,{showLineNumbers:!0,wrapLines:!0,wrapLongLines:"pre-wrap",language:"javascript",style:O,children:e.children})},k=y.a.div(r||(r=Object(j.a)(["\n  perspective: 1800px;\n  transform-style: preserve-3d;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=y.a.div(s||(s=Object(j.a)(["\n  height: 2vmin;\n  width: 14.8vmin;\n  transform-style: preserve-3d;\n  transform: scale(var(--scale, 2)) rotateX(calc(var(--start-x) * 1deg)) rotateY(calc(var(--start-y) * 1deg)) rotateX(90deg) rotateX(calc(var(--x, 0) * 1deg)) rotateY(calc(var(--y, 0) * 1deg)) rotateZ(calc(var(--z, 0) * 1deg));\n  -webkit-animation: spin 2s infinite linear var(--state, paused);\n  animation: spin 2s infinite linear var(--state, paused);\n"]))),E=y.a.div(i||(i=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  position: absolute;\n  transform: translateY(-50%);\n\n  @media (max-width: 2200px) {\n    right: -450px;\n  }\n\n  @media (max-width: 1300px) {\n    right: 0;\n    top: 32%;\n  }\n"]))),F=y.a.div(c||(c=Object(j.a)(["\n  div {\n  transition: transform 0.25s;\n  }\n"]))),A=y.a.div(d||(d=Object(j.a)(["\n\n  height: calc(var(--depth) * 1vmin);\n  width: calc(var(--width) * 1vmin);\n  transform-style: preserve-3d;\n  position: absolute;\n  font-size: 1rem;\n  transform: translate3d(0, 0, 5vmin);\n\n  --height: 28;\n  --width: 40.8;\n  --depth: 0.2;\n  top: 50%;\n  left: 50%;\n  \n  transform: translate3d(-50%, calc(((var(--exploded) * 5) + 1.01) * 1vmin), 0); \n\n  div {\n    background-color: var(--primary);\n    background-size: cover;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box; \n  }\n\n  &>div:nth-of-type(1) {\n    height: calc(var(--height) * 1vmin);\n    width: 100%;\n    transform-origin: 50% 50%;\n    transform: rotateX(-90deg);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc((var(--depth) / 2) * 1vmin));\n  }\n\n  &>div:nth-of-type(2) {\n    height: calc(var(--height) * 1vmin);\n    width: 100%;\n    transform-origin: 50% 50%;\n    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(180deg) translate3d(0, 0, calc((var(--depth) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(50, 255, 50,.1);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    filter: drop-shadow(16px 16px 20px rgb(0, 255, 98));\n    box-shadow: -5px 15px 40px #04ff0077 ;\n  }\n\n  &>div:nth-of-type(3) {\n    height: calc(var(--height) * 1vmin);\n    width: calc(var(--depth) * 1vmin);\n    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0, 0, calc((var(--width) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-image: linear-gradient(var(--tertiary) 80.1%, var(--secondary) 80.1%);\n  border: solid 1px rgba(25, 255, 25, .5);\n  }\n\n  &>div:nth-of-type(4) {\n    height: calc(var(--height) * 1vmin);\n    width: calc(var(--depth) * 1vmin);\n    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0, calc((var(--width) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-image: linear-gradient(var(--tertiary) 80.1%, var(--secondary) 80.1%);\n  border: solid 1px rgba(25, 255, 25, .5);\n  }\n\n  &>div:nth-of-type(5) {\n    height: calc(var(--depth) * 1vmin);\n    width: calc(var(--width) * 1vmin);\n    transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-image: linear-gradient(var(--tertiary) 80.1%, var(--secondary) 80.1%);\n  border: solid 1px rgba(25, 255, 25, .3);\n  }\n\n  &>div:nth-of-type(6) {\n    height: calc(var(--depth) * 1vmin);\n    width: calc(var(--width) * 1vmin);\n    transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / 2) * -1vmin)) rotateX(180deg);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: var(--secondary);\n    border: solid 1px rgba(25, 255, 25, .2);\n  }\n"]))),R=y.a.div(m||(m=Object(j.a)(["\n\nheight: calc(var(--depth) * 1vmin);\n  width: calc(var(--width) * 1vmin);\n  transform-style: preserve-3d;\n  position: absolute;\n  font-size: 1rem;\n  transform: translate3d(0, 0, 5vmin);\n\n  --height: 28;\n  --width: 40.8;\n  --depth: 0.2;\n  top: 50%;\n  left: 50%;\n  \n  transform: translate3d(-50%, 1.01vmin, 0);\n\n  div {\n  background-color: var(--primary);\n  background-size: cover;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; \n}\n\n  &>div:nth-of-type(1) {\n    height: calc(var(--height) * 1vmin);\n    width: 100%;\n    transform-origin: 50% 50%;\n    transform: rotateX(-90deg);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc((var(--depth) / 2) * 1vmin));\n  }\n\n  &>div:nth-of-type(2) {\n    background-color: rgba(50, 255, 50,.1);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  filter: drop-shadow(16px 16px 20px rgb(0, 255, 98));\n  box-shadow: -5px 15px 40px #04ff0077 ;\n  }\n\n  &>div:nth-of-type(3) {\n    height: calc(var(--height) * 1vmin);\n    width: calc(var(--depth) * 1vmin);\n    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0, 0, calc((var(--width) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  &>div:nth-of-type(4) {\n    height: calc(var(--height) * 1vmin);\n    width: calc(var(--depth) * 1vmin);\n    transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0, calc((var(--width) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  &>div:nth-of-type(5) {\n    height: calc(var(--depth) * 1vmin);\n    width: calc(var(--width) * 1vmin);\n    transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / 2) * 1vmin));\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  &>div:nth-of-type(6) {\n    height: calc(var(--depth) * 1vmin);\n    width: calc(var(--width) * 1vmin);\n    transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / 2) * -1vmin)) rotateX(180deg);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n"]))),B=y.a.div(l||(l=Object(j.a)([""]))),L=y.a.div(p||(p=Object(j.a)(["\n  background-color:    var(--base) !important;\n  display:             flex;\n  flex:                1 1 100%;\n  height:              100px;\n  width:               100px;\n  overflow:            hidden;\n  position:            relative;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%) scaleX(-1);\n  border-radius: 100%;\n  border: 4px solid rgb(0, 253, 55);\n  box-shadow: rgb(50, 255, 50) 0px 0px var(--shadowAlpha_2),  rgb(50, 255, 50) 0px 0px var(--shadowAlpha_2);;\n  opacity:             var(--showLogo);\n\n  @media (max-width: 1200px) {\n    height:              50px;\n    width:               50px;\n  }\n\n  img {\n    filter:              grayscale(100%) contrast(1) blur(var(--blur));\n    flex:                1 0 100%;\n    height:              100%;\n    max-width:           100%;\n    mix-blend-mode:      var(--bg-blend);\n    object-fit:          cover;\n    opacity:             var(--opacity);\n    position:            relative;\n    width:               100%;\n  }\n\n  &::before {\n    background-color:    var(--foreground) !important;\n    bottom:              0;\n    content:             '';\n    height:              100%;\n    left:                0;\n    mix-blend-mode:      var(--fg-blend);\n    position:            absolute;\n    right:               0;\n    top:                 0;\n    width:               100%;\n    z-index:             1;\n  }"]))),D=function(){return Object(q.jsx)(L,{children:Object(q.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"})})},J=y.a.div(u||(u=Object(j.a)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translateY(-50%);\n  padding:  22px;\n\n  @media (max-width: 820px) {\n    padding:  5px;\n    .language-javascript {\n      font-size: 5px !important;\n    }\n  }\n"]))),P=y.a.div(v||(v=Object(j.a)(["\n  position: relative;\n  top: 50%;\n  height: 100%;\n  transform: translateY(-50%);\n  padding: 30px;\n  border: solid 1px rgba(25, 255, 25,.2);\n  border-radius: 2em;\n\n  @media (max-width: 1200px) {\n    padding: 10px;\n  }\n"]))),X=function e(o){var n;if(document.getElementById("transform")){var t=!1,a={x:0,y:9};function r(e){e.preventDefault();var n=e.wheelDelta||-e.detail;o.scale+=n>0?.1:-.1,document.documentElement.style.setProperty("--scale",o.scale)}document.addEventListener("mousewheel",r,!1),document.addEventListener("DOMMouseScroll",r,!1),document.addEventListener("mousedown",(function(e){e.preventDefault(),t=!0,a={x:e.clientX,y:e.clientY}}),!1),document.addEventListener("mousemove",(function(e){if(t){if(e.clientX<a.x){var n=o.z>=360?0:o.z+2;document.documentElement.style.setProperty("--z",n)}else{n=o.z<=0?360:o.z-2;document.documentElement.style.setProperty("--z",n)}o.z=n}a={x:e.clientX,y:e.clientY}}),!1),document.addEventListener("mouseup",(function(){t=!1}),!1);n=setInterval((function(){!function(){if(!t){var e=o.z>=360?0:o.z+.2;document.documentElement.style.setProperty("--z",e),o.z=e}o.z>60&&o.z<243?o.showLogo=.8:o.showLogo=0,document.documentElement.style.setProperty("--showLogo",o.showLogo)}()}),25)}else setTimeout((function(){e()}),100);return n},T=function(e){e.reverseUpdateLogoBright?e.shadowAlpha_2<80?(e.shadowAlpha_2=e.shadowAlpha_2+.1,document.documentElement.style.setProperty("--shadowAlpha_2",e.shadowAlpha_2+"px")):e.reverseUpdateLogoBright=!1:e.shadowAlpha_2>30?(e.shadowAlpha_2=e.shadowAlpha_2-.1,document.documentElement.style.setProperty("--shadowAlpha_2",e.shadowAlpha_2+"px")):e.reverseUpdateLogoBright=!0},W=function(e){var o={x:0,y:0,z:0,scale:2,exploded:0,shadowAlpha_1:0,shadowAlpha_2:0,showLogo:.7,reverseUpdateLogoBright:!1};return Object(h.useEffect)((function(){document.documentElement.style.setProperty("--scale",o.scale),document.documentElement.style.setProperty("--exploded",o.exploded);var e=X(o),n=setInterval((function(){T(o)}),10);return function(){clearInterval(n),clearInterval(e)}}),[]),Object(q.jsx)(E,{children:Object(q.jsx)(k,{children:Object(q.jsx)(I,{id:"transform",children:Object(q.jsxs)(F,{children:[Object(q.jsxs)(A,{children:[Object(q.jsx)(B,{children:Object(q.jsx)(J,{children:Object(q.jsx)(P,{children:Object(q.jsx)(N,{children:e.getRandomTip?e.getRandomTip.codeString:"Loading..."})})})}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{})]}),Object(q.jsxs)(R,{children:[Object(q.jsx)(B,{children:Object(q.jsx)(D,{})}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{}),Object(q.jsx)(B,{})]})]})})})})},H=[{textContent:'N\xfameros em JavaScript s\xe3o "valores de precis\xe3o dupla no formato IEEE 754", de acordo com a especifica\xe7\xe3o. Isto tem algumas consequ\xeancias interessantes. N\xe3o existe essa coisa de inteiro em JavaScript, ent\xe3o voc\xea deve ser um pouco cuidadoso com seus c\xe1lculos se voc\xea est\xe1 acostumado a matem\xe1tica em C ou Java.',codeString:"> 0.1 + 0.2 == 0.30000000000000004\ntrue"},{textContent:"Os operadores num\xe9ricos padr\xf5es s\xe3o suportados, incluindo adi\xe7\xe3o, subtra\xe7\xe3o, m\xf3dulo (ou resto) aritm\xe9tico e assim por diante. H\xe1 tamb\xe9m um objeto embutido que eu esqueci de mencionar mais cedo chamado Math para manipular fun\xe7\xf5es e constantes matem\xe1ticas mais avan\xe7adas",codeString:"Math.sin(3.5);\nvar d = Math.PI * r * r;"},{textContent:"Voc\xea pode converter uma string em um inteiro usando a fun\xe7\xe3o embutida parseInt(). Ela tem um segundo par\xe2metro opcional para a base da convers\xe3o, par\xe2metro esse que voc\xea deveria sempre prover:",codeString:'> parseInt("123", 10)\n123'},{textContent:"Se voc\xea quiser converter um n\xfamero bin\xe1rio em um inteiro, basta mudar a base",codeString:'> parseInt("11", 2)\n3'},{textContent:"Voc\xea tamb\xe9m pode usar o operador un\xe1rio + para converter valores em n\xfameros",codeString:'> + "42"\n42'},{textContent:'Um valor especial chamado NaN (sigla de "Not a Number ou N\xe3o \xe9 N\xfamero") \xe9 retornado se a string n\xe3o \xe9 um valor num\xe9rico',codeString:'> parseInt("hello", 10)\nNaN'},{textContent:"NaN \xe9 t\xf3xico: Se voc\xea prov\xea-lo como uma entrada para qualquer opera\xe7\xe3o matem\xe1tica o resultado tamb\xe9m ser\xe1 NaN",codeString:"> NaN + 5\nNaN"},{textContent:"Voc\xea pode testar se \xe9 NaN usando a fun\xe7\xe3o embutida isNaN()",codeString:"> isNaN(NaN)\ntrue"},{textContent:"JavaScript tamb\xe9m tem os valores especiais Infinity e -Infinity",codeString:"> 1 / 0\nInfinity\n> -1 / 0\n-Infinity"},{textContent:"Voc\xea pode testar se o valor \xe9 Infinity, -Infinity e NaN usando a fun\xe7\xe3o embutida isFinite():",codeString:"> isFinite(1/0)\nfalse\n> isFinite(-Infinite)\nfalse\n> isFinite(NaN)\nfalse"},{textContent:"Essa \xe9 nossa primeira pincelada com objetos JavaScript! Eu mencionei que strings tamb\xe9m s\xe3o objetos? De modo que elas t\xeam m\xe9todos",codeString:'> "hello".charAt(0)\nh\n> "hello, world".replace("hello", "goodbye")\ngoodbye, world\n> "hello".toUpperCase()\nHELLO'},{textContent:"No JavaScript h\xe1 distin\xe7\xe3o entre null, que \xe9 um objeto do tipo 'object' para indicar deliberadamente uma aus\xeancia de valor, do undefined, que \xe9 um objeto do tipo 'undefined' para indicar um valor n\xe3o inicializado \u2014 isto \xe9, que um valor n\xe3o foi atribu\xeddo ainda. Vamos falar sobre vari\xe1veis depois, mas em JavaScript \xe9 poss\xedvel declarar uma vari\xe1vel sem atribuir um valor para a mesma. Se voc\xea fizer isso, a vari\xe1vel ser\xe1 do tipo undefined.",codeString:"> undefined === null\nfalse\n> undefined == null\ntrue"},{textContent:'JavaScript tem um tipo boolean, ao qual s\xe3o poss\xedveis os valores true e false (ambos s\xe3o palavras-chave). Qualquer valor pode ser convertido em um boolean, de acordo com as seguintes regras:\n        1) false, 0, a string vazia(""), NaN, null, e undefined todos tornam-se false\n        2) todos os outros valores tornam-se true',codeString:'> Boolean("")\nfalse\n> Boolean(234)\ntrue'},{textContent:"Uma diferen\xe7a importante de outras linguagens como Java \xe9 que em JavaScript, blocos n\xe3o tem escopo; somente fun\xe7\xf5es tem escopo. De modo que se uma vari\xe1vel \xe9 definida usando var numa instru\xe7\xe3o composta (por exemplo dentro de uma estrutura de controle if), ela ser\xe1 vis\xedvel por toda a fun\xe7\xe3o.",codeString:"404"},{textContent:"A defini\xe7\xe3o de vari\xe1veis usando o let foi introduzida no ECMAScript 6. O let permite escopo de bloco, ou seja, \xe9 poss\xedvel definir uma vari\xe1vel em um bloco if, e esta vari\xe1vel ter escopo limitado ao bloco if- por exemplo.",codeString:"404"},{textContent:"Operadores num\xe9ricos de JavaScript s\xe3o +, -, *, / e % - que \xe9 o operador resto. Valores s\xe3o atribu\xeddos usando =, e temos tamb\xe9m as instru\xe7\xf5es de atribui\xe7\xe3o compostas, como += e -=. Essas s\xe3o o mesmo que x = x operador y.",codeString:"x += 5\nx = x + 5"},{textContent:"Voc\xea pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.",codeString:"404"},{textContent:"O operador + tamb\xe9m faz concatena\xe7\xe3o de string:",codeString:'> "hello" + " world"\nhello world'},{textContent:"Se voc\xea adicionar uma string a uma n\xfamero (ou outro valor) tudo ser\xe1 convertido em uma string primeiro. Isso talvez seja uma pegadinha para voc\xea:",codeString:'> "3" + 4 + 5\n345\n> 3 + 4 + "5"\n75'},{textContent:"Compara\xe7\xf5es em JavaScript podem ser feitas usando <, >, <= e >=. Isso funciona tanto para strings como para n\xfameros. A igualdade \xe9 um pouco menos simples. O operador igual-duplo faz a coers\xe3o de tipo se voc\xea colocar tipos diferentes, algumas vezes com resultados interessantes:",codeString:"> 1 === true\nfalse\n> true === true\ntrue"},{textContent:"Temos tamb\xe9m os operadores != e !== .",codeString:"404"},{textContent:"JavaScript tem um conjunto de estruturas de controle similar \xe0 outras linguagens na fam\xedlia do C. Instru\xe7\xf5es condicionais s\xe3o suportadas pelo if e else; voc\xea pode encade\xe1-los se quiser:",codeString:'var name = "kittens";\nif (name == "puppies") {\n    name += "!";\n} else if (name == "kittens") {\n    name += "!!";\n} else {\n    name = "!" + name;\n}\nname == "kittens!!"'},{textContent:"JavaScript tem as estruturas de repeti\xe7\xe3o com os la\xe7os while e do-while. O primeiro \xe9 bom para repeti\xe7\xf5es b\xe1sicas; o segundo \xe9 para os casos em que voc\xea queira que o corpo da repeti\xe7\xe3o seja executado pelo menos uma vez:",codeString:"while (true) {\n  // an infinite loop!\n}\n\nvar input;\ndo {\n  input = get_input();\n} while (inputIsNotValid(input))"},{textContent:"O la\xe7o for do JavaScript \xe9 o mesmo que no C e Java: ele lhe permite prover as informa\xe7\xf5es para o seu la\xe7o em uma \xfanica linha.",codeString:"for (var i = 0; i < 5; i++) {\n  // Will execute 5 times\n}"},{textContent:"Os operadores && e ||  usam a l\xf3gica de curto-circuito, o que quer dizer que, o segundo operando ser executado depender\xe1 do primeiro operando. Isso \xe9 \xfatil para checagem de objetos null antes de acessar seus atributos",codeString:"var name = o && o.getName();"},{textContent:"Configura\xe7\xe3o de valores-padr\xf5es",codeString:'var name = otherName || "default";'},{textContent:"JavaScript tem um operador tern\xe1rio para express\xf5es condicionais:",codeString:'var allowed = (age > 18) ? "yes" : "no";'},{textContent:"A instru\xe7\xe3o switch pode ser usada para m\xfaltiplas ramifica\xe7\xf5es baseadas em um n\xfamero ou uma string:",codeString:"switch(action) {\n    case 'draw':\n        drawit();\n        break;\n    case 'eat':\n        eatit();\n        break;\n    default:\n        donothing();\n}"},{textContent:'Se voc\xea n\xe3o adicionar a instru\xe7\xe3o break, a execu\xe7\xe3o ir\xe1 "cair" no pr\xf3ximo n\xedvel. Isso \xe9 algo que raramente vai querer fazer \u2014 de fato vale mais a pena colocar um coment\xe1rio especificando essa "queda" para o pr\xf3ximo n\xedvel, pois isso o ajudar\xe1 na hora de fazer a depura\xe7\xe3o de seu c\xf3digo:',codeString:"switch(a) {\n    case 1: // queda\n    case 2:\n        eatit();\n        break;\n    default:\n        donothing();\n}"},{textContent:"A cl\xe1usula default \xe9 opcional. Se quiser, pode colocar express\xf5es tanto no switch como nos cases; Compara\xe7\xf5es acontecem entre os dois usando o operador ===:",codeString:"switch(1 + 3) {\n    case 2 + 2:\n        yay();\n        break;\n    default:\n        neverhappens();\n}"},{textContent:"Objetos JavaScript s\xe3o simplesmente cole\xe7\xf5es de pares nome-valor. Como tal, eles s\xe3o similares \xe0: Dicion\xe1rios em Python, Hashes em Perl e Ruby, Hash tables em C e C++, HashMaps em Java, Vetores associativos em PHP",codeString:"var obj = {};"},{textContent:"H\xe1 basicamente duas formas de criar um objeto vazio. Elas s\xe3o semanticamente equivalentes; a segunda forma \xe9 chamada de sintaxe de objeto literal e \xe9 mais conveniente. Essa sintaxe \xe9 tamb\xe9m o cora\xe7\xe3o do formato JSON e deveria ser sempre preferida.",codeString:"var obj = new Object();\nvar obj = {};"},{textContent:"Uma vez criada, as propriedades de um objeto podem novamente ser acessadas de uma das seguintes formas",codeString:'obj.name = "Simon";\nvar name = obj.name;\n        \nobj["name"] = "Simon";\nvar name = obj["name"];'},{textContent:"Estas tamb\xe9m s\xe3o sem\xe2nticamente equivalentes. A segunda forma tem a vantagem de que o valor da chave \xe9 passado atrav\xe9s de uma string, que pode ser calculada em tempo de execu\xe7\xe3o, muito embora esse m\xe9todo previna o uso de alguns mecanismos tais como a otimiza\xe7\xe3o e a minifica\xe7\xe3o. Outra vantagem \xe9 a possibilidade de se atribuir palavras-reservadas aos nomes das propriedades:",codeString:'obj.for = "Simon"; // Erro de sintaxe, pois \'for\' \xe9 uma palavra reservada\n        obj["for"] = "Simon"; // Funciona bem'},{textContent:"A sintaxe de objeto literal pode ser usada para inicializar completamente um objeto",codeString:'var obj = {\n    name: "Carrot",\n    "for": "Max",\n    details: {\n        color: "orange",\n        size: 12\n    }\n}'},{textContent:"O acesso aos atributos dos objetos podem ser encadeados:",codeString:'> obj.details.color\norange\n> obj["details"]["size"]\n12'},{textContent:"Note que array.length n\xe3o \xe9 necessariamente o n\xfamero de itens em um vetor. Considere o seguinte: o tamanho de um vetor \xe9 o maior \xedndice mais 1.",codeString:'> var a = ["dog", "cat", "hen"];\n> a[100] = "fox";\n> a.length\n101'},{textContent:"Se voc\xea fizer refer\xeancia a um \xedndice de vetor inexistente, obter\xe1 um undefined",codeString:"> typeof a[90]\nundefined"},{textContent:"Voc\xea pode iterar sobre um vetor da seguinte forma: Isso \xe9 um pouco ineficaz visto que voc\xea est\xe1 procurando a propriedade length uma vez a cada itera\xe7\xe3o.",codeString:"for (var i = 0; i < a.length; i++) {\n    // Fa\xe7a algo com a[i]\n}"},{textContent:"Uma melhor pr\xe1tica de itera\xe7\xe3o sobre os vetores \xe9 procurar a propriedade propriedade apenas uma vez ",codeString:"for (var i = 0, len = a.length; i < len; i++) {\n    // Fa\xe7a algo com a[i]\n}"},{textContent:'A forma mais elegante de itera\xe7\xe3o sobre vetores. Aqui n\xf3s estamos declarando duas vari\xe1veis. A atribui\xe7\xe3o na parte do meio do la\xe7o for \xe9 tamb\xe9m testada \u2014 se for verdadeira, o la\xe7o continuar\xe1. Uma vez que o i \xe9 incrementado toda vez, os itens do array ser\xe3o atribu\xeddos a vari\xe1vel item sequencialmente. A itera\xe7\xe3o \xe9 finalizada quando item "falsy" \xe9 encontrado (tal como o undefined, false ou zero).',codeString:'for (var i = 0, item; item = a[i++];) {\n    // Fa\xe7a algo com item\n}\n//Note que esse truque s\xf3 deveria ser usado em vetores que voc\xea sabe n\xe3o conter valores "falsy" (vetores de objeto ou n\xf3s DOM por exemplo). Se voc\xea iterar sobre dados num\xe9ricos que possam ter o 0 ou sobre dados string que possam ter uma string vazia, voc\xea deveria usar uma outra forma de itera\xe7\xe3o.\n'},{textContent:"Uma outra forma de iterar \xe9 usar o la\xe7o for...in. Note que se algu\xe9m adicionou novas propriedades ao Array.prototype, elas tamb\xe9m podem ser iteradas usando este la\xe7o:",codeString:"for (var i in a) {\n    // Do something with a[i]\n}"},{textContent:"Retorna uma string com o toString()de cada elemento separado por v\xedrgulas.",codeString:"a.toString()"},{textContent:"Retorna um novo vetor com os itens adicionados nele.",codeString:"a.concat(item[, itemN])"},{textContent:"Converte um vetor em uma string com os valores do vetor separados pelo valor do par\xe2metro sep",codeString:"a.join(sep)"},{textContent:"Remove e retorna o \xfaltimo item.",codeString:"a.pop()"},{textContent:"Reverte o vetor.",codeString:"a.reverse()"},{textContent:"Remove e retorna o primeiro item.",codeString:"a.shift()"},{textContent:"Retorna um sub-vetor.",codeString:"a.slice(start, end)"},{textContent:"Prover uma fun\xe7\xe3o opcional para fazer a compara\xe7\xe3o.",codeString:"a.sort([cmpfn])"},{textContent:"O m\xe9todo splice() altera o conte\xfado de uma lista, adicionando novos elementos enquanto remove elementos antigos.",codeString:'//remove 1 elemento a partir do \xedndice 2, e insere "trumpet"\nremoved = myFish.splice(2, 1, "trumpet");\n//myFish \xe9 ["angel", "clown", "trumpet", "surgeon"]\n//removed \xe9 ["drum"]\n\n//remove 2 elementos a partir do \xedndice 0, e insere "parrot", "anemone" e "blue"\nremoved = myFish.splice(0, 2, "parrot", "anemone", "blue");\n//myFish \xe9 ["parrot", "anemone", "blue", "trumpet", "surgeon"]\n//removed \xe9 ["angel", "clown"]\n\n        '},{textContent:"Acrescenta itens ao come\xe7o do vetor.",codeString:"a.unshift([item])"},{textContent:"Isso destaca um problema potencial com fun\xe7\xf5es an\xf4nimas: Como cham\xe1-las recursivamente se elas n\xe3o tem um nome? JavaScript lhe permite nomear express\xf5es de fun\xe7\xe3o para isso. Voc\xea pode usar EFIIs nomeadas (Express\xf5es Funcionais Imediatamente Invocadas)",codeString:"var charsInBody = (function counter(elm) {\n    if (elm.nodeType == 3) { // TEXT_NODE\n        return elm.nodeValue.length;\n    }\n    var count = 0;\n    for (var i = 0, child; child = elm.childNodes[i]; i++) {\n        count += counter(child);\n    }\n    return count;\n})(document.body);"},{textContent:"A good practice when choosing the declaration type of variables is to prefer const, otherwise use let. Without knowing what happens inside myBigFunction(), you can conclude that result variable is assigned once and after the declaration is read-only.",codeString:"function myBigFunction(param1, param2) {\n    /* lots of stuff... */\n\n    const result = otherFunction(param1);\n\n    /* lots of stuff... */\n    return something;\n}"},{textContent:"The variables live within the scope they\u2019ve been created. A code block and a function body create a scope for const and let variables.",codeString:"function binarySearch(array, search) {\n    let left = 0;\n    let right = array.length - 1;\n\n    while(left <= right) {\n        const middle = Math.floor((left + right) / 2);\n        const middleItem = array[middle];\n        if (middleItem === search) {\n        return true; \n        }\n        if (middleItem < search) {\n        left = middle + 1; \n        } else {\n        right = middle - 1; \n        }\n    }\n    return false;\n}"},{textContent:"Try to declare the variable as close as possible to the usage place. This way, you won\u2019t have to guess: Hey, I see the variable declared here, but\u2026 where is it used?",codeString:"function myBigFunction(param1, param2) {\n    let something;\n            \n    /* \n    * calculate something... \n    */\n            \n    const result = otherFunction(param1);\n    return something + result;\n}"},{textContent:"Toda vez que criamos um objeto, criamos duas marcas de nova fun\xe7\xe3o dentro dele \u2014 n\xe3o seria melhor se este c\xf3digo fosse compartilhado?  A resposta \xe9 sim.",codeString:"function Person(first, last) {\n    this.first = first;\n    this.last = last;\n}\nPerson.prototype.fullName = function() {\n    return this.first + ' ' + this.last;\n}\nPerson.prototype.fullNameReversed = function() {\n    return this.last + ', ' + this.first;\n}"},{textContent:"Esta \xe9 uma ferramenta incrivelmente poderosa. JavaScript permite a voc\xea modificar algo prototipado em qualquer momento no seu programa. Isto significa que voc\xea pode adicionar m\xe9todos extras para objetos pr\xe9-existentes, em tempo de execu\xe7\xe3o:",codeString:'> s = new Person("Simon", "Willison");\n> s.firstNameCaps();\nTypeError on line 1: s.firstNameCaps is not a function\n> Person.prototype.firstNameCaps = function() {\n    return this.first.toUpperCase()\n}\n> s.firstNameCaps()\nSIMON'},{textContent:"Clausuras (Closures). Isto nos leva a uma das abstra\xe7\xf5es mais poderosas que JavaScript tem a oferecer \u2014 mas tamb\xe9m a mais potencionalmente confusa.",codeString:"function makeAdder(a) {\n  return function(b) {\n    return a + b;\n  };\n}\nvar x = makeAdder(5);\nvar y = makeAdder(20);\nx(6); // ?\ny(7); // ?"}],_=[{textContent:"A maneira mais simples de definir um componente \xe9 escrever uma fun\xe7\xe3o JavaScript.",codeString:"function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}"},{textContent:"Todos os componentes React tem que agir como fun\xe7\xf5es puras em rela\xe7\xe3o ao seus props. Tais fun\xe7\xf5es s\xe3o chamadas \u201cpuras\u201d porque elas n\xe3o tentam alterar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas.",codeString:"//Fun\xe7\xe3o pura\nfunction sum(a, b) {\n    return a + b;\n}  \n//Fun\xe7\xe3o impura\nfunction withdraw(account, amount) {\n  account.total -= amount;\n}\n          "},{textContent:"useEffect accepts two parameters. The first one is a callback which runs after render, much like in componentDidMount. The second parameter is the effect dependency array. If you want to run it on mount and unmount only, pass an empty array []. To clean up, return the callback in useEffect:",codeString:"useEffect(\n  () => {\n    document.addEventListener(\u201cclick\u201d, someFunc);\n\n    return () => {\n      document.removeEventListener(\u201cclick\u201d, someFunc);\n    };\n  },\n  []\n);"},{textContent:"You can also use useState instead of this.state in class components. ",codeString:"this.state = {\ncounter: 0,\nusersList: [],\n//\nconst [counter, setCounter] = useState(0); \nconst [usersList, setUsersList] = useState([]);\n}"},{title:"React.Component: Vis\xe3o Geral",textContent:"React permite definirmos componentes como classes (class components) ou como fun\xe7\xf5es. Componentes definidos como classes possuem mais funcionalidades que ser\xe3o detalhadas nesta p\xe1gina. Para definir um class component, a classe precisa estender React.Component:",codeString:"class Welcome extends React.Component {\n  render() {\n    return <h1>Ol\xe1, {this.props.name}</h1>;\n  }\n}"},{title:"React.Component: Vis\xe3o Geral",textContent:"O \xfanico m\xe9todo que voc\xea deve definir em uma subclasse de React.Component \xe9 chamado render(). Todos os outros m\xe9todos descritos nesta p\xe1gina s\xe3o opcionais.",codeString:"class Welcome extends React.Component {\n  render() {\n    return <h1>Ol\xe1, {this.props.name}</h1>;\n  }\n}"},{title:"React.Component: Vis\xe3o Geral",textContent:"N\xf3s somos fortemente contra a cria\xe7\xe3o de seus pr\xf3prios componentes base. Em componentes React, o reuso do c\xf3digo \xe9 obtido primariamente atrav\xe9s de composi\xe7\xe3o ao inv\xe9s de heran\xe7a.",codeString:"class Welcome extends React.Component {\n  render() {\n    return <h1>Ol\xe1, {this.props.name}</h1>;\n  }\n}"},{title:"React.Composi\xe7\xe3o vs Heran\xe7a",textContent:"O React tem um poderoso modelo de composi\xe7\xe3o, e por isso recomendamos o uso de composi\xe7\xe3o ao inv\xe9s de heran\xe7a para reutilizar c\xf3digo entre componentes.",codeString:"404"},{title:"React.Composi\xe7\xe3o vs Heran\xe7a: Conten\xe7\xe3o",textContent:"Alguns componentes n\xe3o tem como saber quem ser\xe3o seus elementos filhos. Isso \xe9 muito comum para componentes como o SideBar ou Dialog que representam \u201ccaixas\u201d gen\xe9ricas. Recomendamos que esses componentes utilizem a prop especial children para passar os elementos filhos diretos para sua respectiva sa\xedda",codeString:"function FancyBorder(props) {\n  return (\n    <div className={'FancyBorder FancyBorder-' + props.color}>\n      {props.children}\n    </div>\n  );\n}"},{title:"React.Composi\xe7\xe3o vs Heran\xe7a: Conten\xe7\xe3o",textContent:"Recomendamos que esses componentes utilizem a prop especial children para passar os elementos filhos diretos para sua respectiva sa\xedda. Isso permite outros componentes passar elementos filhos no pr\xf3prio JSX",codeString:'function WelcomeDialog() {\n  return (\n    <FancyBorder color="blue">\n      <h1 className="Dialog-title">\n        Bem-vindo\n      </h1>\n      <p className="Dialog-message">\n        Obrigado por visitar a nossa espa\xe7onave!\n      </p>\n    </FancyBorder>\n  );\n}'},{title:"React.Composi\xe7\xe3o vs Heran\xe7a: Conten\xe7\xe3o",textContent:"Qualquer conte\xfado dentro da tag JSX do componente <FancyBorder> vai ser passado ao componente FancyBorder como prop children. Desde que FancyBorder renderize a {props.children} dentro de uma <div>, os elementos ser\xe3o renderizados no resultado final.",codeString:'function WelcomeDialog() {\n  return (\n    <FancyBorder color="blue">\n      <h1 className="Dialog-title">\n        Bem-vindo\n      </h1>\n      <p className="Dialog-message">\n        Obrigado por visitar a nossa espa\xe7onave!\n      </p>\n    </FancyBorder>\n  );\n}'},{title:"React.Composi\xe7\xe3o vs Heran\xe7a: Conten\xe7\xe3o",textContent:"Mesmo que seja incomum, as vezes pode ser que voc\xea precise de diversos \u201cburacos\u201d no componente. Em alguns casos voc\xea pode criar sua pr\xf3pria conven\xe7\xe3o e n\xe3o utilizar a prop children",codeString:'function SplitPane(props) {\n  return (\n    <div className="SplitPane">\n      <div className="SplitPane-left">\n        {props.left}\n      </div>\n      <div className="SplitPane-right">\n        {props.right}\n      </div>\n    </div>\n  );\n}'},{title:"React.Composi\xe7\xe3o vs Heran\xe7a: Conten\xe7\xe3o",textContent:"Os elementos React como <Contacts/> e <Chat/> s\xe3o apenas objetos, e voc\xea pode pass\xe1-los como props assim como faz com outros tipos de dados. Esta abordagem pode soar familiar como \u201cslots\u201d em outras bibliotecas, mas no React n\xe3o existe limita\xe7\xf5es sobre o que pode ser passado como props.",codeString:"function App() {\n  return (\n    <SplitPane\n      left={\n        <Contacts />\n      }\n      right={\n        <Chat />\n      } />\n  );\n}"},{title:"React.Composi\xe7\xe3o vs Heran\xe7a: Especializa\xe7\xe3o",textContent:"Algumas vezes acabamos pensando em componentes como \u201ccasos especiais\u201d de outros componentes, por exemplo, podemos dizer que o componente WelcomeDialog \xe9 um caso especial de Dialog. No React, isto tamb\xe9m pode ser obtido atrav\xe9s do uso de composi\xe7\xe3o, um componente espec\xedfico renderiza um componente mais \u201cgen\xe9rico\u201d e o configura com as suas respectivas props",codeString:'function Dialog(props) {\n  return (\n    <FancyBorder color="blue">\n      <h1 className="Dialog-title">\n        {props.title}\n      </h1>\n      <p className="Dialog-message">\n        {props.message}\n      </p>\n    </FancyBorder>\n  );\n}\n\nfunction WelcomeDialog() {\n  return (\n    <Dialog\n      title="Bem-vindo"\n      message="Obrigado por visitar a nossa espa\xe7onave!" />\n  );\n}'},{title:"React.Composi\xe7\xe3o vs Heran\xe7a",textContent:"No Facebook, n\xf3s usamos o React em milhares de componentes, e n\xe3o encontramos nenhum caso que recomendar\xedamos criar componentes utilizando hierarquia de heran\xe7a. O uso de props e composi\xe7\xe3o ir\xe1 te dar toda flexibilidade que voc\xea precisa para customizar o comportamento e apar\xeancia dos componentes, de uma maneira expl\xedcita e segura. Lembre-se de que os componentes podem aceitar um n\xfamero vari\xe1vel de props, incluindo valores primitivos, como int, array, boolean; assim como elementos Reacts e fun\xe7\xf5es. E se voc\xea desejar reutilizar funcionalidades (n\xe3o gr\xe1ficas) entre componentes, sugerimos que voc\xea a extraia em m\xf3dulos JavaScript. Os componentes podem importar essa fun\xe7\xe3o, objeto ou classe sem precisar estender.",codeString:'function WelcomeDialog() {\n  return (\n    <Dialog\n      title="Bem-vindo"\n      message="Obrigado por visitar a nossa espa\xe7onave!" />\n  );\n}'}],M=n(8),V=n.n(M),Y=n(25),U=n.n(Y),G=function(e){for(var o=e.length-1;o>0;o--){var n=new U.a("randomSeed"+o),t=Math.floor(n.quick()*(o+1)),a=[e[t],e[o]];e[o]=a[0],e[t]=a[1]}},Q=function(){var e=Object(h.useState)(""),o=Object(x.a)(e,2),n=o[0],t=o[1];return Object(h.useEffect)((function(){var e=V.a.get("tipIndex"),o=H.concat(_);e?e>=o.length?V.a.set("tipIndex",0):V.a.set("tipIndex",Number(e)+1):V.a.set("tipIndex",0),G(o);var n=o[V.a.get("tipIndex")];t(n)}),[]),Object(q.jsxs)(S,{children:[Object(q.jsx)(w,{children:n?n.textContent:"Loading..."}),Object(q.jsx)(W,{getRandomTip:n})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,265)).then((function(o){var n=o.getCLS,t=o.getFID,a=o.getFCP,r=o.getLCP,s=o.getTTFB;n(e),t(e),a(e),r(e),s(e)}))};b.a.render(Object(q.jsx)(g.a.StrictMode,{children:Object(q.jsx)(Q,{})}),document.getElementById("root")),Z()},31:function(e,o,n){}},[[262,1,2]]]);
//# sourceMappingURL=main.5f8c38a2.chunk.js.map