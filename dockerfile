FROM node:8.9

ADD . .
RUN npm install
RUN npm run build

EXPOSE 80
CMD ["npm","run","serve"]
