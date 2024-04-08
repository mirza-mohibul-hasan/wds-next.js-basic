// "use client";
import Link from "next/link";
import { Suspense } from "react";
async function getTodos() {
  await wait(2000);
  // throw new Error("Testing error");
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}
function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
export default function Home() {
  return (
    <>
      <h1>Todos </h1>
      <Suspense fallback={"Loading...."}>
        <TodoList></TodoList>
      </Suspense>
    </>
  );
}
export async function TodoList() {
  const todos = await getTodos();
  console.log(todos);
  return (
    <>
      <h4>Number of todo: {todos.length}</h4>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
