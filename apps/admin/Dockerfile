FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/admin/package.json apps/admin/package.json
RUN npm ci --workspace apps/admin --include-workspace-root=false
COPY apps/admin apps/admin
ARG VITE_API_BASE_URL
ARG VITE_ADMIN_API_KEY
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_ADMIN_API_KEY=$VITE_ADMIN_API_KEY
RUN npm run build --workspace apps/admin

FROM nginx:1.27-alpine
COPY apps/admin/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/admin/dist /usr/share/nginx/html
EXPOSE 80

