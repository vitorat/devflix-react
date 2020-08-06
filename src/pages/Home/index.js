import React from 'react';
import Menu from '../../components/Menu'
import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription={"The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction. Find out how it works."}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[0]}
      />

      <Carousel
        category={initialData.categories[1]}
      />

      <Carousel
        category={initialData.categories[2]}
      />      

      <Carousel
        category={initialData.categories[3]}
      />      

      <Carousel
        category={initialData.categories[4]}
      />      

      <Carousel
        category={initialData.categories[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
