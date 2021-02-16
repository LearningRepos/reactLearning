import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContexts";

function PageContext(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}

export default PageContext;
