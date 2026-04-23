FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 8080
ENV HOST=0.0.0.0
ENV PORT=8080
CMD ["node", "./dist/server/entry.mjs"]
