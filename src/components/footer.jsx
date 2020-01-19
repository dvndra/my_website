import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        id="sticky-footer"
        className="fixed-bottom py-1 bg-dark text-white-50 text-center"
      >
        &copy; Designed & Developed by Devendra Swami
      </footer>
    );
  }
}

export default Footer;
