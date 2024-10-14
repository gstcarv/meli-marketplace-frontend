import { setupMocks } from '../../modules/items/mocks';
import nock from 'nock';

export function startMockServer() {
    const bff = nock('http://localhost:9100')
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        })
        .persist();

    setupMocks(bff);
}
