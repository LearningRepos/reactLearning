import React from "react";
import { ThemeContext } from "./contexts/ThemeContexts";

class PageContext extends React.Component {
  static contextType = ThemeContext;
  render() {
    const styles = {
      backgroundColor: this.context.isDarkMode ? "black" : "white",
      height: "100vh",
      width: "100vw",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContext;
