#!/bin/sh

cd /gatsby
npm install >> /public/install
npm run build >> /public/message
ls /gatsby >> /public/gatsby
ls /gatsby/public >> /public/public
rm -R /public
cp -R /gatsby/public/. /public/
