# Projeto CRUD com Next.js

## Criando o projeto CRUD com Next.js

- Dentro da pasta do projeto, vamos rodar o comando(mais recomendado atualmente usar o npx):

```
npx create-next-app next-crud
                    [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-next-app:** Dependência para criar um projeto.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd next-crud
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
yarn dev ou npm run dev
```

## Configurações do projeto

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
.next
node_modules
pages
public
styles
```

Vamos **criar uma pasta src na raiz do projeto**.
E **mover as pastas pages e styles para dentro de src**

- Agora, vamos parar a aplicação

```
ctrl + c
```

- E rodar novamente, para que a página seja recarregada:

```
yarn dev ou npm run dev
```

- Vamos criar também a pasta `components` dentro de `src`;

## Configurações Firebase

Inicialmente vamos criar o projeto no Firebase para realizarmos a integração na aplicação mais a frente.

- Primeiramente, vamos acessar o `firebase console` no link: https://console.firebase.google.com/u/0/?hl=pt-br&pli=1;

- Em seguida, vamos em `Criar um projeto`;

- Vamos inserir o `nome do projeto`, que nesse caso vai ser `next-crud` e aceitar os termos e `continuar`;

- Feito isso, vamos desativar o `Ativar o Google Analytics neste projeto` e em seguida `criar projeto`;

- Com o projeto criado, vamos clicar em `continuar` vamos em `web` e dessa forma será criado uma aplicação web. Em `Apelido do app` podemos colocar `frondend` e em seguida vamos `Registrar app`;

- Após seguirmos esses passos será mostrado em tela algumas informações de configuração que iremos usá-las mais a frente(podemos acessá-las em `Configurações do projeto`);

- Agora podemos entrar na parte do `Firestore Database` e `Criar banco de dados`. Para não termos que nos preocupar com a questão de configurar as regras, vamos `Iniciar no modo de teste` e `Avançar`. E por fim, `Ativar`;

- Mas devemos lembrar que esse modo permite que qualquer pessoa acesse o nosso BD e para isso, ao finalizar, vamos excluir algumas informações sensíveis para evitar qualquer vazamento.

## Configurações TailwindCSS(v3.1.7)

Link documentação: https://tailwindcss.com/docs/guides/nextjs.

- Primeiro é necessário instalar as bibliotecas do `tailwind`, `postcss` e `autoprefixes`, basicamente elas vão auxiliar o tailwind a ser interpretado. Para isso basta usar o comando:

```
npm install -D tailwindcss postcss autoprefixer
```

- Em seguida é necessário inicializar o tailwindcss, e para isso basta usar o comando:

```
npx tailwindcss init -p
```

- Nele vão ser criados dois arquivos, o `tailwind.config.js` e o `postcss.config.js`. 
Em seguida, dentro do seu arquivo `tailwind.config.js` é necessário "falar" para o tailwind quais arquivos ele vai ser executado. Para isso basta colar no ser arquivo tailwind.config.js o seguinte:

``` JS
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Essas instruções vão basicamente falar para o tailwind executar em todo arquivo com terminação "tsx" e que esteja dentro de "components" ou "pages". 
Por fim, dentro do seu `global.css`, é necessário fazer a `importação do tailwind`, portanto, basta colar dentro do arquivo o seguinte código:

``` CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Em seguida, vamos mudar a extensão do arquivo `index.js` para `.tsx`;

- Fazendo isso, vamos precisar importar o typescript e para isso vamos criar o arquivo `tsconfig.json` na raiz do projeto e em seguida rodar o comando:

``` 
yarn add --dev @types/react @types/node typescript
```

- E para que o arquivo `tsconfig.json` seja prenchido automáticamente vamos startar nossa aplicação com o comando:

```
yarn run dev
```

- Agora podemos começar a usar o Tailwind no projeto:

``` TSX
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

``` TSX
function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <span className="text-4xl">Hello word!</span>
    </div>
  )
}
```

## Criação dos componentes Layout e Título/Title


- Em `src/components` vamos criar o componente funcional `Layout.js`:

``` TSX
import React from "react"; // usando TypeScript não precisamos importar o react

export default function Layout(props) {
  return (
    <div>Layout</div>
  )
}

```

- Na `div` vamos inserir o `className` e como vamos usar um conjunto de classes vamos abrir chaves{} e inserir uma tamplet string(``) para trabalharmos com multiplas linhas:

``` TSX
// import React from "react";

export default function Layout(props) {
  return (
    <div className={`
      
    `}>
      Layout
    </div>
  )
}
```

- Vamos aplicar o display `flex` e mudar o flex-direction para column(`flex-col`) e a largura da página ao invés de usarmos a largura inteira vamos usar dois terços(`w-2/3`):

``` TSX
export default function Layout(props) {
  return (
    <div className={`
      flex flex-col w-2/3
    `}>
      Layout
    </div>
  )
}
```

- Além disso, vamos aplicar um background-color na cor branca(`bg-white`), mudar a cor do texto para um tom de cinza escuro(`text-gray-800`) e arredondar as bordas da div(`rounded-md`):

``` TSX
export default function Layout(props) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      Layout
    </div>
  )
}
```

- Em seguida, dentro da `div container` vamos inserir uma outra `div` que irá representar o contéudo que ficará abaixo do componente `Title` que criaremos a frente:

``` TSX
export default function Layout(props) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      Componente Título
      <div>

      </div>
    </div>
  )
}
```

- Agora em `src/components` vamos criar o componente funcional `Title.js`:

``` TSX
export default function Title(props) {
  return (
    <div>
      <h1></h1>
      <hr />
    </div>
  )
}
```

- Dentro do `h1` vamos colocar o conteúdo do que iremos receber dentro da referência do componente `Title` no componente `Layout`, ou seja, dentro de `props.children`:

``` TSX
export default function Title(props) {
  return (
    <div>
      <h1>{props.children}</h1>
      <hr />
    </div>
  )
}
```

- Agora, dentro do componente `Layout` vamos importar o componente `Title` e criar a referência dele:

``` TSX
import Title from "./Title";

export default function Layout(props) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title></Title>
      <div>

      </div>
    </div>
  )
}
```

- E dentro do `Title` vamos passar o Title que iremos esperar receber via `props` do componente principal `index.tsx` dentro do componente `Layout`.
Podemos criar uma `interface`(recurso do Typescript) chamada `LayoutProps` e nela conseguimos informar quais são as propriedades que esperamos receber nesse componente e o tipos delas(que é um objeto):

``` TSX
import Title from "./Title";

interface LayoutProps {
  // se quisermos que a propriedade seja opctional podemos colocar ? depois do nome, assim title?: string
  title: string, // exige o atribulo title que é do tipo string
  children: any // exige um componente filho que pode ser de qualquer tipo
}

export default function Layout(props) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title></Title>
      <div>

      </div>
    </div>
  )
}
```

- Agora, dentro do componente podemos informar que as `props` são do tipo `LayoutProps`:

