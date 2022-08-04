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

- Outra coisa, que podemos nos atentar é que dentro da pasta _pages_ temos dois arquivos:

```
_app.js
index.js
```

- Eles são arquivos javascript só que dentro deles temos códigos _jsx(javascript com react)_, desse modo, podemos mudar a extensão desses arquivos para que o vscode consiga lidar melhor com eles.

## Estrutura de pastas

- No momento vamos ressaltar 3 pastas que o next.js cria no nosso projeto:

```
public
pages
styles
```# next-crud
