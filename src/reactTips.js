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
        title: `React.Component: Visão Geral`,
        textContent: `React permite definirmos componentes como classes (class components) ou como funções. Componentes definidos como classes possuem mais funcionalidades que serão detalhadas nesta página. Para definir um class component, a classe precisa estender React.Component:`,
        codeString: `class Welcome extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}`
    },
    {
        title: `React.Component: Visão Geral`,
        textContent: `O único método que você deve definir em uma subclasse de React.Component é chamado render(). Todos os outros métodos descritos nesta página são opcionais.`,
        codeString: `class Welcome extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}`
    },
    {
        title: `React.Component: Visão Geral`,
        textContent: `Nós somos fortemente contra a criação de seus próprios componentes base. Em componentes React, o reuso do código é obtido primariamente através de composição ao invés de herança.`,
        codeString: `class Welcome extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}`
    },
    {
        title: `React.Composição vs Herança`,
        textContent: `O React tem um poderoso modelo de composição, e por isso recomendamos o uso de composição ao invés de herança para reutilizar código entre componentes.`,
        codeString: `404`
    },
    {
        title: `React.Composição vs Herança: Contenção`,
        textContent: `Alguns componentes não tem como saber quem serão seus elementos filhos. Isso é muito comum para componentes como o SideBar ou Dialog que representam “caixas” genéricas. Recomendamos que esses componentes utilizem a prop especial children para passar os elementos filhos diretos para sua respectiva saída`,
        codeString: `function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}`
    },
    {
        title: `React.Composição vs Herança: Contenção`,
        textContent: `Recomendamos que esses componentes utilizem a prop especial children para passar os elementos filhos diretos para sua respectiva saída. Isso permite outros componentes passar elementos filhos no próprio JSX`,
        codeString: `function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Bem-vindo
      </h1>
      <p className="Dialog-message">
        Obrigado por visitar a nossa espaçonave!
      </p>
    </FancyBorder>
  );
}`
    },
    {
        title: `React.Composição vs Herança: Contenção`,
        textContent: `Qualquer conteúdo dentro da tag JSX do componente <FancyBorder> vai ser passado ao componente FancyBorder como prop children. Desde que FancyBorder renderize a {props.children} dentro de uma <div>, os elementos serão renderizados no resultado final.`,
        codeString: `function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Bem-vindo
      </h1>
      <p className="Dialog-message">
        Obrigado por visitar a nossa espaçonave!
      </p>
    </FancyBorder>
  );
}`
    },
    {
        title: `React.Composição vs Herança: Contenção`,
        textContent: `Mesmo que seja incomum, as vezes pode ser que você precise de diversos “buracos” no componente. Em alguns casos você pode criar sua própria convenção e não utilizar a prop children`,
        codeString: `function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}`
    },
    {
        title: `React.Composição vs Herança: Contenção`,
        textContent: `Os elementos React como <Contacts/> e <Chat/> são apenas objetos, e você pode passá-los como props assim como faz com outros tipos de dados. Esta abordagem pode soar familiar como “slots” em outras bibliotecas, mas no React não existe limitações sobre o que pode ser passado como props.`,
        codeString: `function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}`
    },
    {
        title: `React.Composição vs Herança: Especialização`,
        textContent: `Algumas vezes acabamos pensando em componentes como “casos especiais” de outros componentes, por exemplo, podemos dizer que o componente WelcomeDialog é um caso especial de Dialog. No React, isto também pode ser obtido através do uso de composição, um componente específico renderiza um componente mais “genérico” e o configura com as suas respectivas props`,
        codeString: `function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Bem-vindo"
      message="Obrigado por visitar a nossa espaçonave!" />
  );
}`
    },
    {
        title: `React.Composição vs Herança`,
        textContent: `No Facebook, nós usamos o React em milhares de componentes, e não encontramos nenhum caso que recomendaríamos criar componentes utilizando hierarquia de herança. O uso de props e composição irá te dar toda flexibilidade que você precisa para customizar o comportamento e aparência dos componentes, de uma maneira explícita e segura. Lembre-se de que os componentes podem aceitar um número variável de props, incluindo valores primitivos, como int, array, boolean; assim como elementos Reacts e funções. E se você desejar reutilizar funcionalidades (não gráficas) entre componentes, sugerimos que você a extraia em módulos JavaScript. Os componentes podem importar essa função, objeto ou classe sem precisar estender.`,
        codeString: `function WelcomeDialog() {
  return (
    <Dialog
      title="Bem-vindo"
      message="Obrigado por visitar a nossa espaçonave!" />
  );
}`
    },
    // {
    //     title: `React.Component: Visão Geral`,
    //     textContent: `content`,
    //     codeString: `404`
    // },
    // {
    //     title: `React.Component: Visão Geral`,
    //     textContent: `content`,
    //     codeString: `404`
    // },
    // {
    //     title: `React.Component: Visão Geral`,
    //     textContent: `content`,
    //     codeString: `404`
    // },
    // {
    //     title: `React.Component: Visão Geral`,
    //     textContent: `content`,
    //     codeString: `404`
    // },
    // {
    //     title: `React.Component: Visão Geral`,
    //     textContent: `content`,
    //     codeString: `404`
    // },
]
export default tips