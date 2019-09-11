import React from "react";

const NewsletterBar = () => {
  return (
    <div className="newsletter-bar">
      <div className="newsletter-form-container">
        <span>sign up to our newsletter</span>
        <form>
          <input placeholder="enter your email..."></input>
          <button color="purple">submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBar;
