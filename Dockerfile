FROM node:14.16-slim

USER node

WORKDIR /app

EXPOSE 8080

RUN apt update -y && \
    apt upgrade -y tzdata

COPY . /app

RUN yarn install
