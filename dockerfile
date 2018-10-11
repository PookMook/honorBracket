FROM node:8.9

ADD . .
npm install
npm run build

EXPOSE 80
CMD ["npm","run","serve"]
