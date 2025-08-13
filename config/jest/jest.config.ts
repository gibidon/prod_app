import path from 'path';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    modulePaths: [
        '<rootDir>src',
    ],
    globals: {
        __IS_DEV__: true,
        __API__: '',
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
