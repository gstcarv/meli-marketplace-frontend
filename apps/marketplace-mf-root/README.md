# Marketplace Microfrontend Root

Esse microfrontend é responsável por gerenciar e orquestrar todos os outros microfronts de marketplace.

## 📦 Instalação e Configuração

### Pré-requisitos

-   Node.js (versão 18.18.0+)
-   yarn

### Como rodar esse projeto?

1. Crie um arquivo **.env** com essas informações:

    ```
    MARKETPLACE_ROOT_CONFIG=http://localhost:9000

    # MARKETPLACE_NAVBAR_URL=http://localhost:9001
    MARKETPLACE_NAVBAR_URL=https://meli-marketplace-navbar.vercel.app

    # MARKETPLACE_SEARCH_URL=http://localhost:9002
    MARKETPLACE_SEARCH_URL=https://meli-marketplace-search.vercel.app

    # MARKETPLACE_PRODUCT_URL=http://localhost:9003
    MARKETPLACE_PRODUCT_URL=https://meli-marketplace-product.vercel.app
    ```

    Ps: No caso de desenvolvimento local, você pode substituir a url de produção para a URL do ambiente local no microfront que irá desenvolver. Dessa forma, não precisará rodar todos os microfrontends.

2. Instale as dependências:

    ```bash
    yarn install
    ```

3. Execute o servidor de desenvolvimento:

    ```bash
    yarn dev
    ```

4. Acesse o projeto no navegador:

    ```
    http://localhost:9000
    ```

## ❓ Como adicionar novos microfrontends

Exemplo: example-mf

1. Crie o novo microfront em /apps

2. Adicione name e version e os scripts de dev no package.json:

    ```json
    {
        "name": "@marketplace/example",
        "version": "1.0.0",
        "scripts": {
            "dev": "webpack serve --port 9005",
            "dev:standalone": "webpack serve --env standalone --port 8002",
            "build": "concurrently yarn:build:*",
            "build:webpack": "webpack --mode=production",
            "analyze": "webpack --mode=production --env analyze",
            "lint": "eslint src --ext js,ts,tsx",
            "format": "prettier --write .",
            "check-format": "prettier --check .",
            "test": "cross-env BABEL_ENV=test jest --passWithNoTests",
            "test:coverage": "cross-env BABEL_ENV=test jest --coverage --passWithNoTests",
            "watch-tests": "cross-env BABEL_ENV=test jest --watch",
            "coverage": "cross-env BABEL_ENV=test jest --coverage",
            "build:types": "tsc",
            "ts-check": "tsc"
        }
    }
    ```

3. Altere o _projectName_ em **webpack.config.js** de **example-mf**

    ```js
      module.exports = (webpackConfigEnv, argv) => {
        const defaultConfig = singleSpaDefaults({
            orgName: 'marketplace',
            projectName: 'example',
            webpackConfigEnv,
            argv
        });
    ```

4. Adicione a URL com a porta no **.env.example** e no **.env** de **marketplace-mf-root**:

    ```
        MARKETPLACE_EXAMPLE_URL=http://localhost:9005
    ```

5. Adicione a variável nos templates em **webpack.config.js** de **marketplace-mf-root**

    ```js
        new HtmlWebpackPlugin({
                ...,
                templateParameters: {
                    ...,
                    exampleMfUrl: process.env.MARKETPLACE_EXAMPLE_URL || 'http://localhost:9005'
                },
                ...
        })
    ```

6. Adiciona os import-maps do single-spa em **src/index.js** de **marketplace-mf-root**

    ```html
    <script type="systemjs-importmap">
        {
            "imports": {
                ...,
                "@marketplace/example": "<%= exampleMfUrl %>/marketplace-example.js"
            }
        }
    </script>
    ```

7. Adiciona a aplicação em **src/microfrontend-layout.html** de **marketplace-mf-root**

    ```html
    <route default>
        ...
        <application name="@marketplace/example" />
    </route>
    ```

8. Rode **yarn dev** em **example-mf** e reinicie o **marketplace-mf-root**
