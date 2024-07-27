import useUsers, { Results, Users } from "@/hooks/useUsers";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Opinions = () => {
  const { data: users } = useUsers();
  const [selectUser, setUser] = useState<Results>();
  const [lastIndex, setLastIndex] = useState(false);
  const [firstIndex, setFirstIndex] = useState(false);

  const selectedUser = users?.results.filter((user) => user === selectUser);

  useEffect(() => {
    if (users?.results) {
      setUser(users?.results[0]);
    }
  }, [users]);

  const handleSelectedUser = (user: Results) => {
    setUser(user);
    const index = users?.results.findIndex((u) => u === user);
    if (
      index !== -1 &&
      index !== undefined &&
      users?.results &&
      users?.results.length - 1 === index
    ) {
      setLastIndex(true);
    } else {
      setLastIndex(false);
    }
    if (index === 0) {
      setFirstIndex(true);
    } else {
      setFirstIndex(false);
    }
  };

  const handleNextButton = (user: Results) => {
    const index = users?.results.findIndex((u) => u === user);
    if (index !== -1 && index !== undefined) {
      setUser(users?.results[index + 1]);
    }
    if (
      index !== -1 &&
      index !== undefined &&
      users?.results &&
      users?.results.length - 2 === index
    ) {
      setLastIndex(true);
    }

    setFirstIndex(false);
  };
  const handlePreviousButton = (user: Results) => {
    const index = users?.results.findIndex((u) => u === user);
    if (index === 0) {
      setFirstIndex(true);
    } else if (index !== -1 && index !== undefined) {
      setUser(users?.results[index - 1]);
    }

    setLastIndex(false);
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col items-center justify-center h-fit mt-12 gap-y-4">
          <h2 className="font-medium mt-4">TESTIMONIAL</h2>
          <h1 className="text-2xl font-semibold font-serif">
            What People Say?
          </h1>
        </div>

        <div className="md:grid grid-cols-2 justify-center flex flex-col md:mt-12">
          {/* pictures */}
          <div className="grid grid-cols-4 h-fit gap-y-4 gap-x-0 m-12 sm:ml-20">
            {users?.results.map((user) => (
              <img
                className={`${
                  selectedUser?.some((u) => u === user) &&
                  "transform -translate-y-3"
                }`}
                onClick={() => handleSelectedUser(user)}
                src={user.picture.large}
                alt=""
              />
            ))}
          </div>

          {/* opinion */}

          {selectedUser &&
            selectedUser?.map((user) => (
              <div className="md:mt-8 -mt-11 md:inline-block flex flex-col items-center justify-center">
                <img
                  className="w-[12%] inline-block"
                  src="src/assets/speaking-icon.svg"
                  alt=""
                />
                <div className="inline-block h-fit">
                  <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col h-fit ml-8 md:ml-0">
                      <div>
                        <p className="inline-block font-bold font-serif text-xl">
                          {user.name.first}
                        </p>
                        <p className="font-semibold">{user.location.city}</p>
                      </div>
                      <p className="md:mt-4 text-left p-1 md:ml-0 w-full">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Commodi expedita et molestias fugiat quos aliquam
                        officia non neque provident. Quaerat consequatur laborum
                        eaque nam voluptatum nihil unde placeat aut alias.
                      </p>
                    </div>
                    <div className="flex mr-12">
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <svg
                            className="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 md:mt-8 mb-2">
                  <Button
                    disabled={firstIndex}
                    onClick={() => handlePreviousButton(user)}
                  >
                    Previous
                  </Button>
                  <Button
                    disabled={lastIndex}
                    onClick={() => handleNextButton(user)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Opinions;
