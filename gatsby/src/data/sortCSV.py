import sys, csv ,operator
data = csv.reader(open('currentWeek.csv'),delimiter=',')
next(data, None)
sortedlist = sorted(data, key=lambda row: (int(row[1]),row[0]), reverse=True)    # 1 specifies according to second column we want to sort
#now write the sorte result into new CSV file
with open("currentWeekSorted.csv", "w") as f:
    fileWriter = csv.writer(f, delimiter=',')
    for row in sortedlist:
        fileWriter.writerow(row)

