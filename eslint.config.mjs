import { defineConfig } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    name: 'project/ignores',
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },

  // Next.js rules, including Core Web Vitals checks (e.g. flags <img> where
  // next/image should be used, and unoptimised font loading).
  ...next,

  // @typescript-eslint rules. Without this, unused TS variables go unreported.
  ...nextTypeScript,

  {
    name: 'project/rules',
    rules: {
      // Allow intentionally-unused args prefixed with _
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // MUST be last: switches off ESLint's stylistic rules so they don't
  // fight Prettier.
  prettier,
]);
