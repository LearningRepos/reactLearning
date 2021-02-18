import axios from "axios";

function Post(props) {
  console.log(props);
  return (
    <div>
      <h1>You are looking at post #{props["query"]["id"]}</h1>
      <p>{props["comments"]["title"]}</p>
    </div>
  );
}

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?id=3"
  );
  const { data } = res;
  return { query: query, comments: data[0] };
};

export default Post;
