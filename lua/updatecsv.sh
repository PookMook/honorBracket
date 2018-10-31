#!/bin/bash

#Get file
echo "Starting Crontab job for honorBracket at `date`" >> /var/log/crontab
cd ~/git/honorBracket/
git pull


cd "/mnt/d/wow/World of Warcraft Classic"
lua5.3 tocsv.lua
mv export/currentWeek.csv ~/git/honorBracket/gatsby/src/data

cd ~/git/honorBracket/

cd gatsby/src/data
python3 sortCSV.py
echo "name,honor,class,LWHonor,standing,rank,rankProgress,RP" > currentWeek.csv
cat currentWeekSorted.csv >> currentWeek.csv
rm currentWeekSorted.csv

cd ~/git/honorBracket/

if output=$(git status --porcelain) && [ -z "$output" ]; then
	  # Working directory clean
	  echo "no changes at `date`" >> /var/log/crontab
else 
	  echo "uncommitted changes at `date`, let's go" >> /var/log/crontab
	  date=$(date -u)
	  sed -E -i "s/lastUpdate\: '.+'/lastUpdates: '$date'/g" gatsby/gatsby-config.js
	    # Uncommitted changes
fi



git add .
git commit -m "Updating currentWeek.csv"
git push
git push deploy
