import Example from "@/componets/Example";
import { notFound } from "next/navigation";

async function getTodo(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
}
const Todo = async ({ params }: { params: { id: string } }) => {
  const todo = await getTodo(params.id);
  if (todo.title == null) return notFound();
  return (
    <div>
      todo of {params.id}
      <h1>{todo.title}</h1>
      <Example></Example>
    </div>
  );
};

export default Todo;
