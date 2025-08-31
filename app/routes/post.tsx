import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  return post;
}

export async function action() {
  
}

// this component fetches data from a public API (jsonplaceholder) to display posts based on their id
export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Post Id: {loaderData.id}</h1>
      <p>{loaderData.body}</p>
    </div>
  )
}