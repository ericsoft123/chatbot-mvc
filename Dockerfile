FROM node:latest

RUN mkdir -p /usr/src/app
RUN npm install express-generator -g
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

# replace this with your application's default port
EXPOSE 8888

CMD [ "npm", "start" ]