#!/bin/bash

#Get file
echo "Starting Crontab job for honorBracket at `date`" >> /var/log/crontab
cd "/mnt/d/wow/World of Warcraft Classic"
lua5.3 tocsv.lua
mv export/currentWeek.csv ~/git/honorBracket/gatsby/src/data
cd ~/git/honorBracket/
git pull
git add .
git commit -m "Updating currentWeek.csv"
git push
