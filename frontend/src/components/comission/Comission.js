import React from "react";
import "./Comission.css";

function Comission() {
  return (
    <div>
      <div className="comission-page-heading-container">
        <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/files/1500-300.png?v=1676004063"/>
      </div>
      <div className="comission-bg">
        <div className="comission-card-content">
          <div className="comission-card-content-container">
          <h1 className="comission-card-content-heading">
            Get customized paintings for your loved ones.
          </h1>
          <div className="comission-card-image-small">
          <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/02.gif?v=1675933282" />
        </div>
          <p className="comission-card-content-para">
            Hello!! We also take customized orders. The paintings are made with
            high quality artist grade supplies. So if you're looking for
            anything hand painted to either gift your loved ones or just to add
            colors to your space, we're here for you.
          </p>
          </div>
          <div className="comission-card-form-container">
            <div className="comission-card-container">
              <div className="comission-form-name-container">
                <input
                  type="text"
                  placeholder="Name"
                  className="comission-form-name"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="comission-form-phone"
                />
              </div>
              <div className="comission-form-email-container">
                <input
                  type="text"
                  placeholder="Email"
                  className="comission-form-email"
                />
              </div>
              <div className="comission-form-comment-container">
                <textarea
                rows="10"
                  placeholder="Requirements"
                  className="comission-form-comment"
                ></textarea>
              </div>
              <div>
              <button className="comission-button">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className="comission-card-image">
          <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/02.gif?v=1675933282" />
        </div>
      </div>
    </div>
  );
}

export default Comission;
