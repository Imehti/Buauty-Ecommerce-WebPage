import TeamMembersSwiper from "./Team-Swiper";

const TeamSection = () => {
  return (
    <div className="border border-b-2">
      <div className="h-fit flex justify-center font-semibold font-serif mt-7">
        <h1 className="text-3xl">Professional Team</h1>
      </div>

      <TeamMembersSwiper />
    </div>
  );
};

export default TeamSection;
