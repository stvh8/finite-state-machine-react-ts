import * as path from "node:path";

import react from "@vitejs/plugin-react-swc";
import {
  defineConfig,
  loadEnv,
  UserConfig,
} from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";
import type { InlineConfig } from "vitest";
import { configDefaults } from "vitest/config";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

const coverageExclude: string[] = configDefaults.coverage?.exclude || [];
const testExclude: string[] = configDefaults.exclude || [];

const minimumCoveragePercent = 90;

interface TConfigProperties {
  mode: string;
}

// https://vitejs.dev/config/
/**
 * @description default config
 * @param properties - TConfigProperties
 * @param properties.mode - the env mode
 * @returns - the default config
 */
export default ({ mode }: TConfigProperties) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  const defaultPort = 3000;
  const PORT = Number(process.env.VITE_PORT) || defaultPort;

  return defineConfig({
    build: { sourcemap: false },
    plugins: [
      mkcert(),
      react(),
      tsconfigPaths(),
    ],
    preview: { port: PORT },
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    server: {
      host: "localhost",
      port: PORT,
    },
    target: "esnext",
    test: {
      coverage: {
        all: true,
        branches: minimumCoveragePercent,
        exclude: [
          ...coverageExclude,
          "src/init.ts",
          "src/main.tsx",
          "src/utils/rtlHelpers.tsx",
          ".storybook/*",
          "src/**/*.stories.*",
        ],
        functions: minimumCoveragePercent,
        lines: minimumCoveragePercent,
        provider: "v8",
        statements: minimumCoveragePercent,
      },
      css: true,
      environment: "jsdom",
      exclude: [
        ...testExclude,
        "src/main.tsx",
        "src/init.ts",
        "src/vite-environment.d.ts",
        "test",
      ],
      globals: true,
      setupFiles: [
        "./test/setupTests.ts",
      ],
    },
  } as VitestConfigExport);
};
