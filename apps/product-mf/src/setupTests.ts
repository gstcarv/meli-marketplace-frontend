import 'jest-styled-components';
import * as bff from '@marketplace/bff';

beforeAll(() => {
    bff.startMockServer();
    console.error = jest.fn();
});