``` TSX
import Title from "./Title";

interface LayoutProps {
  // se quisermos que a propriedade seja opctional podemos colocar ? depois do nome, assim title?: string
  title: string, // exige o atribulo title que é do tipo string
  children: any // exige um componente filho que pode ser de qualquer tipo
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title></Title>
      <div>

      </div>
    </div>
  )
}
```

- E agora, indo no componente principal `index.tsx`, quando importarmos e formos usar o componente `Layout` ele vai exigir as `props` que especificamos na `interface`.
Desse modo, vamos passar as propriedades exigidas:

``` TSX
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <span>Conteúdo - Componente filho(podemos receber através de props.children)</span>
      </Layout>
    </div>
  )
}
```

- Agora que tempos dentro de `props` o atributo `title` vamos passar para o componente `Title` o que contém dentro de `props.title`(que será resgatado dentro do componente `Titilo` através de `props.children`):

``` TSX
import Title from "./Title";

interface LayoutProps {
  title: string, 
  children: any 
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title>{props.title}</Title>
      <div>

      </div>
    </div>
  )
}
```

- Feito isso, vamos inserir algumas classes de estilo para melhorar a visualização do nosso componente `Title`:

``` TSX
export default function Title(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">
        {props.children}
      </h1>
      <hr className="border-5 border-purple-500"/>
    </div>
  )
}
```

- Agora, voltando no componente `Layout` podemos notar que ainda não estamos usando o que seria o contéudo, que estamos recebendo do componente `index.tsx` através de `props.children`.
Para isso, no contéudo da `div` abaixo do componente `Title` vamos inserir o contéudo que está dentro de `props.children`:

``` TSX
import Title from "./Title";

interface LayoutProps {
  title: string, 
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title>{props.title}</Title>
      <div>
        {props.children}
      </div>
    </div>
  )
}
```

- Feito isso, vamos inserir algumas classes de estilo para melhorar a visualização do nosso componente `Layout`:

``` TSX
import Title from "./Title";

interface LayoutProps {
  title: string, 
  children: any 
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title>{props.title}</Title>
      <div className="p-6"> {/* p-6: padding de 6px em todas as direções */}
        {props.children}
      </div>
    </div>
  )
}
```

## Classe Cliente

- Dentro de `src` iremos criar uma nova pasta chamada `core` para representar o que "seria" o domínio da aplicação e aqui podemos separar em múltiplas pastas em subdomínios, mas como teremos uma aplicação simples iremos criar os arquivos diretamente na pasta `core`.
O primeiro arquivo que iremos criar será o `Client.ts` e nele iremos exportar por padrão(`export default`) uma classe(`class`) chamada `Client` e essa classe terá três atributos: `id`, `name` e `age` e para definí-los podemos usar o próprio `private` do typescript:

``` TS
export default class Client {
  private id: string;
  private name: string;
  private age: number;
}
```

- Um detalhe importante, mais a frente iremos criar os os `get's` e os `set's` dos atributos dessa classe e não conseguiremos defini-los com o mesmo nome do atributo utilizando o método `private` do typescript e para fugirmos desse impasse podemos usar o recurso do próprio javascript para trabalhar com dados privados e para isso obrigatóriamente no arquivo `tsconfig.json` do projeto precisamos mudar o atributo `target` para uma versão mais nova, por exemplo o `ES2015` que já suporta o uso da cerquilha(#) para métodos privados:

``` JSON
{
  "compilerOptions": {
    "target": "ES2015",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    // [...]
  },
  "include": [
    // [...]
  ],
  "exclude": [
    // [...]
  ]
}
```

- Agora, iremos criar um `constructor` que vai receber o `name` que é do tipo `string`, a `age` que é do tipo `number` e `id` que é do tipo `string` e como esse id será gerado iremos colocá-lo por último que assim conseguimos definir que um valor padrão(default) que inicialmente será `null`(quando criarmos um cliente ele terá um id nulo e quando mandarmos lá para o firebase ele vai gerar o id e na volta teremos o id setado):

``` TS
export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string = null) {
    
  }
}
```

- Em seguida, vamos definir os valores de cada atributo desse contexto:

``` TS
export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string = null) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }
}
```

- Vamos criar os `get's` para acessarmos as informações da classe `Client`:

``` TS
export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string = null) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age
  }
}
```

- Agora, vamos criar um método estático(`static`) para que seja criada uma instância vazia(`empty`), ou seja, um `Client` vazio(podemos criar essa instância vazia, como também podemos atribuir os valores vazios/zerados como padrão no `constructor`):

``` TS
export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string = null) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  static empty() {
    return new Client("", 0);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age
  }
}
```

## Criação do Componente Tabela/Table

- Agora, dentro de `src/components` iremos criar o componente funcional `Table.tsx`:

``` TSX
export default function Table(props) {
  return (
    <table>

    </table>
  )
}
```

- Vamos criar uma `interface` para deixar mais amarrado o que esperamos receber como `props` dentro desse componente. 
Vamos esperar receber um array de clientes/`clients` através da instância que criamos `Client` e vamos passar essa `interface` para `props`(ou seja, props vai ser do tipo TableProps):

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {
  return (
    <table>

    </table>
  )
}
```

- Outra coisa que podemos fazer é quebrar a renderização em multiplas funções, por exemplo, podemos simplesmente criar a tabela e colocar um `tr` que vai ser um `table row`/linha tabela e dentro dela vamos inserir os `th` que serão o cabeçalho da tabela(Código, Nome, Idade):

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {
  return (
    <table>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </table>
  )
}
```

- E para visualizarmos em tela, dentro do componente principal `index.tsx` no lugar do que seria o "conteúdo" vamos importar o componente `Table`:

``` TSX
import Layout from "../components/Layout";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table />
      </Layout>
    </div>
  )
}
```

- O componente `Table` espera receber via `props` uma lista/array de clientes através do atributo `clients`. 
E para isso, dentro do componente que contém a referência de `Table`(componente pai - index.tsx) vamos criar uma constante chamada `clients` que vai receber um array e nele iremos instânciar a classe/objeto `Client` passando os atributos. E em seguida, vamos passar essa const como propriedade para o atributo `clients`:

``` TSX
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Joana", 19, "2"),
    new Client("Beatriz", 24, "3"),
    new Client("João", 23, "4"),
    new Client("Daniel", 30, "5"),
    new Client("Rafael", 29, "6")
  ];

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients} />
      </Layout>
    </div>
  )
}
```

- Agora voltando a olhar para o componente `Table`, podemos eventualmente quebrar a nossa tabela em funções para deixarmos a renderização mais organizada. Por exemplo, podemos criar uma função chamada renderizar cabeçalho/`renderHeader` e nela vamos retornar/`return` o trecho do cabeçalho da nossa tabela e no elemento `table` vamos chamar essa função:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  return (
    <table>
      {renderHeader()}
    </table>
  )
}
```

- Outra parte que podemos trabalhar é na parte de renderizar os dados e para isso, vamos criar uma função chamada renderizar dados/`renderData` e dentro dela vamos retornar/`return` a lista de clientes/`clients` que iremos receber via `props`. E como é um array vamos fazer um `map` para percorrer cada cliente/`client` e seu indice/`i`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients.map((client, i) => {
      
    })
  }

  return (
    <table>
      {renderHeader()}
    </table>
  )
}
```

