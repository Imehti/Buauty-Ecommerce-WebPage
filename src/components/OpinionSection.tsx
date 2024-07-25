import useUsers from "@/hooks/useUsers";

const Opinions = () => {
    const {data:users}=useUsers()
    console.log(users?.results)
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex flex-col items-center justify-center h-fit mt-12 gap-y-4">
          <h2 className="font-medium">TESTIMONIAL</h2>
          <h1 className="text-2xl font-semibold font-serif">
            What People Say?
          </h1>
        </div>

        <div className="md:grid grid-cols-2 justify-center flex flex-col">
          {/* pictures */}
          <div className="grid grid-cols-4 h-fit gap-y-4 gap-x-0 m-12 sm:ml-20">
            {users?.results.map(user=>(
                <img src={user.picture.large} alt="" />
            ))}
          </div>

          {/* opinion */}
         {/* {users?.results.map(user=>(
             <div className="">
             <img className="w-1/6 inline-block" src="src/assets/speaking-icon.svg" alt="" />
             <p className="inline-block">{user.name.first}</p>
           </div>
         ))} */}
        </div>
      </div>
    </>
  );
};

export default Opinions;
