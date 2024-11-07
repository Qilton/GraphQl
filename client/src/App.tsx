import { gql, useQuery } from "@apollo/client";

// Define types for the query response data
interface User {
  id: string;
  name: string;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  user: User | null; // user could be null
}

interface GetTodosData {
  getTodos: Todo[];
}

interface GetTodosVariables {
  // Define any required variables here if applicable
}

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery<GetTodosData, GetTodosVariables>(query);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <table>
        <tbody>
          {data?.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
