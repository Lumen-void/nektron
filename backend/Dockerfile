FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY backend/package.json backend/package.json
RUN npm ci --workspace backend --include-workspace-root=false

COPY backend backend

WORKDIR /app/backend
ENV NODE_ENV=production
EXPOSE 4000
CMD ["npm", "start"]

