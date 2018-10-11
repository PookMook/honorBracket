FROM node

RUN mkdir /gatsby
WORKDIR /gatsby

ADD ./gatsby/package.json .
RUN npm install
ADD ./gatsby .
RUN npm run build
ADD ./exec.sh /
