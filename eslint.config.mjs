import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import("eslint").Config} */
export default tseslint.config(
	{ ignores: ['.next', 'dist', 'node_modules'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'no-console': 1,
			'react/jsx-props-no-spreading': 'off',
			'react/no-unused-prop-types': 'off',
			'react/require-default-props': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'no-use-before-define': [0],
			'@typescript-eslint/no-use-before-define': [1],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-var-requires': 'warn',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			]
		}
	}
);
