module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', // ou 'jsdom', dependendo do seu ambiente
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest' // Transforma arquivos .ts e .tsx usando ts-jest
    },
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'], // Define o padrão para arquivos de teste
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json' // Usa o seu tsconfig.json
        }
    }
};
