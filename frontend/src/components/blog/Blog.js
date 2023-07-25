import React, { useContext } from "react";
import "./Blog.css";
import { UserContext } from "../../context/context";
import { disableScroll, enableScroll } from "../../functions/functions";

function Blog() {
  const { navStatus, setNavStatus } = useContext(UserContext);
  if (navStatus) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    <div>
      <div className="about-page-heading-container"></div>
      <div className="about-bg">
        <div className="about-card-image">
          <img src="https://static.wixstatic.com/media/112644_821d202c7a8944338cd22ccc963bd381~mv2.jpg/v1/fill/w_581,h_755,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_821d202c7a8944338cd22ccc963bd381~mv2.jpg" />
        </div>
        <div className="about-card-content">
          <div className="about-card-content-container">
            <h1 className="about-card-content-heading">
              Palete Tales
            </h1>
            <div className="about-card-image-small">
              <img src="https://static.wixstatic.com/media/112644_09e29a69a31f4cb08d30cea9943def67~mv2.jpg/v1/fill/w_638,h_538,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/112644_09e29a69a31f4cb08d30cea9943def67~mv2.jpg" />
            </div>
            <p className="about-card-content-para">
              The Tinted Palette was created by Anjana three years ago on
              Instagram with the mere intention to share art with friends and
              family. We slowly started growing last year. The support and
              encouragement from the art community lit a spark within me to
              share more and more creations on a daily basis. It wasn't until
              recently that I started using my own clicks for the illustrations
              I made, which is one of the major reasons that I'm here today, to
              share my creations with you all in the form of art products that
              you can make part of your daily life to either jot down your
              ideas, to-do lists, journal or just express your emotions and
              paint your heart out on them. All the illustrations on the
              products are hand-painted, inspired by the photographs captured in
              the surroundings and are then digitized and designed to bring to
              you a line of art products curated with lots of love.
            </p>
            <div className="about-card-artist-para">
              <h1>About the Artist</h1>
              <p>The Tinted Palette was created by Anjana three years ago on
              Instagram with the mere intention to share art with friends and
              family. We slowly started growing last year. The support and
              encouragement from the art community lit a spark within me to
              share more and more creations on a daily basis. It wasn't until
              recently that I started using my own clicks for the illustrations
              I made, which is one of the major reasons that I'm here today, to
              share my creations with you all in the form of art products that
              you can make part of your daily life to either jot down your
              ideas, to-do lists, journal or just express your emotions and
              paint your heart out on them. All the illustrations on the
              products are hand-painted, inspired by the photographs captured in
              the surroundings and are then digitized and designed to bring to
              you a line of art products curated with lots of love.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
