import nock from 'nock';
import { GetItemByIDOutput } from './procedures/get-item-by-id.procedure';
import { SearchItemsOutput } from './procedures/search-items.procedure';

export function setupMocks(nock: nock.Scope) {
    nock.get('/items')
        .query({ q: 'empty' })
        .reply(200, {
            author: { name: 'Gustavo', lastname: 'Carvalho' },
            categories: [],
            items: []
        } satisfies SearchItemsOutput);

    nock.get('/items').query({ q: 'error' }).reply(500, {});

    nock.get('/items')
        .query({ q: 'success' })
        .reply(200, {
            author: { name: 'Gustavo', lastname: 'Carvalho' },
            categories: ['Cellphones', 'iPhone'],
            items: [
                {
                    id: 'mock-id',
                    condition: 'new',
                    free_shipping: true,
                    price: { currency: 'BRL', amount: 10 },
                    title: 'mock-title-1',
                    picture: 'http://mock-url'
                },
                {
                    id: 'mock-id-2',
                    condition: 'used',
                    free_shipping: false,
                    price: { currency: 'BRL', amount: 10 },
                    title: 'mock-title-2',
                    picture: 'http://mock-url'
                }
            ]
        } satisfies SearchItemsOutput);

    nock.get('/items/ML-ID-SUCCESS').reply(200, {
        author: { name: 'Gustavo', lastname: 'Carvalho' },
        categories: ['Cellphones', 'iPhone'],
        item: {
            id: 'mock-id',
            condition: 'new',
            free_shipping: true,
            price: { currency: 'BRL', amount: 10 },
            title: 'mock-title-1',
            picture: 'http://mock-url',
            description: 'mock-product-description',
            sold_quantity: 10
        }
    } satisfies GetItemByIDOutput);

    nock.get('/items/ML-ID-ERROR').reply(500, {});
}
