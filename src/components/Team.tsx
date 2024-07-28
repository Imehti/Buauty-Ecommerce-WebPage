import TeamMembersCard from "./Team-Card";

const TeamSection = () => {
  return (
    <>
   <div className="grid grid-cols-3">
   <TeamMembersCard />
    <TeamMembersCard />
    <TeamMembersCard />
   </div>
    </>
  );
};

export default TeamSection;
