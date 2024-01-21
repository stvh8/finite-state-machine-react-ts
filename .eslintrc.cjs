module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:radar/recommended",
    "plugin:unicorn/recommended",
    "plugin:jsdoc/recommended",
    "plugin:json/recommended",
    "plugin:security/recommended",
    "plugin:node/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: [".json"],
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prefer-arrow",
    "modules-newlines",
    "radar",
    "unicorn",
    "typescript-sort-keys",
    "newline-destructuring",
    "jsdoc",
    "json",
    "unused-imports",
    "react",
    "react-hooks",
    "react-refresh",
  ],
  ignorePatterns: ["src/utils/logger.ts", "api-reference/infonova"],
  rules: {
    // ESLint Rules
    "array-bracket-newline": [
      "error",
      {
        minItems: 1,
        multiline: true,
      },
    ],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": [
      "error",
      {
        minItems: 2,
        multiline: true,
      },
    ],
    "arrow-body-style": ["error", "always"],
    "brace-style": "off",
    camelcase: "error",
    "comma-dangle": "off",
    complexity: [
      "off",
      {
        max: 20,
      },
    ],
    "constructor-super": "error",
    curly: "error",
    "dot-notation": "off",
    "eol-last": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "handle-callback-err": ["error", "^(err|error|anySpecificError)$"],
    "id-blacklist": [
      "error",
      "any",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-match": "error",
    indent: "off",
    "max-classes-per-file": ["error", 1],
    "max-len": [2, {code: 1300, ignorePattern: "^import\\W.*"}],
    "max-params": ["error", 3],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [0, 1],
      },
    ],
    "node/no-missing-import": "off",
    "no-nested-ternary": "error",
    "no-multiple-empty-lines": ["error", {max: 1, maxEOF: 0}],
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-return-await": "off",
    "no-shadow": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "node/no-unpublished-import": [
      "error",
      {
        allowModules: [
          "type-fest",
          "vite",
          "vitest",
          "vite-plugin-mkcert",
          "vite-tsconfig-paths",
          "@vitejs/plugin-react-swc",
          "@testing-library/react",
          "@testing-library/jest-dom",
          "@storybook/react",
          "@storybook/test"
        ],
      },
    ],
    "node/no-extraneous-import": [
      "error",
      {
        allowModules: ["@mui/system"],
      },
    ],
    "no-useless-concat": "error",
    "no-var": "error",
    "object-curly-newline": ["error", {multiline: true}],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-linebreak": ["error", "before"],
    "prefer-const": "error",
    "prefer-destructuring": [
      "off",
      {
        array: true,
        object: true,
      },
    ],
    "prefer-template": "error",
    "radar/cognitive-complexity": ["error", 25],
    radix: "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",

    // Import Plugin Rules
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-deprecated": "off",
    "import/no-mutable-exports": "error",
    "import/no-named-export": "off",
    "import/no-self-import": "error",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "import/no-extraneous-dependencies": "off",

    // import/extensions Rules
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // JSDoc Plugin Rules
    "jsdoc/require-jsdoc": [
      1,
      {
        "require": {
          "ArrowFunctionExpression": true,
          "FunctionExpression": true,
        }
      }
    ],
    "jsdoc/check-param-names": "off",
    // "jsdoc/check-tag-names": [
    //   "warn",
    //   {
    //     definedTags: ["defaultValue", "swagger"],
    //   },
    // ],
    // "jsdoc/no-undefined-types": [
    //   "warn",
    //   {
    //     definedTypes: ["NodeJS", "Partial", "Pick", "Record", "unknown"],
    //   },
    // ],
    "jsdoc/tag-lines": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",

    // Modules Plugin Rules
    "modules-newlines/export-declaration-newline": "error",
    "modules-newlines/import-declaration-newline": "error",

    // Newline Destructuring Plugin Rules
    "newline-destructuring/newline": [
      "error",
      {
        items: 1,
      },
    ],

    // Prefer Arrow Plugin Rules
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        allowStandaloneDeclarations: true,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],

    // React
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "error",

    // Sort Keys Plugin Rules
    "typescript-sort-keys/interface": "error",

    // Typescript ESLint Rules
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/brace-style": ["error", "stroustrup"],
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        ignoredNodes: [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
        ],
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        interfaces: [],
      },
    ],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "error",

    // Unicorn Plugin Rules
    "unicorn/consistent-function-scoping": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/no-empty-file": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-top-level-await": "error",
    "unicorn/prevent-abbreviations": "off",

    // Unused Import Plugin Rules
    "unused-imports/no-unused-imports": "off",

    "no-void": "off",
  },
  settings: {
    "import/internal-regex": "^type\\-fest$",
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      alias: {
        map: [["@", "./src"], ["@public", "./public"]],
      },
    },
    jsdoc: {
      mode: "typescript",
    },
    node: {
      tryExtensions: [".js", ".jsx", ".json", ".d.ts", ".ts", ".tsx"],
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "jsdoc/require-jsdoc": "off",
        "radar/no-identical-functions": "off",
        "unicorn/no-useless-undefined": "off",
        "@typescript-eslint/require-await": "off",
      },
    },
  ],
};
