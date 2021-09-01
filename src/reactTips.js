let tips = [
    {
        textContent: `A maneira mais simples de definir um componente é escrever uma função JavaScript.`,
        codeString: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
    },
    {
        textContent: `Todos os componentes React tem que agir como funções puras em relação ao seus props. Tais funções são chamadas “puras” porque elas não tentam alterar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas.`,
        codeString: `//Função pura
function sum(a, b) {
    return a + b;
}  
//Função impura
function withdraw(account, amount) {
  account.total -= amount;
}
          `
    },
    {
        textContent: `useEffect accepts two parameters. The first one is a callback which runs after render, much like in componentDidMount. The second parameter is the effect dependency array. If you want to run it on mount and unmount only, pass an empty array []. To clean up, return the callback in useEffect:`,
        codeString: `useEffect(
  () => {
    document.addEventListener(“click”, someFunc);

    return () => {
      document.removeEventListener(“click”, someFunc);
    };
  },
  []
);`
    },
    {
        textContent: `You can also use useState instead of this.state in class components. `,
        codeString: `this.state = {
counter: 0,
usersList: [],
//
const [counter, setCounter] = useState(0); 
const [usersList, setUsersList] = useState([]);
}`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
]
export default tips