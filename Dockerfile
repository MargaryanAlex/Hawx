FROM node:16 as build

WORKDIR /app 

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json .

RUN npm install 

COPY . .
 
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build/usr/share/nginx/html