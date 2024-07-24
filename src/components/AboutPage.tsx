const AboutPage = () => {
  return (
    <>
      {/* //pictures */}
      <div className="md:grid grid-cols-2 gap-0 h-dvh aboutBg mt-16 sm:mt-0">
        <div className="md:m-16 m-4 relative">
          <img
            className="sm:w-[70%] w-[75%] border rounded-md shadow-md"
            src="src/assets/aboutPage.avif"
            alt=""
          />
          <img
            className="absolute sm:w-[54%] w-2/3 h-auto md:top-1/4 top-[24%] left-[32%] md:left-[45%] border rounded-md aspect-square"
            src="src/assets/aboutPage2.webp"
            alt=""
          />
        </div>

        {/* //text */}
        <div className="relative -mt-32 md:mt-28 h-fit m-2 p-12 sm:m-0 sm:p-0">
          <div className="h-fit md:m-[20%] md:mt-[4%] ">
            <p className="text-xl">ABOUT <span className="text-pink-600">US</span></p>

            <div className="border-b-2">
              <p className="sm:text-3xl text-2xl pt-4 font-serif tracking-wide font-semibold text-wrap leading-relaxed">
                When You Look Good You Feel Good
              </p>
            </div>
            <p className="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae iste deleniti alias veritatis magnam fugit, animi
              odio, autem quas cumque officiis omnis temporibus sint recusandae
              voluptates rem illum sapiente ab.
            </p>
          </div>
          {/* <div className="absolute bottom-1/4 left-2/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 409.6 409.6"
            >
              <path
                d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
                fill='url("#SvgjsLinearGradient1042")'
              ></path>
              <defs>
                <linearGradient id="SvgjsLinearGradient1042">
                  <stop stop-color="#fceabb" offset="0"></stop>
                  <stop stop-color="#f8b500" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
