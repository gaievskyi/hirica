FROM node:lts

WORKDIR /app
COPY . /app

RUN npm install -g pnpm
RUN pnpm install