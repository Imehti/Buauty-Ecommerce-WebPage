const TeamMembersCard = () => {
  return (
    <>
      {/* <div className="grid grid-cols-3"> */}
        <div className="relative m-4 h-fit flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-gray-300">
          <div className="flex flex-col justify-center items-center h-fit">
            <svg
              className="-mt-8 ml-8"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
            >
              <defs>
                <clipPath id="myClip">
                  <path
                    fill="#F1C21B"
                    d="M34.4,-55.2C41.7,-48.9,42.8,-34.5,43.8,-22.8C44.8,-11.1,45.7,-2.2,44.6,6.5C43.5,15.2,40.4,23.8,34.6,29.5C28.9,35.1,20.4,37.9,10.7,44.2C1.1,50.5,-9.8,60.4,-21.7,62.2C-33.7,64.1,-46.7,57.9,-53.5,47.7C-60.3,37.5,-60.9,23.1,-65.4,7.9C-70,-7.4,-78.5,-23.6,-74.9,-35.3C-71.3,-47.1,-55.4,-54.3,-40.9,-57.4C-26.4,-60.4,-13.2,-59.2,0.2,-59.5C13.6,-59.8,27.1,-61.5,34.4,-55.2Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>
              <image
                xlinkHref="src/assets/team-avatar1.jpg"
                x="0"
                y="0"
                width="200"
                height="200"
                clipPath="url(#myClip)"
              />
            </svg>
            <h1>Danielle Welling</h1>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default TeamMembersCard;
