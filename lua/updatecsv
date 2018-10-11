#!/bin/bash

#Get file
cd "/mnt/d/wow/World of Warcraft Classic"
lua5.3 tocsv.lua
mv export/currentWeek.csv ~/git/honorBracket/src/data
cd ~/git/honorBracket/
git pull
git add .
git commit -m "Updating currentWeek.csv"
git push
