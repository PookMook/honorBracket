FROM node:8.9

ADD ./package.json .
RUN npm install
ADD . .
RUN npm run build

EXPOSE 9000
CMD ["npm","run","serve"]
