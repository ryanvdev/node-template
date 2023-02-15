# Node App Template

- File: `tsconfig.json`

```json
{
    "compilerOptions": {
        "module": "CommonJS", 
        "moduleResolution": "node", 
    },
    "ts-node": {
        "files": true
    }
}
```

- File: `package.json`

```json
{
    "typeRoots": [
        "./node_modules/@types",
        "./src/types"
    ],
}
```
