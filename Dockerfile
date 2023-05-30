FROM node:18-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add vite

COPY src ./src
COPY static ./static
COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package.json /app/yarn.lock ./
RUN yarn install --production

COPY --from=build /app/build /app/build

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]
