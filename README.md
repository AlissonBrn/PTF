# Projeto Portfólio

Esse projeto de portfólio foi desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Requisitos

- Node.js 22
- pnpm 10

## Rodar localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```sh
pnpm install
pnpm dev
```

Abra o endereço exibido no terminal.

## Gerar a versão de produção

```sh
pnpm build
```

O comando verifica os tipos do TypeScript e gera os arquivos do site na pasta `dist`.

Para conferir essa versão localmente:

```sh
pnpm preview
```

## Editar o conteúdo

- `src/content.ts`: nome, iniciais, contatos e textos dos projetos. Links de contato vazios ficam ocultos.
- `src/main.tsx`: estrutura das páginas, navegação e ilustrações.
- `src/styles.css`: cores, tipografia, espaçamento e layout responsivo.
- `index.html`: título inicial e descrição do site.
- `vite.config.ts`: configuração do Vite.

As páginas dos projetos usam rotas por hash, como `#/projetos/manutencao-web`. Isso permite abrir e recarregar os estudos de caso no GitHub Pages sem configurar redirecionamentos.

## Publicar no GitHub Pages

1. Envie o conteúdo do projeto para a branch `main` do repositório, incluindo a pasta `.github` e o arquivo `pnpm-lock.yaml`.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Faça um push para `main` ou execute o workflow **Publicar no GitHub Pages** pela aba **Actions**.

O workflow em `.github/workflows/deploy.yml` instala as dependências, gera o build e publica a pasta `dist`. O endereço do site aparece no ambiente `github-pages` ao concluir a publicação.

Para usar outra branch, altere `branches` no arquivo do workflow. A configuração `base: './'` permite publicar o site na raiz ou no caminho do repositório.

Se a publicação falhar com **Get Pages site failed**, confira se a opção **GitHub Actions** está selecionada em **Settings → Pages** e execute novamente o workflow.
