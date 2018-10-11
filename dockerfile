FROM node

RUN mkdir /gatsby
WORKDIR /gatsby

ADD ./gatsby/package.json .
RUN npm install
ADD ./gatsby .
RUN ls
RUN npm run build
RUN ls
RUN pwd
RUN ls public
