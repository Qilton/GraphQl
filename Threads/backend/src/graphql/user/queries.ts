export const Query = `#graphql
hello:String, 
 say(name:String):String
 getUserToken(email:String!,password:String!):String
 getCurrentLoggedInUser:User
 `