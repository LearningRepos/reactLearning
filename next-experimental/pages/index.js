import axios from "axios";
import Link from "next/link";

const Index = (props) => {
  const posts = props["posts"].map((post, index) => (
    <li key={index}>
      <Link href={`/post?id=${post["id"]}`} as={`/p/${post["id"]}`}>
        {post["title"]}
      </Link>
    </li>
  ));
  return (
    <div>
      <h1>Our index page</h1>
      <ul>{posts}</ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  let { data } = res;
  return { posts: data };
};

export default Index;