- Lembrando se o array estiver vazio e formos usar o `map` isso vai ocasionar um erro, então para evitarmos isso vamos usar o `?` para verificar se `clients` é vazio/`nul`, ou seja, o `map` só vai ser executado se `clients` estiver preenchido:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {

    })
  }

  return (
    <table>
      {renderHeader()}
    </table>
  )
}
```

- E na função callback desse `map` vamos retornar/`return` para cada cliente/`client` uma nova linha na tabela/`tr` e dentro dela colunas/`td` para cada informação do cliente/`client` em questão. E já que estamos trabalhando com uma lista de elementos JSX vamos precisar definir uma chave/`key` no elemento conteiner que nesse caso é o `tr`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      {renderHeader()}
    </table>
  )
}
```

- E uma vez feito isso, dentro do elemento `table` podemos chamar a função `renderData` para renderizar os dados dos clientes/`clients` na tabela:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      {renderHeader()}
      {renderData()}
    </table>
  )
}
```

- Para melhor organização de sintaxe, vamos colocar/chamar a função que renderiza o cabeçalho/`renderHeader` dentro do elemento `thead` e chamar a função que renderiza os dados dentro do elemento `tbody`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

## Componente Tabela/Table #02

- Agora vamos começar a trabalhar com propriedades de estilo do `tailwind` dentro do componente `Table`. 
Primeiramente, no elemento `tread` dentro da propriedade `className`(usando chaves{} e template string para usar várias linhas) vamos aplicar as seguintes propriedades de estilo: background gradiente para a direita/`bg-gradient-to-r` iniciando em um tom de roxo mais claro/`from-purple-500` indo para um tom de roxo mais escuro/`to-purple-800`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Além disso, vamos mudar a cor do texto do cabeçalho/`thead` para um tom de cinza bem claro/`text-gray-100`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E no elemento `table`, para que a largura da tabela ocupe a tela inteira vamos aplicar a propriedade `w-full`. 
Além disso, vamos aplicar a propriedade `rounded-xl` para arredondar a borda da tabela, caso o arrendodamento na borda não seja aplicado, significa que o elemento é muito grande para o container e para contornar esse impasse temos que aplicar a propriedade `overflow-hidden` para recortar qualquer conteúdo dentro de um elemento que ultrapasse os limites desse elemento:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Em seguida, em todos os elementos `th` do cabeçalho/`header` vamos aplicar as classes de estilo seguintes; `text-left` para alinhar os textos a esquerda da tela e um padding/`p` de `2` px em todas as direções:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E em todos os elementos `td` do corpo/`body` da tabela(onde ficam os dados dos clientes) vamos aplicar as classes de estilo seguintes; `text-left` para alinhar os textos a esquerda da tela e um padding/`p` de `4` px em todas as direções:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Agora, precisamos aplicar de forma "zebrada" a cor das linhas do corpo/`body` da tabela(onde ficam os dados dos clientes). 
E para isso diretamente no elemento `tr` vamos aplicar de forma condicional a cor, se o indice do client/`i` modulo/`%` de `2` for igual/`===` a `0` significa que esse número é par, então/`?` será aplicado um background em um tom de roxo/`bg-purple-200`, senão/`:`(caso contrário - seja ímpar) será aplicado um background com outro tom de roxo mais claro/`bg-purple-100`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

## Componente Tabela/Table #03

- Agora, iremos definir a coluna das ações(editar e excluir). 
Primeiramente dentro de `src/components`, vamos criar um arquivo chamados Icones/`Icons.tsx` e nele iremos exportar/`export` uma constante/`const` chamada ícone edição/`EditIcon`:

``` JSX
export const EditIcon = (
  
)
```

Em seguida, vamos pegar os ícones do `Heroicons`(https://heroicons.com/) e vamos pesquisar o ícone de Editar/`Edit` e copiar o `jsx` dele e colar dentro da constante `EditIcon` para ser retornado esse trecho JSX:

``` TSX
export const EditIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)
```

- E o mesmo iremos fazer para o icone de lixo/`TrashIcon`:

``` TSX
export const EditIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)

export const TrashIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
)
```

- Voltando no componente `Table` na parte do cabeçalho/`header` iremos criar mais um `th`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-4">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E vamos criar mais uma função que será responsável por renderizar as ações/`renderActions` e nela iremos retornar/`return` especificamente a parte dos botões, então teremos um `td`(coluna da tabela) que é nele que iremos colocar os botões. 
E dentro da função que renderiza os dados/`renderData` da tabela vamos chamar essa função `renderActions`:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-4">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions()}
        </tr>
      )
    })
  }

  function renderActions() {
    return (
      <td>

      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E para renderizar as ações, como estamos trabalhando com uma lista de clientes/clients, na função `renderActions` vamos esperar receber o `client` que é do tipo `Client`(class que criamos), porque vamos precisar selecionar um cliente específico. Então para cada `client` que percorrermos com o `map`, vamos renderizar as ações daquele `client` específicamente:

``` TSX
import Client from "../core/Client";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-4">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td>

      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Agora, dentro do `td` podemos criar os botões/`button` e nele vamos usar os ícones que definimos dentro do arquivo `Icons`:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-4">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td>
        <button>{EditIcon}</button>
        <button>{TrashIcon}</button>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Em seguida, vamos aplicar classes de estilos ao botões:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-2">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> {/*Para os botões ficarem um ao lado do outro/display flex alinha os flex items em linha/row*/}
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
        `}>
          {EditIcon}
        </button>
        <button className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
        `}>
          {TrashIcon}
        </button>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Agora, vamos tratar o click dos botões, e pra isso iremos definir que o componente `Table` além de receber a lista de clientes/`clients` irá receber duas funções, uma função será chamada quando o cliente for selecionado para editar seus dados/`selectedClient` e a outra para quando for excluído/`excludedClient`. E a passagem dessas duas funções serão opcionais `?` e ambas irão devolver um cliente/`client` do tipo `Client`(classe que criamos) e não retorna nada `void`:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-2">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> 
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
        `}>
          {EditIcon}
        </button>
        <button className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
        `}>
          {TrashIcon}
        </button>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Em seguida, vamos aplicar renderização condicional para os botões. Se a função `selectedClient` tiver sido fornecida via props então(`?`) iremos renderizar o botão/`button` de editar, caso contrário(`:`) iremos retornar `false`:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-2">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> 
        {props.selectedClient 
        ? (<button className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {EditIcon}
          </button>) 
        : false}
        <button className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
        `}>
          {TrashIcon}
        </button>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E o mesmo iremos fazer para o botão de excluir:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-2">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> 
        {props.selectedClient 
        ? (<button className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {EditIcon}
          </button>) 
        : false}
        {props.excludedClient
        ? (<button className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {TrashIcon}
           </button>)
        : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- Agora, como não passamos nenhuma função via props para o componente `Table`, nenhuma ação está sendo exibida em tela e podemos incluive criar uma const chamada exibir ações/`showActions` e ela vai receber a verificação se `props.selectedClient` ou/`||` se `props.excludedClient` foi passado, e isso vai retornar um valor booleano para a constante:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  const showActions = props.selectedClient || props.excludedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-2">Ações</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> {/*Para os botões ficarem um ao lado do outros/display flex alinha os flex items em linha/row*/}
        {props.selectedClient 
        ? (<button className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {EditIcon}
          </button>) 
        : false}
        {props.excludedClient
        ? (<button className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {TrashIcon}
           </button>)
        : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E iremos usar o valor retornado nessa constante `showActions` para renderizar de forma condicional o cabeçalho de Ações e os icons:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  const showActions = props.selectedClient || props.excludedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? (<th className="p-2">Ações</th>) : false}
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? (renderActions(client)) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center">
        {props.selectedClient 
        ? (<button className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {EditIcon}
          </button>) 
        : false}
        {props.excludedClient
        ? (<button className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {TrashIcon}
           </button>)
        : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
```

