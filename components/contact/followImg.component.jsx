import Image from "next/image";

import clouds from "../../public/img/services.jpg";

const FollowImg = () => {
  return (
    <div className="w-full md:w-1/2 h-full absolute md:relative flex justify-center items-center z-10">
      <div className=" w-full h-full  absolute left-0 top-0">
        <Image
          src={clouds}
          alt="clouds"
          layout="fill"
          objectFit="fill"
          className=""
          priority="true"
        />
      </div>
    </div>
  );
};

export default FollowImg;

/*

   
*/
