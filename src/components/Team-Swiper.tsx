import { TeamMembers } from "@/services/team-members";
import ReusableSwiper from "./Swiper";
import TeamMembersCard from "./Team-Card";

const TeamMembersSwiper = () => {
  return (
    <ReusableSwiper
      data={TeamMembers}
      renderSlide={(member) => (
        <TeamMembersCard
          id={member.id}
          name={member.name}
          picture={member.picture}
          expertise={member.expertise}
          description={member.description}
        />
      )}
      swiperConfig={{
     
        breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
        }
      }}
      
    />
  );
};

export default TeamMembersSwiper;
