<p align="center">
  <img src="./docs/meli-logo.png" alt="Logo do Projeto" width="200"/>
</p>

<h1 align="center">🌟 Meli Marketplace</h1>

Esse projeto é um case de monorepo de microfrontends para um marketplace, inspirado no Mercado Livre. Ele inclui uma funcionalidade de pesquisa de produtos, onde os usuários podem buscar, visualizar os resultados e acessar detalhes dos itens, tudo de forma modular, com componentes independentes que podem ser atualizados ou escalados separadamente.

Hospedado em https://meli-marketplace-root.vercel.app/

## 🖥️ Apps

| App                                                               | Descrição                             |
| ----------------------------------------------------------------- | ------------------------------------- |
| [`@marketplace/bff`](./apps/marketplace-bff/)                     | BFF dos Microfrontends                |
| [`@marketplace/marketplace-mf-root`](./apps/marketplace-mf-root/) | Configuração da raiz do microfrontend |
| [`@marketplace/navbar`](./apps/navbar-mf/)                        | Microfrontend de Navbar               |
| [`@marketplace/product`](./apps/product-mf/)                      | Microfrontend de Produtos             |
| [`@marketplace/search`](./apps/search-mf/)                        | Microfrontend de Pesquisa             |

## 📦 Pacotes

| Pacote                                                     | Descrição                                  |
| ---------------------------------------------------------- | ------------------------------------------ |
| [`@meli/design-tokens`](./packages/design-tokens/)         | Design Tokens                              |
| [`@meli/icons`](./packages/icons/)                         | Icons do Meli                              |
| [`@meli/ui`](./packages/ui/)                               | Design System                              |
| [`@meli/currency-utis`](./packages/currency-utils/)        | Pacote de utilidades para lidar com moedas |
| [`@meli/typescript-config`](./packages/typescript-config/) | Pacote de predefinições de typescript      |
| [`@meli/estlint-config`](./packages/estlint-config/)       | Pacote de predefinições de eslint          |

## 🛠 Tecnologias Utilizadas

-   [Turbo Repo](https://turbo.build/repo/docs) - Gerenciamento de Workspaces e Monorepos.
-   [Express](https://expressjs.com/) - Servidor em node para o BFF.
-   [Singla SPA](https://single-spa.js.org/) - Orquestração de Microfrontends.
-   [React](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuário.
-   [TypeScript](https://www.typescriptlang.org/) - Superconjunto de JavaScript que adiciona tipagem estática.
-   [Styled Components](https://styled-components.com/) - Estilização com CSS-in-JS.
-   [React Router](https://reactrouter.com/) - Gerenciamento de rotas.
-   [Jest](https://jestjs.io/) - Teste unitários e de integração.
-   [Nock](https://github.com/nock/nock) - Mock de requests HTTP para testes de integração.

## 🏢 Visão geral da arquiteura

```mermaid
flowchart TD
     subgraph apps

        root[@marketplace/mf-root]
        navbar(@marketplace/navbar-mf)
        product(@marketplace/product-mf)
        search(@marketplace/search-mf)
        bff(@marketplace/bff)

        root --> navbar
        root --> product
        root --> search

        search --> bff
        product --> bff

    end

    subgraph packages
        subgraph tools
            typescript(@meli/typescript-config)
            eslint(@meli/estlint-config)
        end

        subgraph design-system
            tokens(@meli/design-tokens)
            icons(@meli/icons)
            ui(@meli/ui)

            ui --> icons
            ui --> tokens
        end

        subgraph utils
            currency(@meli/currency-utis)
        end
    end
```

## 📦 Instalação e Configuração

### Pré-requisitos

-   Node.js (versão 18.18.0+)
-   yarn

### Passos para rodar o projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/gstcarv/meli-marketplace-frontend.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd meli-marketplace-frontend
    ```

3. Instale as dependências:

    ```bash
    yarn install
    ```

4. Execute o servidor de desenvolvimento:

    ```bash
    yarn dev
    ```

5. Acesse o projeto no navegador:

    ```
    http://localhost:9000
    ```

## 🧪 Testes

Para rodar os testes, execute:

```bash
yarn test
```

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
