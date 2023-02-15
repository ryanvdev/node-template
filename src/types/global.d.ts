// {
//     "typeRoots": [
//         "./node_modules/@types",
//         "./src/types"
//     ],
// }


declare global {
    /**
     * Now declare things that go in the global namespace,
     * or augment existing declarations in the global namespace.
    */
   const __env:Readonly<EnvTypes>;
}

export {};