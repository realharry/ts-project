const { createDefaultPreset } = require("ts-jest");

import type { Config } from 'jest';
const tsJestTransformCfg = createDefaultPreset().transform;


const config: Config = {
  roots: [
    'src',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    'src/**/*.test.ts',
    'src/**/*.spec.ts',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
  ],
  transform: {
    ...tsJestTransformCfg,
  },
};

export default config;
