# Search Microfrontend

Esse microfront é responsável por lidar com exibições de pesquisas de produtos, seja das mais simples ou das mais avançadas.

Hospedado em https://meli-marketplace-search.vercel.app/marketplace-search.js

```mermaid
flowchart LR
    main["@markplace/search"]

    resultados["Resultados de Pesquisa"]-->main
    sugestoes["Sugestões de Pesquisa"]-->main
    filtros["Filtros Avançados"]-->main
    ordenacao["Ordenação"]-->main
    pagina["Página de Categorias"]-->main
    resultados["Resultados em Grade ou Lista"]-->main
    comparacao["Comparação de Produtos"]-->main
```

## 📦 Instalação e Configuração

### Pré-requisitos

-   Node.js (versão 18.18.0+)
-   yarn

### Como rodar esse microfrontend de forma independente?

1. Instale as dependências:

    ```bash
    yarn install
    ```

2. Execute o servidor de desenvolvimento:

    ```bash
    yarn dev:standalone
    ```

3. Acesse o projeto no navegador:

    ```
    http://localhost:9002
    ```

## 🧪 Testes

Para rodar os testes, execute:

```bash
yarn test
```