- E vamos criar a uma função chamada `selectedClient` que irá receber como parâmetro um `client` do tipo `Client` e passar essa função dentro do atributo `selectedClient` para o componente `Tabela` em `index.tsx`. Dessa forma, já será exibida em tela o botão de editar:

``` TSX
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Joana", 19, "2"),
    new Client("Beatriz", 24, "3"),
    new Client("João", 23, "4"),
    new Client("Daniel", 30, "5"),
    new Client("Rafael", 29, "6")
  ];

  function selectedClient(client: Client) {

  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients} selectedClient={selectedClient} />
      </Layout>
    </div>
  )
}
```

- O mesmo iremos fazer para o atributo `excludedClient`:

``` TSX
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Joana", 19, "2"),
    new Client("Beatriz", 24, "3"),
    new Client("João", 23, "4"),
    new Client("Daniel", 30, "5"),
    new Client("Rafael", 29, "6")
  ];

  function selectedClient(client: Client) {
    
  }

  function excludedClient(client: Client) {
    
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient} 
        />
      </Layout>
    </div>
  )
}
```

- Mas quando clicamos nos botões ainda não acontece nada, então precisamos definir o evento `onClick` dentro dos botões/`button`:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  const showActions = props.selectedClient || props.excludedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? (<th className="p-2">Ações</th>) : false}
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? (renderActions(client)) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> 
        {props.selectedClient 
        ? (<button onClick={() => props.selectedClient?.(client)} {/*Quando for capturado o click no botão a função recebida via props será chamada, mas como é opcional iremos usar o optional chane(?) e se a função tiver sido fornecida iremos chamá-la passando o client*/}
            className={`
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}>
            {EditIcon}
          </button>) 
        : false}
        {props.excludedClient
        ? (<button onClick={() => props.excludedClient?.(client)} {/*Quando for capturado o click no botão a função recebida via props será chamada, mas como é opcional iremos usar o optional chane(?) e se a função tiver sido fornecida iremos chamá-la passando o client*/}
            className={`
              flex justify-center items-center
              text-red-500 rounded-full p-2 m-1
              hover:bg-purple-50
            `}>
            {TrashIcon}
           </button>)
        : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
```

## Criação do componente Botão/Button(cadastrar novo cliente)

- Dentro de `src/components` iremos criar um componente funcional chamado botão/`Button.tsx`:

``` TSX
export default function Button(props) {
  return (
    <button>
      Button
    </button>
  )
}
```

- Podemos criar uma `interface`(recurso do Typescript) chamada `ButtonProps` e nela conseguimos informar quais são as propriedades que esperamos receber nesse componente e o tipos delas(que é um objeto). E em seguida, vamos passar essa interface criada para props, ou seja, `props` vai ser do tipo `ButtonProps`:

``` TSX
interface ButtonProps {
  children: any 
}

export default function Button(props: ButtonProps) {
  return (
    <button>
      {props.children}
    </button>
  )
}
```

- Vamos importar e criar a referência desse componente `Button` na nossa interface gráfica(index.tsx). Lembrando que de acordo com o que definimos na interface `ButtonProps` o componente irá exigir que seja passado um elemento filho(dentro da referência dele):

``` TSX
import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Joana", 19, "2"),
    new Client("Beatriz", 24, "3"),
    new Client("João", 23, "4"),
    new Client("Daniel", 30, "5"),
    new Client("Rafael", 29, "6")
  ];

  function selectedClient(client: Client) {
    console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Button>Novo Cliente</Button>
        <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient} 
        />
      </Layout>
    </div>
  )
}
```

- Para alinhar esse componente `Button` a direita da tela, vamos colocar ele dentro de uma `div` e aplicar as classes de estilo `flex`(para ativar o flex box) e o `justify-end`(para alinhar o elemento a direita da tela em relação ao main axis/eixo principal que nesse caso é a linha/horizontal):

``` TSX
import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Joana", 19, "2"),
    new Client("Beatriz", 24, "3"),
    new Client("João", 23, "4"),
    new Client("Daniel", 30, "5"),
    new Client("Rafael", 29, "6")
  ];

  function selectedClient(client: Client) {
    console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button>Novo Cliente</Button>
        </div>
        <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient} 
        />
      </Layout>
    </div>
  )
}
```

- Voltando no componente `Button` vamos aplicar as classes de estilo no elemento button:

``` TSX
interface ButtonProps {
  children: any
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`
      bg-gradient-to-r from-green-400 to-green-700
      text-white mb-4 px-4 py-2 rounded-md 
    `}>
      {props.children}
    </button>
  )
}
```

## Criação dos componentes Formulario/Form e Entrada/Input

- Dentro de `src/components` vamos criar o componente funcional `Form.tsx`:

``` TSX
interface FormProps {

}

export default function Form(props: FormProps) {
  return (
    <div>Form</div>
  )
}
```

- Dentro de `src/components` vamos criar o componente funcional `Input.tsx`:

``` TSX
interface InputProps {

}

export default function Input(props: InputProps) {
  return (
    <div>Input</div>
  )
}
```

- No componente `Form` vamos importar e criar a referência do componente `Input`:

``` TSX
import Input from "./Input";

interface FormProps {

}

export default function Form(props: FormProps) {
  return (
    <div>
      <Input />
    </div>
  )
}
```

- E agora vamos trabalhar com o componente `Input`. 
Vamos definir nele um `label` e dentro dele vamos colocar um texto/`text` que iremos esperar receber(obrigatóriamente) via props.
E além disso, vamos definir um `input` do tipo/`type` que iremos esperar receber(opcionalmente) via props e esse `type` só pode ser `text` ou `number`, caso não seja informado vamos assumir que o padrão será `text`; e o valor/`value` que iremos esperar receber(obrigatóriamente) via props e esse `value` pode ser qualquer tipo/`any`:

``` TSX
interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label>
        {props.text}
      </label>
      <input 
        type={props.type ?? "text"} 
        value={props.value}
      />
    </div>
  )
}
```

- Além disso, esse `input` poderá receber outros atributos também(de forma opcional). Por exemplo, somente leitura/`readOnly` que será do tipo `boolean` e se for passado o valor será `true` se não for será `false`:

``` TSX
interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label>
        {props.text}
      </label>
      <input 
        type={props.type ?? "text"} 
        value={props.value}
        readOnly={props.readOnly}
      />
    </div>
  )
}
```

- E agora, voltando para o componente pai do componente `Input`, que é o `Form`, podemos notar que agora ele está exigindo os atributos obrigatórios, e vamos passar os valores para tais atribuitos:

``` TSX
import Input from "./Input";

interface FormProps {
  
}

export default function Form(props: FormProps) {
  return (
    <div>
      <Input 
        text="Nome" value="Teste"
      />
    </div>
  )
}
```

- E por hora, para visualizarmos em tela, no arquivo que renderiza nossa interface gráfica(index.tsx) vamos comentar a `Table` e em seguida importar e criar a referência do componente `Form`(de forma temporária):

``` TSX
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  function selectedClient(client: Client) {
    // console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    // console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button>Novo Cliente</Button>
        </div>
        {/* <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient} 
        /> */}
        <Form />
      </Layout>
    </div>
  )
}
```

- Voltando no componente `Input` iremos aplicar classes de estilo nos elementos para melhorar sua visualização:

``` TSX
interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">
        {props.text}
      </label>
      <input 
        type={props.type ?? "text"} 
        value={props.value}
        readOnly={props.readOnly}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50 px-4 py-2
          ${props.readOnly ? "" : "focus:bg-white" {/*se somente leitura for passado, significa que é true e não vai ser aplicado nada, caso contrário será aplicado um foco quando clicado*/}} 
        `}
      />
    </div>
  )
}
```

- Agora no componente `Form` iremos definir os outros inputs(criando uma nova referência ao componente `Input` e passando os valores aos atributos):

``` TSX
import Input from "./Input";

