# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/nginx/default.conf /etc/nginx/conf.d
COPY --from=my-app-build /app/dist/dummy-frontend /usr/share/nginx/html
EXPOSE 80
