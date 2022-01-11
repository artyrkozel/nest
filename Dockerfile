FROM node:14.15.4-alpine

# install dependencies
# RUN apk update --quiet && apk add git build-base python3 --quiet

# WORKDIR /app

# Install node js dependencies
COPY package*.json ./
RUN npm ci

# COPY . /app

# Build app
RUN npm run build
RUN npm ci --production

ENTRYPOINT npm run start