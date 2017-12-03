export class Event {
    eventID: String
    dateFrom: Date
    dateTo: Date
    user: String
    createdDate: String
    isActive: String
    activityCategoryID: String
    activityCategory: {  
       activityCategoryID: String;
       activityDescription: String;
       createdDate: String;
    }
}

/* 
[  
   {  
      "eventID":18,
      "dateFrom":"2017-11-30T12:20:00",
      "dateTo":"2017-11-30T13:30:00",
      "user":"Derek",
      "createdDate":"2017-11-29T18:42:47.491",
      "isActive":false,
      "activityCategoryID":3,
      "activityCategory":{  
         "activityCategoryID":3,
         "activityDescription":"Brunch",
         "createdDate":"2017-11-29T18:42:46.6693317"
      }
   },
   {  
      "eventID":19,
      "dateFrom":"2017-11-29T01:00:00",
      "dateTo":"2017-11-29T02:00:00",
      "user":"a",
      "createdDate":"2017-11-29T22:44:22.372",
      "isActive":true,
      "activityCategoryID":14,
      "activityCategory":{  
         "activityCategoryID":14,
         "activityDescription":"Lunch",
         "createdDate":"2017-11-29T18:42:46.669319"
      }
   }
]

*/