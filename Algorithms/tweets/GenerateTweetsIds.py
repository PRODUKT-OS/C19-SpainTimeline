#!/usr/bin/python3
# coding=utf-8

from elasticsearch import Elasticsearch
import json
import os

first_date = "2020-01-23"
last_date = "2020-01-23"
timeout = 1000
size = 10000
es = Elasticsearch(['http://elastic-lastus.s.upf.edu'],timeout=timeout)

daysByMonths2020 = [[4,3], [4,1],[4,3],[4,2],[4,3],[4,2],[4,3],[4,3],[4,2],[4,3],[4,2],[4,3]]
def formatNumber(n):
  if(len(str(n)) == 1):
    return "0"+str(n)
  return n
weeksIntervals = []
for index,month in enumerate(daysByMonths2020):
  for i in range(month[0]+1):
    if(i==0):
      weeksIntervals.append("2020-"+ formatNumber(str(index+1))+"-"+formatNumber(str(i+1)))
    else:
      weeksIntervals.append("2020-"+ formatNumber(str(index+1))+"-"+formatNumber(str(i*7)))
  weeksIntervals.append("2020-"+ formatNumber(str(index+1))+"-"+formatNumber(str(month[0]*7 + month[1])))

finalIntervals = []
for index,item in enumerate(weeksIntervals):
  if(index+1 < len(weeksIntervals) and int(item.split("-")[2]) < int(weeksIntervals[index+1].split("-")[2])):
    finalIntervals.append([item, weeksIntervals[index+1]]) 

def process_hits(hits,f_output):
    for item in hits:
        f_output.write(item['_id']+"\n")

for interval in finalIntervals:
    query =json.dumps({
    "query": {
        "bool": {
            "must":[
                {"match":{"is_retweet": "false"}},
                {"match":{"lang": "es"}}
             ],   
             "filter": [
                {
                  "range": {
                    "created_at": {
                      "gte": interval[0],
                      "lte": interval[1],
                    }
                  }
                }
                ],
                "should" : [
            { "match" : { "user_location" : "*España*" } },
            { "match" : { "user_location" : "*Spain*" } },
            { "match" : { "user_location" : "*españa*" } },
            { "match" : { "user_location" : "*spain*" } },
          ],
        }
      }, 
      'size': size
    })

    data = es.search(
        index="tweets_c19",
        scroll='2m',
        body=query
    )


    sid = data['_scroll_id']
    scroll_size = len(data['hits']['hits'])
    print("scrolling on range "+ interval[0]+ " / " + interval[1])
    
    with open(os.getcwd()+"/tweets_"+interval[0]+"_"+interval[1]+".txt", 'a+') as f_output:
        f_output.write("tweet_id\n")
        while scroll_size > 0:
            "Scrolling..."
            print("processing " + str(scroll_size) + " tweets")
            
            process_hits(data['hits']['hits'],f_output)
            
            data = es.scroll(scroll_id=sid, scroll='2m')
            
            sid = data['_scroll_id']

            scroll_size = len(data['hits']['hits'])    
        