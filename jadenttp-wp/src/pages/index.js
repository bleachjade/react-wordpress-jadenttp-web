import * as Services from "services";
import { useEffect, useState } from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import SectionGallery from "components/SectionGallery";

export default function Home() {
  // const [postData, setPostData] = useState([]);
  // useEffect(() => {
  //   Services.getPosts().then((res) => {
  //     if (res.status == 200) {
  //       setPostData(res?.data);
  //     }
  //   });
  // }, []);
  return (
    <>
      <Header />
      <SectionGallery />
      <Footer />
    </>
  );
}
