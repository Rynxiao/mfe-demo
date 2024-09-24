## MFE Webpack Module Federation Demo

### Hwo to run

#### Clone the repository

```bash
git clone https://github.com/Rynxiao/mfe-demo.git
```

#### Goto each apps and install dependencies

```bash
# container app
cd apps/container
npm install
npm run serve

# posts app
cd apps/posts
npm install
npm run serve

# albums app
cd apps/albums
npm install
npm run serve
```

#### Open the browser and visit the container app

```bash
# container app
http://localhost:8080

# posts app
http://localhost:8081

# albums app
http://localhost:8082
```

### Local Preview

```bash
npm run deploy:local
```
