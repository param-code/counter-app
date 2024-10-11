#step 1
FROM node:14-alpine AS build


WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install


COPY . .
#step 2

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
