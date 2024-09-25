#!/bin/bash

# startup posts app
cd apps/posts
npm install
npm run build
cd dist
pm2 start http-server --name "posts" -- -p 4201 -d ./ --cors
sleep 2
cd ../../

# startup albums app
cd albums
npm install
npm run build
cd dist
pm2 start http-server --name "albums" -- -p 4202 -d ./ --cors
sleep 2
cd ../../

# startup container app
cd container
npm install
MFE_POSTS_DOMAIN=http://localhost:4201/ MFE_ALBUMS_DOMAIN=http://localhost:4202/ MFE_CONTAINER_DOMAIN=http://localhost:4200/ npm run build
cd dist
pm2 start http-server --name "container" -- -p 4200 -d ./
cd ../../../

pm2 status
