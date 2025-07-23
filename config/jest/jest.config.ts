import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    rootDir: '../../',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },

    moduleNameMapper: {
        '\\.(scss|css)$': 'identity-obj-proxy',
    },

    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    clearMocks: true,
    coverageProvider: 'v8',
    coveragePathIgnorePatterns: ['/node_modules/'],

    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};

export default config;
