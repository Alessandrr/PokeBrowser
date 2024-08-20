// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        "rules": {
            "semi": 1,
            "no-unused-vars": 1
        }
    }
);
