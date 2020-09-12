FROM mhart/alpine-node:12.13.0
RUN npm config set unsafe-perm true

RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm install -g ts-node typescript tsc-watch yarn 
RUN yarn install
RUN yarn run build
EXPOSE 4000
CMD [ "node", "dist/index.js" ]