/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "vue", "ts"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window)/)"],

  roots: ["<rootDir>"],

  testEnvironment: "jsdom",

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};

export default config;
