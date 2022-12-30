FROM node:lts AS development

WORKDIR /app
COPY . /app

RUN npm install -g pnpm
RUN pnpm install
