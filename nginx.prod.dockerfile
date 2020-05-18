## Stage 1 - build
FROM node:12.16.3 as node
LABEL author = "Bill Cui"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

## Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/mathsoclibrary /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t mathsoclibrary-frontend-image:1.0.0 -f nginx.prod.dockerfile .
# docker run -d -p 4200:80 billcui/mathsoclibrary-frontend-image:1.0.0
