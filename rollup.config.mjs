import terser from "@rollup/plugin-terser";

export default {
    input: 'src/app.js',
    output: [
        {
            name: "screenCounter",
            file: 'dist/screenCounter.js',
            format: 'iife'
        },
        {
            name: "screenCounter",
            file: 'dist/screenCounter.min.js',
            format: 'iife',
            plugins: [terser()]
        }
    ]
};