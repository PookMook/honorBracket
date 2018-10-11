FROM node:8.9

ADD ./gatsby/package.json .
RUN npm install
ADD ./gatsby .
RUN npm run build
