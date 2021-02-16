import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";

import { ThemeProvider } from "./contexts/ThemeContexts";
import randomThing from "./contexts/ThemeContexts";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
