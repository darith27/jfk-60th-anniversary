FROM node:14-alpine as build

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

COPY . ./
RUN npm ci && npm run build

FROM nginx:1.19-alpine
RUN apk update && apk upgrade

COPY --from=build /dist /usr/share/nginx/html/

COPY /default.conf /etc/nginx/conf.d/default.conf

