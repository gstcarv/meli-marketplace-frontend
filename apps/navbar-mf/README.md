# Navbar Microfrontend

Esse microfront é responsável por gerenciar e manter o header do app, que inclui uma barra de pesquisa. Esse microfrontend pode incluir funcionalidades adicionais, como sugestões de autocompletar, acesso a categorias populares, entre outros.

Hospedado em https://meli-marketplace-navbar.vercel.app/marketplace-navbar.js

```mermaid
flowchart LR
    main["@markplace/navbar"]

    menu[Menu de Navegação]-->main
    barra[Barra de Pesquisa]-->main
    carrinho[Carrinho de Compras]-->main
    login[Login/Logout]-->main
    perfil[Perfil do Usuário]-->main
    notificacoes[Notificações]-->main
    fale[Fale Conosco]-->main
    localizacoes[Seleção de País]-->main
    idiomas[Idiomas e Moedas]-->main

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
    http://localhost:9001
    ```

## 🧪 Testes

Para rodar os testes, execute:

```bash
yarn test
```
