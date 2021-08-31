let tips = [
    {
        textContent: `Números em JavaScript são "valores de precisão dupla no formato IEEE 754", de acordo com a especificação. Isto tem algumas consequências interessantes. Não existe essa coisa de inteiro em JavaScript, então você deve ser um pouco cuidadoso com seus cálculos se você está acostumado a matemática em C ou Java.`,
        codeString: `> 0.1 + 0.2 == 0.30000000000000004
true`
    },
    {
        textContent: `Os operadores numéricos padrões são suportados, incluindo adição, subtração, módulo (ou resto) aritmético e assim por diante. Há também um objeto embutido que eu esqueci de mencionar mais cedo chamado Math para manipular funções e constantes matemáticas mais avançadas`,
        codeString: `Math.sin(3.5);
var d = Math.PI * r * r;`
    },
    {
        textContent: `Você pode converter uma string em um inteiro usando a função embutida parseInt(). Ela tem um segundo parâmetro opcional para a base da conversão, parâmetro esse que você deveria sempre prover:`,
        codeString: `> parseInt("123", 10)
123`
    },
    {
        textContent: `Se você quiser converter um número binário em um inteiro, basta mudar a base`,
        codeString: `> parseInt("11", 2)
3`
    },
    {
        textContent: `Você também pode usar o operador unário + para converter valores em números`,
        codeString: `> + "42"
42`
    },

    {
        textContent: `Um valor especial chamado NaN (sigla de "Not a Number ou Não é Número") é retornado se a string não é um valor numérico`,
        codeString: `> parseInt("hello", 10)
NaN`
    },
    {
        textContent: `NaN é tóxico: Se você provê-lo como uma entrada para qualquer operação matemática o resultado também será NaN`,
        codeString: `> NaN + 5
NaN`
    },
    {
        textContent: `Você pode testar se é NaN usando a função embutida isNaN()`,
        codeString: `> isNaN(NaN)
true`
    },
    {
        textContent: `JavaScript também tem os valores especiais Infinity e -Infinity`,
        codeString: `> 1 / 0
Infinity
> -1 / 0
-Infinity`
    },
    {
        textContent: `Você pode testar se o valor é Infinity, -Infinity e NaN usando a função embutida isFinite():`,
        codeString: `> isFinite(1/0)
false
> isFinite(-Infinite)
false
> isFinite(NaN)
false`
    },
    {
        textContent: `Essa é nossa primeira pincelada com objetos JavaScript! Eu mencionei que strings também são objetos? De modo que elas têm métodos`,
        codeString: `> "hello".charAt(0)
h
> "hello, world".replace("hello", "goodbye")
goodbye, world
> "hello".toUpperCase()
HELLO`
    },
    {
        textContent: `No JavaScript há distinção entre null, que é um objeto do tipo 'object' para indicar deliberadamente uma ausência de valor, do undefined, que é um objeto do tipo 'undefined' para indicar um valor não inicializado — isto é, que um valor não foi atribuído ainda. Vamos falar sobre variáveis depois, mas em JavaScript é possível declarar uma variável sem atribuir um valor para a mesma. Se você fizer isso, a variável será do tipo undefined.`,
        codeString: `> undefined === null
false
> undefined == null
true`
    },
    {
        textContent: `JavaScript tem um tipo boolean, ao qual são possíveis os valores true e false (ambos são palavras-chave). Qualquer valor pode ser convertido em um boolean, de acordo com as seguintes regras:
        1) false, 0, a string vazia(""), NaN, null, e undefined todos tornam-se false
        2) todos os outros valores tornam-se true`,
        codeString: `> Boolean("")
false
> Boolean(234)
true`
    },
    {
        textContent: `Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.`,
        codeString: `404`
    },
    {
        textContent: `A definição de variáveis usando o let foi introduzida no ECMAScript 6. O let permite escopo de bloco, ou seja, é possível definir uma variável em um bloco if, e esta variável ter escopo limitado ao bloco if- por exemplo.`,
        codeString: `404`
    },
    {
        textContent: `Operadores numéricos de JavaScript são +, -, *, / e % - que é o operador resto. Valores são atribuídos usando =, e temos também as instruções de atribuição compostas, como += e -=. Essas são o mesmo que x = x operador y.`,
        codeString: `x += 5
x = x + 5`
    },
    {
        textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
        codeString: `404`
    },

    {
        textContent: `O operador + também faz concatenação de string:`,
        codeString: `> "hello" + " world"
hello world`
    },
    {
        textContent: `Se você adicionar uma string a uma número (ou outro valor) tudo será convertido em uma string primeiro. Isso talvez seja uma pegadinha para você:`,
        codeString: `> "3" + 4 + 5
345
> 3 + 4 + "5"
75`
    },
    {
        textContent: `Comparações em JavaScript podem ser feitas usando <, >, <= e >=. Isso funciona tanto para strings como para números. A igualdade é um pouco menos simples. O operador igual-duplo faz a coersão de tipo se você colocar tipos diferentes, algumas vezes com resultados interessantes:`,
        codeString: `> 1 === true
false
> true === true
true`
    },
    {
        textContent: `Temos também os operadores != e !== .`,
        codeString: `404`
    },
    {
        textContent: `JavaScript tem um conjunto de estruturas de controle similar à outras linguagens na família do C. Instruções condicionais são suportadas pelo if e else; você pode encadeá-los se quiser:`,
        codeString: `var name = "kittens";
if (name == "puppies") {
    name += "!";
} else if (name == "kittens") {
    name += "!!";
} else {
    name = "!" + name;
}
name == "kittens!!"`
    },
    {
        textContent: `JavaScript tem as estruturas de repetição com os laços while e do-while. O primeiro é bom para repetições básicas; o segundo é para os casos em que você queira que o corpo da repetição seja executado pelo menos uma vez:`,
        codeString: `while (true) {
  // an infinite loop!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input))`
    },
    {
        textContent: `O laço for do JavaScript é o mesmo que no C e Java: ele lhe permite prover as informações para o seu laço em uma única linha.`,
        codeString: `for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}`
    },
    {
        textContent: `Os operadores && e ||  usam a lógica de curto-circuito, o que quer dizer que, o segundo operando ser executado dependerá do primeiro operando. Isso é útil para checagem de objetos null antes de acessar seus atributos`,
        codeString: `var name = o && o.getName();`
    },
    {
        textContent: `Configuração de valores-padrões`,
        codeString: `var name = otherName || "default";`
    },
    {
        textContent: `JavaScript tem um operador ternário para expressões condicionais:`,
        codeString: `var allowed = (age > 18) ? "yes" : "no";`
    },
    {
        textContent: `A instrução switch pode ser usada para múltiplas ramificações baseadas em um número ou uma string:`,
        codeString: `switch(action) {
    case 'draw':
        drawit();
        break;
    case 'eat':
        eatit();
        break;
    default:
        donothing();
}`
    },
    {
        textContent: `Se você não adicionar a instrução break, a execução irá "cair" no próximo nível. Isso é algo que raramente vai querer fazer — de fato vale mais a pena colocar um comentário especificando essa "queda" para o próximo nível, pois isso o ajudará na hora de fazer a depuração de seu código:`,
        codeString: `switch(a) {
    case 1: // queda
    case 2:
        eatit();
        break;
    default:
        donothing();
}`
    },
    {
        textContent: `A cláusula default é opcional. Se quiser, pode colocar expressões tanto no switch como nos cases; Comparações acontecem entre os dois usando o operador ===:`,
        codeString: `switch(1 + 3) {
    case 2 + 2:
        yay();
        break;
    default:
        neverhappens();
}`
    },
    {
        textContent: `Objetos JavaScript são simplesmente coleções de pares nome-valor. Como tal, eles são similares à: Dicionários em Python, Hashes em Perl e Ruby, Hash tables em C e C++, HashMaps em Java, Vetores associativos em PHP`,
        codeString: `var obj = {};`
    },
    {
        textContent: `Há basicamente duas formas de criar um objeto vazio. Elas são semanticamente equivalentes; a segunda forma é chamada de sintaxe de objeto literal e é mais conveniente. Essa sintaxe é também o coração do formato JSON e deveria ser sempre preferida.`,
        codeString: `var obj = new Object();
var obj = {};`
    },
    {
        textContent: `Uma vez criada, as propriedades de um objeto podem novamente ser acessadas de uma das seguintes formas`,
        codeString: `obj.name = "Simon";
var name = obj.name;
        
obj["name"] = "Simon";
var name = obj["name"];`
    },
    {
        textContent: `Estas também são semânticamente equivalentes. A segunda forma tem a vantagem de que o valor da chave é passado através de uma string, que pode ser calculada em tempo de execução, muito embora esse método previna o uso de alguns mecanismos tais como a otimização e a minificação. Outra vantagem é a possibilidade de se atribuir palavras-reservadas aos nomes das propriedades:`,
        codeString: `obj.for = "Simon"; // Erro de sintaxe, pois 'for' é uma palavra reservada
        obj["for"] = "Simon"; // Funciona bem`
    },
    {
        textContent: `A sintaxe de objeto literal pode ser usada para inicializar completamente um objeto`,
        codeString: `var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}`
    },
    {
        textContent: `O acesso aos atributos dos objetos podem ser encadeados:`,
        codeString: `> obj.details.color
orange
> obj["details"]["size"]
12`
    },
    {
        textContent: `Note que array.length não é necessariamente o número de itens em um vetor. Considere o seguinte: o tamanho de um vetor é o maior índice mais 1.`,
        codeString: `> var a = ["dog", "cat", "hen"];
> a[100] = "fox";
> a.length
101`
    },
    {
        textContent: `Se você fizer referência a um índice de vetor inexistente, obterá um undefined`,
        codeString: `> typeof a[90]
undefined`
    },
    {
        textContent: `Você pode iterar sobre um vetor da seguinte forma: Isso é um pouco ineficaz visto que você está procurando a propriedade length uma vez a cada iteração.`,
        codeString: `for (var i = 0; i < a.length; i++) {
    // Faça algo com a[i]
}`
    },
    {
        textContent: `Uma melhor prática de iteração sobre os vetores é procurar a propriedade propriedade apenas uma vez `,
        codeString: `for (var i = 0, len = a.length; i < len; i++) {
    // Faça algo com a[i]
}`
    },
    {
        textContent: `A forma mais elegante de iteração sobre vetores. Aqui nós estamos declarando duas variáveis. A atribuição na parte do meio do laço for é também testada — se for verdadeira, o laço continuará. Uma vez que o i é incrementado toda vez, os itens do array serão atribuídos a variável item sequencialmente. A iteração é finalizada quando item "falsy" é encontrado (tal como o undefined, false ou zero).`,
        codeString: `for (var i = 0, item; item = a[i++];) {
    // Faça algo com item
}
//Note que esse truque só deveria ser usado em vetores que você sabe não conter valores "falsy" (vetores de objeto ou nós DOM por exemplo). Se você iterar sobre dados numéricos que possam ter o 0 ou sobre dados string que possam ter uma string vazia, você deveria usar uma outra forma de iteração.
`
    },
    {
        textContent: `Uma outra forma de iterar é usar o laço for...in. Note que se alguém adicionou novas propriedades ao Array.prototype, elas também podem ser iteradas usando este laço:`,
        codeString: `for (var i in a) {
    // Do something with a[i]
}`
    },
    {
        textContent: `Retorna uma string com o toString()de cada elemento separado por vírgulas.`,
        codeString: `a.toString()`
    },
    {
        textContent: `Retorna um novo vetor com os itens adicionados nele.`,
        codeString: `a.concat(item[, itemN])`
    },
    {
        textContent: `Converte um vetor em uma string com os valores do vetor separados pelo valor do parâmetro sep`,
        codeString: `a.join(sep)`
    },
    {
        textContent: `Remove e retorna o último item.`,
        codeString: `a.pop()`
    },
    {
        textContent: `Reverte o vetor.`,
        codeString: `a.reverse()`
    },
    {
        textContent: `Remove e retorna o primeiro item.`,
        codeString: `a.shift()`
    },
    {
        textContent: `Retorna um sub-vetor.`,
        codeString: `a.slice(start, end)`
    },
    {
        textContent: `Prover uma função opcional para fazer a comparação.`,
        codeString: `a.sort([cmpfn])`
    },
    {
        textContent: `O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.`,
        codeString: `//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

        `
    },
    {
        textContent: `Acrescenta itens ao começo do vetor.`,
        codeString: `a.unshift([item])`
    },
//     {
//         textContent: `Você também pode passar mais argumentos do que a função está esperando:`,
//         codeString: `function add(x, y) {
//     var total = x + y;
//     return total;
// }
// > add(2, 3, 4)
// 5 // adicionado os dois primeiros; 4 foi ignorado`
//     },
    {
        textContent: `Isso destaca um problema potencial com funções anônimas: Como chamá-las recursivamente se elas não tem um nome? JavaScript lhe permite nomear expressões de função para isso. Você pode usar EFIIs nomeadas (Expressões Funcionais Imediatamente Invocadas)`,
        codeString: `var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body);`
    },
    {
        textContent: `A good practice when choosing the declaration type of variables is to prefer const, otherwise use let. Without knowing what happens inside myBigFunction(), you can conclude that result variable is assigned once and after the declaration is read-only.`,
        codeString: `function myBigFunction(param1, param2) {
    /* lots of stuff... */

    const result = otherFunction(param1);

    /* lots of stuff... */
    return something;
}`
    },
    {
        textContent: `The variables live within the scope they’ve been created. A code block and a function body create a scope for const and let variables.`,
        codeString: `function binarySearch(array, search) {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        const middleItem = array[middle];
        if (middleItem === search) {
        return true; 
        }
        if (middleItem < search) {
        left = middle + 1; 
        } else {
        right = middle - 1; 
        }
    }
    return false;
}`
    },
    {
        textContent: `Try to declare the variable as close as possible to the usage place. This way, you won’t have to guess: Hey, I see the variable declared here, but… where is it used?`,
        codeString: `function myBigFunction(param1, param2) {
    let something;
            
    /* 
    * calculate something... 
    */
            
    const result = otherFunction(param1);
    return something + result;
}`
    },
    {
        textContent: `Toda vez que criamos um objeto, criamos duas marcas de nova função dentro dele — não seria melhor se este código fosse compartilhado?  A resposta é sim.`,
        codeString: `function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
}`
    },
    // {
    //     textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
    //     codeString: `404`
    // },
    // {
    //     textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
    //     codeString: `404`
    // },
    // {
    //     textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
    //     codeString: `404`
    // },
    // {
    //     textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
    //     codeString: `404`
    // },
    // {
    //     textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
    //     codeString: `404`
    // },
    // {
    //     textContent: `Você pode usar ++ e -- para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.`,
    //     codeString: `404`
    // },
]
export default tips