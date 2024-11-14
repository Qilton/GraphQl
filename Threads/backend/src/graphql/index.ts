
import { ApolloServer } from '@apollo/server';
import {User} from "./user"
async function createApolloServer(){
    const gqlserver = new ApolloServer({
        typeDefs: `
                ${User.typedefs}
        type Query{
                        ${User.Query}
                           
                    }
                    type Mutation{
                        ${User.mutation}
                    }`,
        resolvers: {
            Query: {

                ...User.resolvers.queries
               
            },
            Mutation: {
              ...User.resolvers.mutations
            }
        }
    });
    

    await gqlserver.start();
    return gqlserver
}
export default createApolloServer