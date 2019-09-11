import React, { Component } from "react";
import SocialBar from "../components/SocialBar";
import NewsletterBar from "../components/NewsletterBar";
import FooterInformation from "../components/FooterInformation";

class FooterBar extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content-container">
          <SocialBar />
          <NewsletterBar />
          <FooterInformation />
        </div>
      </footer>
    );
  }
}

export default FooterBar;
