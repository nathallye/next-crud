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

## Criação dos componentes Layout e Título


- Em `src/components` vamos criar o componente funcional `Layout.js`:

``` TSX
import React from "react";

export default function Layout(props) {
  return (
    <div>Layout</div>
  )
}

```

- Na `div` vamos inserir o `className` e como vamos usar um conjunto de classes vamos abrir chaves{} e inserir uma tamplet string(``) para trabalharmos com multiplas linhas:

``` TSX
import React from "react";

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
import React from "react";

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
import React from "react";

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
import React from "react";

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
import React from "react";

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
import React from "react";

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
import React from "react";
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
import React from "react";
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
import React from "react";
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
import React from "react";
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
import React from "react";

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
import React from "react";
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
import React from "react";
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