interface FormProps {
  
}

export default function Form(props: FormProps) {
  return (
    <div>
      <Input text="Nome" value="Teste" />
      <Input text="Idade" type="number" value="10" />
    </div>
  )
}
```

- E nesse componente iremos criar dois estados(com o hook `useState`), um para controlar o nome/`name`:

``` TSX
import { useState } from "react";

import Input from "./Input";

interface FormProps {
  
}

export default function Form(props: FormProps) {

  const [name, setName] = useState();

  return (
    <div>
      <Input text="Nome" value="Teste" />
      <Input text="Idade" type="number" value="10" />
    </div>
  )
}
```

- E o valor inicial desse estado/state `name` iremos pegar a partir do cliente, e para isso vamos definir dentro da `interface` desse componente que esperamos receber via props um cliente/`client` do tipo `Client`.
E em seguida, vamos pegar o valor do state vem de `props.client.name`, mas só iremos acessar o nome caso o `client` esteja setado com `props.client?.name` e como valor padrão(caso `client` não esteja definido) vamos colocar uma string vazia "":

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const [name, setName] = useState(props.client?.name ?? "");

  return (
    <div>
      <Input text="Nome" value="Teste" />
      <Input text="Idade" type="number" value="10" />
    </div>
  )
}
```

- E o mesmo iremos fazer para o estado/state de idade/`age`, a diferença que caso `props.client?.age` não esteja definido o valor padrão será 0:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input text="Código" value="Teste" />)
        : (false)
      }
      <Input text="Nome" value="Teste" />
      <Input text="Idade" type="number" value="10" />
    </div>
  )
}
```

- E se esse `client` estiver setado e tiver `id` significa que estamos modificando algo que já existe, caso contrário significa que estamos criando um cliente novo.
Então iremos criar uma const chamada `id` que irá receber o id do client via props(`props.client.id`) e vamos usar o opctional chane(`props.client?.id`) para ele só acessar esse id caso o `client` estiver setado:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      <Input text="Nome" value="Teste" />
      <Input text="Idade" type="number" value="10" />
    </div>
  )
}
```

- E agora, se o `id` for diferente de vazio/`nul` podemos mostrar o código do usuário, através de uma renderização condicional:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0;

  return (
    <div>
      {id 
        ? (<Input text="Código" value="Teste" readOnly/>)
        : (false)
      }
      <Input text="Nome" value="Teste" />
      <Input text="Idade" type="number" value="10" />
    </div>
  )
}
```

- E agora iremos vincular os `values` dos `Inputs` para apontar para os estados definidos, no caso de `name` e `age` e o no caso do `código` irá aportar para a const `id`(pois não precisamos controlar o estado já que é somente leitura/readOnly):

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input text="Código" value={id} readOnly />)
        : (false)
      }
      <Input text="Nome" value={name} />
      <Input text="Idade" type={"number"} value={age} />
    </div>
  )
}
```

- Agora precisamos ter uma forma de alterar os campos de entrada(que não são somente leitura) e para isso dentro do componente `Input` iremos precisar receber uma função para dizer quando o valor foi modificado. E para isso, na `interface` iremos esperar receber um atributo/função opcional chamado valor mudou/`valueChanged` e nela iremos receber de volta o `value` do tipo `any` que irá retornar `void`:

