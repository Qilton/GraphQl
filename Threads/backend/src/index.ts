import express  from "express";
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4"
import bodyParser from "body-parser";

const app=express()
const PORT=8000;

async function init(){
    const gqlserver=new ApolloServer({
        typeDefs:`type Query{
                    hello:String, 
                    say(name:String):String       
        }`,
        resolvers:{
            Query:{
                hello:()=>"Hey there i am a graphql server",
                say:(_,{name}:{name:String})=>`Hey ${name} How are u`
            }
        },
    })
    await gqlserver.start()
    
    app.get('/',(req,res)=>{
        res.json({message:"Server is up and running"})
    })
    app.use(bodyParser.json())
    app.use('/graphql',expressMiddleware(gqlserver))
    app.listen(PORT,()=>{console.log("Server started at port 8000")})
}

init()
    