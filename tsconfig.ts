{
    "extends": "@vue/tsconfig/tsconfig.dom.json",
    "compilerOptions": {
      "baseUrl": ".",
      "rootDir": "./src",
      "moduleResolution": "bundler",
      "paths": {
        "/@/*": [
          "./src/*"
        ]
      },
      "typeRoots": [
        "node_modules/@types/",
        "types"
      ],
      "types": [
        "vite/client"
      ],
      "allowJs": true,
      "checkJs": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noEmit": false,
      "outDir": "dist"
    },
    "include": [
      "src/**/*.ts",
      "src/**/*.d.ts",
      "src/**/*.tsx",
      "src/**/*.vue"
    ],
    "exclude": [
      "node_modules",
      "**/node_modules",
      "docs",
      "**/*.js",
      "dist"
    ]
  }