``` TSX
interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
  valueChanged?: (value: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">
        {props.text}
      </label>
      <input 
        type={props.type ?? "text"} 
        value={props.value}
        readOnly={props.readOnly}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50 px-4 py-2
          ${props.readOnly ? "" : "focus:bg-white"} 
        `}
      />
    </div>
  )
}
```

- E uma vez que recebemos essa função podemos colocá-la dentro do evendo `onChange` do nosso `input`, ou seja, quando recebermos uma notificação que ouve uma mudança iremos receber um evento/`e` e iremos chamar a função `valueChanged` que recebemos em props e iremos passar como parâmetro para o `value` o evento/`e.target.value`:

``` TSX
interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
  valueChanged?: (value: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">
        {props.text}
      </label>
      <input 
        type={props.type ?? "text"} 
        value={props.value}
        readOnly={props.readOnly}
        onChange={e => props.valueChanged?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50 px-4 py-2
          ${props.readOnly ? "" : "focus:bg-white"} 
        `}
      />
    </div>
  )
}
```

- E agora, dentro de `Form` podemos passar para o atributo `valueChanged`(valor mudou) de `Input` a função que muda o estado do componente:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />
    </div>
  )
}
```

- E voltando no componente `Input` podemos definir que esperamos um parâmetro opcional `className` o qual iremos interpolar na div container desse elemente:

``` TSX
interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
  valueChanged?: (value: any) => void
  className?: string
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">
        {props.text}
      </label>
      <input 
        type={props.type ?? "text"} 
        value={props.value}
        readOnly={props.readOnly}
        onChange={e => props.valueChanged?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50 px-4 py-2
          ${props.readOnly ? "" : "focus:bg-white"} 
        `}
      />
    </div>
  )
}
```

- E no componente `Form` iremos passar uma margim botton de 5px/`mb-5` para os `Input` que precisam desse espaçamento:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
            className="mb-5"
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
        className="mb-5"
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />
    </div>
  )
}
```

- Por fim, iremos definir os botões de `Salvar` e `Cancelar` do nosso formulário/`Form`.
E para isso, primeiramente vamos no componente botão/`Button` e vamos definir que iremos esperar receber valores opcionais para os atributos cor inicial/`colorInitial` e cor final/`colorFinale` que serão utilizadas para difinir as cores do background gradiente dos botões:

``` TSX
interface ButtonProps {
  children: any
  colorInitial?: "from-green-400" | "from-blue-400" | "from-gray-400"
  colorFinale?: "to-green-700" | "to-blue-700" | "to-gray-700"
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`
      bg-gradient-to-r ${props.colorInitial} ${props.colorFinale}
      text-white mb-4 px-4 py-2 rounded-md 
    `}>
      {props.children}
    </button>
  )
}
```

- E para evitar erros futuros, iremos definir constantes com valores padrões(que serão tons de cinza) caso `colorInitial` e `colorFinale` não estejam definidos:

``` TSX
interface ButtonProps {
  children: any
  colorInitial?: "from-green-400" | "from-blue-400" | "from-gray-400"
  colorFinale?: "to-green-700" | "to-blue-700" | "to-gray-700"
}

export default function Button(props: ButtonProps) {

  const colorInitial = props.colorInitial ?? "from-gray-400";
  const colorFinale = props.colorFinale ?? "to-gray-700";

  return (
    <button className={`
      bg-gradient-to-r ${colorInitial} ${colorFinale}
      text-white mb-4 mr-4 px-4 py-2 rounded-md 
    `}>
      {props.children}
    </button>
  )
}
```

- Feito isso, dentro do `Form` podemos criar os novos `Button` passando aos atributo as cores desejadas:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
            className="mb-5"
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
        className="mb-4"
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />

      <div>
        <Button 
          colorInitial="from-blue-400" 
          colorFinale="to-blue-700"
        >
          {id ? "Alterar" : "Salvar"} {/*Se tiver id vai renderizar "Alterar" senão "Salvar"*/}
        </Button>
        <Button>
          Cancelar
        </Button>
      </div>
    </div>
  )
}
```

- Agora, vamos aplicar algumas classes de estilo para melhorar a parte visual:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
            className="mb-5"
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
        className="mb-4"
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />

      <div className="flex justify-end mt-7">
        <Button 
          colorInitial="from-blue-400" 
          colorFinale="to-blue-700"
        >
          {id ? "Alterar" : "Salvar"} 
        </Button>
        <Button>
          Cancelar
        </Button>
      </div>
    </div>
  )
}
```

- Agora, em index.tsx e vamos passar a propriedade obrigatória(client) para o `Form` para visualizarmos em tela o código sendo renderizado:

``` TSX
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana Goez", 34, "1"),
    new Client("Joana Gomes", 19, "2"),
    new Client("Beatriz Mendes", 24, "3"),
    new Client("João Garrido", 23, "4"),
    new Client("Daniel Malfaia", 30, "5"),
    new Client("Rafael Costa", 29, "6")
  ];

  function selectedClient(client: Client) {
    console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button 
            colorInitial="from-green-400" 
            colorFinale="to-green-700"
          >
            Novo Cliente
          </Button>
        </div>
        {/* <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient} 
        /> */}
        <Form client={clients[0]} />
      </Layout>
    </div>
  )
}
```

## Alterando entre Tabela/Table` e Formulário/Form

- No `Home`, vamos criar um estado(com o hook `useState`) que irá chamar visível/`visible` e nele teremos dois possíveis estados `table` ou `form` e por padrão irá inicializar como `table`:

``` TSX
import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    // console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    // console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button 
            colorInitial="from-green-400" 
            colorFinale="to-green-700"
          >
            Novo Cliente
          </Button>
        </div>
        <Table 
          clients={clients} 
          selectedClient={selectedClient} 
          excludedClient={excludedClient} 
        />
        <Form client={clients[0]} />
      </Layout>
    </div>
  )
}
```

- E agora, iremos fazer uma renderização condicional, se `visible` for igual/`===` a `table` então iremos renderizar a `div` do `Button` de inserir "Novo Cliente" e o componente `Table`, caso contrário(significa qie está definido `form`) iremos renderizar o componente `Form`:

``` TSX
import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    // console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    // console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form client={clients[0]} />)
        }        
      </Layout>
    </div>
  )
}
```

- E para fazer esse alternância primeiramente, dentro do componente `Button` vamos definir que queremos receber a uma função via porps dentro do atributo `onClick` de forma opcional e em seguida dentro do elemento `button` vamos passar para o evento `onclick` a função que esperamos receber via props dentro do atributo `onClick`(`props.onClick`):

``` TSX
interface ButtonProps {
  children: any
  colorInitial?: "from-green-400" | "from-blue-400" | "from-gray-400"
  colorFinale?: "to-green-700" | "to-blue-700" | "to-gray-700"
  onClick?: () => void
}

export default function Button(props: ButtonProps) {

  const colorInitial = props.colorInitial ?? "from-gray-400";
  const colorFinale = props.colorFinale ?? "to-gray-700";

  return (
    <button 
    onClick={props.onClick}
    className={`
      bg-gradient-to-r ${colorInitial} ${colorFinale}
      text-white mb-4 mr-4 px-4 py-2 rounded-md 
    `}>
      {props.children}
    </button>
  )
}
```

- Em seguida, voltando no componente principal `Home`, na referência ao componente `Button` vamos passar dentro do atributo `onClick` a função que seta a visibilidade/`setVisible` passando como valor `form`:

``` TSX
import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    // console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    // console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={() => setVisible("form")}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form client={clients[0]} />)
        }        
      </Layout>
    </div>
  )
}
```

