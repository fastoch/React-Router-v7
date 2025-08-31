export async function loader({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await response.json();
  return post;
}

export async function action() {
  
}

// this component fetches data from a public API (jsonplaceholder) to display posts based on their id
export default function Post() {
  return <div></div>;
}