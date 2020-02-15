# farms_form

![deploy](https://github.com/es-dev-camp/melon/workflows/deploy/badge.svg)

melon を販売します

## get .env secret files

ask [contributors](https://github.com/es-dev-camp/melon/graphs/contributors)

- .env.develop.local
- .env.production.local

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## GitHub Actions settings

### Secret

- FIREBASE_TOKEN
  ```
  firebase login:ci > FIREBASE_TOKEN
  ```
- FIREBASE_ENV_SETTINGS
  ```
  const fs = require('fs');
  
  const content = fs.readFileSync('.env.production.local').toString('utf8');
  const secret = content.replace(/\n/gi, '\\n');
  console.log(secret);

  // sample: VUE_APP_API_KEY="test"\nVUE_APP_ABC="ABC"\nVUE_APP_...
  ```
