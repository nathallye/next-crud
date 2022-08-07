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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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
  clients: Client[],
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

- Agora, dentro do `td` podemos criar os botões/`button` e nele vamos usar os ícones que definimos dentro do arquivo `Icon`:

``` TSX
import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void,
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void,
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void,
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void,
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void,
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
import { EditIcon, TrashIcon} from "./Icon";

interface TableProps {
  clients: Client[],
  selectedClient?: (client: Client) => void,
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