FROM node:lts-alpine3.16 as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY ./public /app/public
COPY ./src /app/src

RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
