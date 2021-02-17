import React, { createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "english" };
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }
  toggleLanguage(selectLanguage) {
    this.setState({ language: selectLanguage });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, toggleLanguage: this.toggleLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = (Component) => (props) => {
  return (
    <LanguageContext.Consumer>
      {(value) => <Component LanguageContext={value} {...props} />}
    </LanguageContext.Consumer>
  );
};
