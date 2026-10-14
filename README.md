# Portfólio — desenvolvedor generalista

Projeto em português com React, TypeScript, Vite e Tailwind CSS. Visual monocromático, layout responsivo e quatro páginas de estudos de caso com rotas por hash, compatíveis com GitHub Pages sem regras de redirecionamento.

## Executar

Requisitos: Node.js 22 e pnpm 10.

```sh
pnpm install
pnpm dev
```

Para verificar tipos e gerar a versão de produção:

```sh
pnpm build
pnpm preview
```

## Personalizar

Edite `src/content.ts`: nome, iniciais, e-mail e links públicos. Os contatos ficam ocultos enquanto vazios; nenhum link de cliente é necessário. Atualize também o título inicial em `index.html`. Os campos “Seu nome” e “SN” são placeholders intencionais.

Os quatro estudos documentam somente a participação confirmada. A stack deste portfólio não descreve a stack dos projetos apresentados. Apenas WordPress e banco de dados foram confirmados para o primeiro caso; os demais não têm stack divulgada. Não há métricas ou resultados quantitativos atribuídos aos trabalhos.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta**, incluindo `.github`, `pnpm-lock.yaml` e os arquivos de configuração. Não envie `node_modules` ou `dist`.
2. Use a branch `main`. Se preferir outra, ajuste o gatilho em `.github/workflows/deploy.yml`.
3. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
4. Faça um push para `main` ou execute manualmente a ação “Publicar no GitHub Pages”.
5. Aguarde a conclusão do trabalho `deploy`; o endereço aparece no ambiente `github-pages`.

O `base: './'` no Vite permite servir o pacote tanto na raiz como no caminho de um repositório. Exemplos de rotas: `/#/projetos/manutencao-web` e `/nome-do-repositorio/#/projetos/dashboard-comercial`. Recarregar uma página individual funciona porque o caminho após `#` é tratado pelo navegador.

O workflow instala as versões travadas no lockfile, verifica TypeScript, compila e publica `dist`. A publicação depende de um repositório e de Pages habilitado pelo titular. Este pacote não cria nem publica um repositório automaticamente.

## Conteúdo e confidencialidade

- Nenhum nome de cliente, URL original, credencial, código confidencial ou dado real foi incluído.
- As quatro interfaces são **recriações ilustrativas**, produzidas em HTML/CSS. Não são capturas nem reproduções fiéis dos sistemas originais.
- Barras, campos e gráficos são elementos decorativos sem dados e ocultos de tecnologias assistivas; as legendas identificam as ilustrações.
- Não há serviços de análise, formulários que enviam dados, fontes remotas nem chamadas a APIs de clientes.

## Estrutura

```text
src/content.ts                Perfil e conteúdo editorial
src/main.tsx                  Páginas, navegação e ilustrações
src/styles.css                Tailwind, estilos e responsividade
vite.config.ts                Configuração do build
.github/workflows/deploy.yml   Publicação no Pages
```

Há link para pular ao conteúdo, navegação por teclado, foco visível e respeito à preferência por movimento reduzido. Antes de publicar, substitua os placeholders e revise o conteúdo conforme seus contratos.
