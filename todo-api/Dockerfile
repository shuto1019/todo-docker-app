
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ★ ここを追加
RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]