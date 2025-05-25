FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Add the runtime script
COPY generate-runtime-config.sh /app/generate-runtime-config.sh
RUN chmod +x /app/generate-runtime-config.sh

EXPOSE 3000

CMD ["sh", "-c", "/app/generate-runtime-config.sh && yarn start"]
