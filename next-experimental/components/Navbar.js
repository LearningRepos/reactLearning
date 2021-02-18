import Link from "next/link";

const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    padding: "1rem",
  };
  return (
    <div style={styles}>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <button>Contact Page</button>
      </Link>
      <h1>Index Page</h1>
    </div>
  );
};

export default Navbar;