- Agora, quando clicamos no botão "Novo Cliente" vamos para o formulário e esperando que quando clicarmos em "Cancelar" volte a ser exibido a tabela.
E para isso, dentro do componente `Form` vamos precisar receber os eventos quando o cliente for modificado, ou seja, quando clicar em "Alterar" ou "Salvar" e quando ele clicar em "Cancelar". 
Então, iremos esperar receber essas funções dentro dos atributos cliente mudou/`clientChanged`(no caso do `clientChange` espera receber como parâmetro o client do tipo `Client`) e cancelado/`canceled`:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
  cliendChanged?: (client: Client) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
            className="mb-5"
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
        className="mb-4"
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />

      <div className="flex justify-end mt-7">
        <Button 
          colorInitial="from-blue-400" 
          colorFinale="to-blue-700"
        >
          {id ? "Alterar" : "Salvar"} 
        </Button>
        <Button>
          Cancelar
        </Button>
      </div>
    </div>
  )
}
```

- E vamos passar essas funções que esperamos receber via props para o evento `onClick` dos `Button`:

``` TSX
import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
  cliendChanged?: (client: Client) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
            className="mb-5"
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
        className="mb-4"
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />

      <div className="flex justify-end mt-7">
        <Button onClick={() => props.cliendChanged?.(new Client(name, +age, id))} // se cliendChanged tiver sido passado/exigir iremos invocar a função passando com parâmentro a instância Client` que recebe como parâmetro name, age e id 
        // "+" na frente de age para garantir que o valor venha como tipo number
          colorInitial="from-blue-400" 
          colorFinale="to-blue-700"
        >
          {id ? "Alterar" : "Salvar"} 
        </Button>
        <Button onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}
```

- Agora, quando o evento `cliendChanged` for acionado ao "Salvar" ou "Alterar" ele já vai pegar o cliente modificado e isso significa que dentro do componente `Home` que contém a referência do componente `Form` podemos criar uma função para salvar o cliente/`saveClient` que irá receber um `client` do tipo `Cliente` e em seguida, podemos passar essa função como valor para o atributo `cliendChanged` do componente `Form`:

``` TSX
import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    // console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    // console.log(`Excluir ${client.name}`)
  }

  function saveClient(client: Client) {
    console.log(client)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={() => setVisible("form")}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={clients[0]} 
              cliendChanged={saveClient}
            />)
        }        
      </Layout>
    </div>
  )
}
```

- Além disso, para o atributo `canceled` de `form` vamos passar como valor a função que seta a visibilidade/`setVisible` passando como valor `table`(para voltar a renderização para a tabela):

``` TSX
import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    // console.log(`Editar ${client.name
  }

  function excludedClient(client: Client) {
    // console.log(`Excluir ${client.name}`)
  }

  function saveClient(client: Client) {
    console.log(client)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={() => setVisible("form")}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={clients[0]} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }        
      </Layout>
    </div>
  )
}
```

## Integrando Tabela/Table e Formulário/Form

- Outra coisa que vamos fazer é quando o usuário clicar no `Button` para "alterar" ou "salvar" volte para a `Table` e para isso, em `index.tsx` na função que estamos passando para esse botão chamada `saveClient` vamos chamar a função `setVisible` passando como valor "table":

``` TSX
import { useState } from "react";

// [...]

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {

  }

  function excludedClient(client: Client) {

  }

  function saveClient(client: Client) {
    setVisible("table");
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={() => setVisible("form")}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={clients[0]} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }        
      </Layout>
    </div>
  )
}
```

- Precisamos também criar um estado para armazenar o `client`.
Para isso, vamos criar o estado `client` com o hook `useState` no qual iremos informar que esse estado é do tipo `Client` e seu valor inicial será uma instância vazia(`Client.empy`) que definimos dentro da class `Client`:

``` TSX
import { useState } from "react";

// [...]

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {

  }

  function excludedClient(client: Client) {

  }

  function saveClient(client: Client) {
    setVisible("table");
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={() => setVisible("form")}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={clients[0]} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }   
      </Layout>
    </div>
  )
}
```

- E esse `client` do estado significa que é examente o `client` selecionado, então ao invés de passarmos diretamente o objeto `clients` com a sua posição, vamos passar o estado `client`.
E quando selecionarmos o cliente e a função `cliendChanged` for chamada, faz todo sentido chamarmos a função `setClient` passando o `client` recebido como parâmetro e em seguida para abrir o `form` vamos chamar o `setVisible` passando `form`:

``` TSX
import { useState } from "react";

// [...]

import Client from "../core/Client";

export default function Home() {

  const clients = [
    // [...]
  ];

  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");

  }

  function excludedClient(client: Client) {
   
  }

  function saveClient(client: Client) {
    setVisible("table");
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={() => setVisible("form")}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={client} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }        
      </Layout>
    </div>
  )
}
```

- E para evitar de quando formos criar um "Novo Cliente" ele puxe o último selecionado/editado, vamos criar uma função chamada `newClient` a qual irá setar o estado do cliente/`setClient` como vazio, passando a criação de uma instância de cliente vazia/`Client.empy` e em seguida setando a visiblidade/`setVisible` como formulário/`form`.
Feito isso, vamos passar essa função `newClient` para ser chamada quando o evento `onClick` do `Button` "Novo Cliente" for acionado:

``` TSX
import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana Goez", 34, "1"),
    new Client("Joana Gomes", 19, "2"),
    new Client("Beatriz Mendes", 24, "3"),
    new Client("João Garrido", 23, "4"),
    new Client("Daniel Malfaia", 30, "5"),
    new Client("Rafael Costa", 29, "6")
  ];

  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function excludedClient(client: Client) {
    
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  function saveClient(client: Client) {
    setVisible("table");
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={newClient}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={client} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }        
      </Layout>
    </div>
  )
}
```

## Configurando Firebase no Projeto

- Na raiz do nosso projeto, vamos criar um arquivo chamado `.env.local` e nele iremos colocar algumas variáveis de ambiente nele, para não colocarmos essa variáveis sensíveis em arquivos que vão para o repositório do github;

- Além disso, dentro de `src` vamos criar uma pasta chamada `backend` e dentro dela vamos criar um arquivo chamado `config.ts` e nele iremos configurar o firebase;

- Vamos parar o nosso servidor e em seguida vamos instalar no projeto o firebase usando o comando a seguir:

```
npm install firebase
    i
```

- Agora voltando no `firebase`(https://console.firebase.google.com/u/0/project/next-crud-236de/firestore/data/~2F?hl=pt-br) vamos precisar das informações que estão `Configurações do projeto`. 
Vamos copiar as linhas `apiKey`, `authDomain` e `projectId`; e em seguida vamos colocar dentro do arquivo `.env.local`. Vamos transformar os nomes das variáveis para upercase e remover as aspas e colocar o simbolo de igual entre a chave e o valor:

```
API_KEY=[valor]
AUTH_DOMAIN=[valor]
PROJECT_ID=[valor]
```

- E especificamente em projetos `Next.js` as chaves devem iniciar com `NEXT_PUBLIC`, porque essa é a forma que conseguimos ter acesso a essas chaves dentro da aplicação web.
Vamos acrescentar também `FIREBASE` ao nome para deixar claro que se essas chaves se tratam dele:

``` 
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBoP0AURXNZKRo14ukWuHGmMSzPUnGN9wE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=next-crud-236de.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=next-crud-236de
```

- Agora, podemos startar nosso projeto novamento:

```
npm run dev ou yarn run dev
```

- E agora vamos para o arquivo `config.ts` e nele iremos importar o `firebase` e o `firestore`;
Em seguida, iremos fazer alguns testes. Se `firebase.apps.length` significa que já foi inicializado, então, caso `firebase.apps.length` não exista, e para isso vamos usar a negação na frente `!` iremos inicializar o `firebase` passando um objeto com os parâmetros `apiKey`, `authDomain` e `projectId` que são exatamente os três valores que temos dentro do arquivo `.env.local`.
E no final, iremos exportar por padrão/`export default` o `firebase` que acabamos de inicializar:

``` TS
import firebase from "firebase";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  })
}

