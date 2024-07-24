import { useState } from "react";

const BlogPage = () => {

    const [image,setImage]=useState("src/assets/bacground.avif")

    const handleMouseOver =(imageSrc:string)=>{
        setImage(imageSrc)
    }

  return (
    <>
      <div className="grid grid-cols-3 mt-[50%] md:mt-0 h-fit bg-gray-100">
        <div className="h-fit m-12 col-span-1">
          <div
            className={`flex flex-col whitespace-nowrap gap-y-7 sm:mt-[30%] mt-[190%] ml-[25%] w-full text-xl font-semibold text-nowrap
            
            `}
          >
            <li onMouseOver={()=>handleMouseOver("src/assets/blogPic1.webp")} className="hover:text-yellow-500">Body treatment</li>
            <li onMouseOver={()=>handleMouseOver("src/assets/perofessional-makeup.jpg")} className="hover:text-yellow-500">Professinal makeup</li>
            <li onMouseOver={()=>handleMouseOver("src/assets/manicure.jpg")} className="hover:text-yellow-500">Maincure & pedicure</li>
            <li onMouseOver={()=>handleMouseOver("src/assets/haircut.webp")} className="hover:text-yellow-500">Hair cut & Coloring</li>
          </div>
        </div>
        <div className="col-span-2 ml-2 pr-8 sm:ml-20 sm:pr-0 sm:-mt-24 -mt-4">
          <img className="w-full aspect-auto" src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
