import { useEffect, useState } from "react";
import * as Services from "services";

const SectionGallery = () => {
  const [featuredImage, setFeaturedImage] = useState([]);

  useEffect(() => {
    Services.getPostFeaturedImage().then((res) => {
      if (res.status == 200) {
        setFeaturedImage(res?.data);
      }
    });
  }, []);
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="flex gap-[20px] px-[100px] py-[80px]">
        {featuredImage.map((item, index) => {
          return (
            <div className="bg-red-100 text-black " key={index}>
              <img className="w-full h-full object-contain" src={item?.source_url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionGallery;
