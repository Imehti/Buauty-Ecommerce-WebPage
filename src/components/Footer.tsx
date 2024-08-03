import SocialLinks from "./Social";

const Footer = () => {
  return (
    <>
      <div className="h-fit">
        <div className="lg:grid grid-cols-4 flex flex-col space-y-4 lg:space-y-0 p-12 justify-center">
          {/* contact info */}
          <div className="flex flex-col h-fit gap-y-2">
            <h1 className="text-lg font-semibold font-serif">Contact info</h1>
            <p className="font-thin">
              <span className=" font-normal">Address</span>: 2132 S Archer Ave
              ,Chicago
            </p>
            <p className="font-thin">
              <span className="font-normal">Phone</span>: +1 312-808-1999
            </p>
            <p className="font-thin">
              <span className="font-normal">Email</span>:
              Beatycosmetics@gmail.com
            </p>
            <p className="font-thin">
              <span className="font-normal">Opentime</span>: 8.00am - 11.00.pm
            </p>
          </div>
          {/* Account */}
          <div className=" flex flex-col h-fit gap-y-2">
            <h1 className="text-lg font-semibold font-serif">Acoount</h1>
            <p className="hover:text-red-500 cursor-pointer">My account</p>
            <p className="hover:text-red-500 cursor-pointer">Cart</p>
            <p className="hover:text-red-500 cursor-pointer">Shop</p>
            <p className="hover:text-red-500 cursor-pointer">Wishlist</p>
          </div>

          {/* information */}
          <div className="flex flex-col h-fit mb-12 gap-y-2">
            <h1 className="text-lg font-semibold font-serif">Informatoin</h1>
            <p className="hover:text-red-500 cursor-pointer">Contact</p>
            <p className="hover:text-red-500 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-red-500 cursor-pointer">Terms & Condition</p>
          </div>

          {/* socail */}
          <div className="flex flex-col justify-center items-center h-fit">
            <h1 className="text-lg font-semibold font-serif">Get in touch</h1>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
