import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Lorem ipsum dolor sit amet. Social Networks</h3>
      <div>
        <Link to="/">
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png"
            alt="twitter"
          />
        </Link>
        <Link to="/">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-256.png"
            alt="whatsapp"
          />
        </Link>
        <Link to="/">
          <img
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-256.png"
            alt="facebook"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