export default firebase;
```

## Repositório de Clientes/Clients

- Dentro de `src/core` iremos criar um arquivo chamado cliente repositório/`ClientRepository.ts` e esse arquivo vai ser uma `interface` do TypeScript.
Então dentro do arquivo iremos exportar por padrão/`export default` a `interface` chamada `ClientRepository` e essa interface terá três métodos(salvar/`save`, excluir/`delete` e o obterTodos/`getAll`):

``` TS
import Client from "./Client";

export default interface ClientRepository {
  save(client: Client): Promise<Client> // esse método espera receber um client do tipo Client e retorna uma promise do tipo Client
  delete(client: Client): Promise<void> // esse método espera receber um client do tipo Client e retorna uma promise vazia
  getAll(): Promise<Client[]> // esse método  não espera receber nada e retorna uma promise do tipo Client, que na verdade é um array/lista de clientes
}
```

- Agora, dentro de `src/backend` vamos criar uma pasta chamada `database` or `db` e nela podemos criação um arquivo coleção de clientes/`CollectionClients.ts` esse arquivo vai ser uma classe.
Então dentro do arquivo iremos exportar por padrão/`export default` a `class` chamada `ColletionClients` e essa classe vai implementar/`implements` a interface `ClientRepository`:

``` TS
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {
  
}
```

- E agora iremos implementar os três métodos que essa `interface` exige:

``` TS
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }
}
```

- Agora, vamos importar o `firebase` de dentro do nosso arquivo `config`.
Exite dentro do `firebase` temos o `conversor`, ele é um objeto que contém dois métodos e um dos métodos é o `toFirestore` e esse método vai receber um `client` do tipo da classe `Client` e vai devolver um objeto apto para ser persistido no `firestore`. Porque o nosso `client` é uma classe e por padrão essa classe não vai ser convertida automáticamente em JSON, então quando quisermos converter esse `client` para o `firestore` precisamos retornar/`return` um objeto com os dados que queremos converter:

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    }
  }
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }
}
```

- E o outro método desse objeto é o `fromFirestore`, esse método vai devolver um `snapshot` e o `options`:

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot, options) {
      
    }
  }
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }
}
```

- Podemos também especificar os tipos de `snapshot` e `options`: 

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOPtions) {

    }
  }
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }
}
```

- Esse são os dois tipos que recebemos do `fromFirebase`, ou seja, estamos recebendo os dados do `firebase` e queremos retornar um cliente, ou seja, a resposta dessa função vai retornar um objeto do tipo `Client`:

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOPtions): Client {

    }
  }
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }
}
```

- Então dentro dessa função `fromFirestore` devemos retornar algo.
E para isso, vamos criar uma constante chamada dados/`data` que irá receber os dados a partir de `snapshot.data` e vamos passar `options` como parâmetro; E para retornar/`return` vamos criar uma nova instância de `Client` passando as informações a partir do que recebemos na const `data`(data.name, data.age), somente o `id` que vamos pegar a partir do `snapshot`(snapshot.id), porque o id foi gerado pelo próprio firebase:

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOPtions): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    }
  }
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }
}
```

- Então, basicamente esse `conversor` que pode inclusive ser privado(colocando o `#` na frente), em `toFirestore`(paraFirestore) ele vai converter uma classe(`Client`) para algo que vai ser persistido no `firestore` e em `fromFirestore`(deFirestore) vamos receber algo do `firestore` e vamos converter para a nossa classe. 
Agora não precisamos mais nos preocupar em fazer isso dentro dos métodos/funções `save`, `delete` e `getAll`(veremos mais a frente como fazer);


- Iremos criar também uma coleção/`collection` que será um método privado e esse método vai retornar a coleção de clientes/`clients` que vamos pegar a partir do `firebase` usando os métodos `firestore().collection("clients")` e "em cima" da coleção retornada vamos aplicar o método `withConverter` passando como parâmetro o `conversor` que criamos acima(`withConverter(this.#conversor)`) para converter a coleção de acordo com o que foi definido no conversor:

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  #conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOPtions): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    }
  }
  
  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async getAll(): Promise<Client[]> {
    return null;
  }

  #collection() {
    return firebase
      .firestore().collection("clients")
      .withConverter(this.#conversor);
  }
}
```

- E agora, para cada um dos métodos `save`, `delete` e `getAll` vamos usar essa `collection` e "em cima" dela vamos fazer o salvar, excluir, listar todos:

``` TS
import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  #conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOPtions): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    }
  }
  
  async save(client: Client): Promise<Client> {
    // para salvar, termos dois cenários:
    if(client?.id) { // primeiro, se o client.id estiver setado significa que vamos alterar
      // await, pois vai ser de forma assíncrona
      await this.#collection().doc(client.id).set(client); // então para alterar, dentro da coleção de clientes, conseguimos acessar um cliente específico que é um documento/doc a partir do id dele(client.id) e em seguida, após acessar o cliente em questão podemos chamar o método set para setar as alterações
      return client; // se der tudo certo, vamos retornar o client com as alterações
    } else { // caso contrário, se o id não estiver setado significa que vamos salvar
      const docRef = this.#collection().add(client) // o método add retorna uma Promise de um DocumentReference, e como queremos pegá-lo vamos colocar um await e armazenar na constante docRef 
      const doc = await docRef.get(); // o método get retorna uma Promise de um DocumentSnapshop, e como queremos pegá-lo vamos colocar um await e armazenar na constante doc
      return doc.data(); // e apartir do doc utilizando o método data conseguimos pegar o cliente 
    }
  }

  async delete(client: Client): Promise<void> {
    return this.#collection().doc(client.id).delete(); // dentro da coleção de clientes, conseguimos acessar um cliente específico que é um documento/doc a partir do id dele(client.id) e em seguida, após acessar p cliente em questão podemos chamar o método delete
  }

  async getAll(): Promise<Client[]> {
    const query = await this.#collection().get() // esse método retorna uma Promise de um QuerySnapshot, e como queremos pegá-lo vamos colocar um await e armazenar na constante query 
    return query.docs.map(doc => doc.data()) ?? []; // e apartir de query vamos ter acesso aos documentos
  }

  #collection() {
    return firebase
      .firestore().collection("clients")
      .withConverter(this.#conversor);
  }
}
```
