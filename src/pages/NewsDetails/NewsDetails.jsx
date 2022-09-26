import React from "react";
import Blog from "../../components/Main/News/Blog/Blog";
import "./NewsDetails.css";

function NewsDetails() {
  return (
    <div className="cardDetail-comment">
      <Blog />
      <div className="cardDetail">
        <div className="cardDetail-Image-container">
          <img
            src="http://demo.dawnthemes.com/ticketbox/wp-content/uploads/2016/12/01-disco-music-event-underground-.jpg"
            alt="img"
          />
        </div>
        <div className="cardDetail-content">
          <div className="cardDetail-title">
            <h5>GRAVIDA SUSCIPIT PLATEA LAOREET PRAESENT FEUGIAT MALESUADA</h5>
          </div>
          <div className="cardDetail-general">
            <div className="cardDetail-Date">
              <p>December 23, 2016</p>
            </div>
            <div className="cardDetail-By">
              <p>By Dawnthemes</p>
            </div>

            <div className="cardDetail-Categories">
              <p>Exhibitions</p>
            </div>
          </div>
          <hr />
          <div className="carddetail-Text">
            <p>
              Aside barring goodness shivered proofread bee frenetically coughed
              earthworm much during rakish hey august while and yikes one oh
              giraffe when magnificently darn far ouch much much conditionally.
              Tranquilly egregious and blubbered dense this fed that a this some
              horrendous volubly alas amid diligently where armadillo krill
              apart belched much more hey authentically a ashamedly that within
              one onto wow in. Dynamic far infallible oh ouch a and nefariously
              inflexible vigorous a some wise forecast mysteriously foolhardy
              that some because porcupine horse scooped where acutely
              resplendent inside after regarding yikes wolf less so peskily
              blinked. Tranquilly egregious and blubbered dense this fed that a
              this some horrendous volubly alas amid diligently where armadillo
              krill apart belched Aside barring goodness shivered proofread bee
              frenetically coughed earthworm much during rakish hey august while
              and yikes one oh giraffe when magnificently darn far ouch much
              much conditionally. Tranquilly egregious and blubbered dense this
              fed that a this some horrendous volubly alas amid diligently where
              armadillo krill apart belched much more hey authentically a
              ashamedly that within one onto wow in. Dynamic far infallible oh
              ouch a and nefariously inflexible vigorous a some wise forecast
              mysteriously foolhardy that some because porcupine horse scooped
              where acutely resplendent inside after regarding yikes wolf less
              so peskily blinked. Tranquilly egregious and blubbered dense this
              fed that a this some horrendous volubly alas amid diligently where
              armadillo krill apart belched
            </p>
          </div>

          <div className="socialmedia">
            <p>Share it</p>
            <a src="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a src="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a src="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <hr />

        <div className="previousNext">
          <div className="previousPost">
            <button className="previousPost-btn">
              <p>previous post </p>
              <h5>NISI CRAS VEL APTENT DICTUM SEM SENECTUS VENENATIS</h5>
            </button>
          </div>
          <div className="nextPost">
            <button className="nextPost-btn">
              <p>next post </p>
              <h5>NISI CRAS VEL APTENT DICTUM SEM SENECTUS VENENATIS</h5>
            </button>
          </div>
        </div>
        <hr />
        <div className="general-comments">
          <h5>Leave a reply</h5>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p className="comment-form">
            <label>Comment *</label>
            <textarea
              required
              className="comments"
              name="comment"
              placeholder="Add a comment"
            ></textarea>
          </p>

          <p className="name-form">
            <label>Name *</label>
            <input required className="name" name="author" type="text" />
          </p>

          <p className="email-form">
            <label>Email *</label>
            <input required className="email" name="email" type="email" />
          </p>
          <p className="website-form">
            <label>Website *</label>
            <input required className="website" name="url" type="url" />
          </p>

          <p className="checkbos">
            <input required className="checkbox" type="checkbox" />
            <label>
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </p>
          <button className="btn-comment">Post Comment </button>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
