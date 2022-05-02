from node:14-alpine3.12
workdir /usr/src/app
copy package*.json ./
run npm install
copy . .
expose 8000
run apk add curl
run curl www.google.com
cmd ["npm","run","start"]
