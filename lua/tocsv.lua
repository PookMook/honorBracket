local data = require 'HonorSpy'


file = io.open('../currentWeek.csv', "w")
file:write('name,honor,class,LWHonor,Standing,Rank,rankProgress,RP')
for key,value in pairs(data["realms"]["Northdale - Alliance"]["hs"]["currentStandings"]) do
	file:write(key,',', value["thisWeekHonor"],',',value["class"],',',value["lastWeekHonor"],',',value["standing"],',',value["rank"],',',value["rankProgress"],',',value["RP"],"\n")
end


io.close(file)
