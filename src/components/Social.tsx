import { SocialIcon } from "react-social-icons";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-2 m-2">
      <SocialIcon
        bgColor="black"
        network="facebook"
        url="https://facebook.com"
        style={{ width: 25, height: 25 }}
      />
      <SocialIcon
        bgColor="black"
        network="instagram"
        url="https://instagram.com"
        style={{ width: 25, height: 25 }}
      />
      <SocialIcon
        bgColor="black"
        network="twitter"
        url="https://twitter.com"
        style={{ width: 25, height: 25 }}
      />
      <SocialIcon
        bgColor="black"
        network="youtube"
        url="https://youtube.com"
        style={{ width: 25, height: 25 }}
      />
    </div>
  );
};

export default SocialLinks;
