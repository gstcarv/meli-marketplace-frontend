export const config = {
    port: process.env.PORT,
    author: {
        name: process.env.AUTHOR_NAME || 'Gustavo',
        lastname: process.env.AUTHOR_LASTNAME || 'Carvalho'
    },
    services: {
        meli: {
            url: process.env.MELI_SERVICE_URL || 'https://api.mercadolibre.com'
        }
    }
};
