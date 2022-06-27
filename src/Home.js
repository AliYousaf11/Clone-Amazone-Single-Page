import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
    
      <div className="home__container">
        <img className="home__image" src="./a/container1.jpg" alt="" />
      </div>

      <div className="home__row">
        <Product
          title="Aenwood okan Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater dou  Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater douughhoughho  Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater douughhowhisk 5 liter Glass bowl"
          price={29.99}
          image="./image/desktop.jpg"
          rating={7}
        />

        <Product
          title="Aenwood okan Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater dou  Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater douughhoughho  Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater douughhowhisk 5 liter Glass bowl"
          price={113}
          image="/image/desktop.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          title="Cenwood Kmix Stand Mixer for baking styling kitchen
           mixer with k-beater douughhookand whisk 5 liter Glass bowl"
          price={90}
          image="/image/book1.jpg"
          rating={6}
        />

        <Product
          title="Denwood Kmix Stand Mixer for baking styling kitchen 
          mixer with k-beater douughhookand whisk 5 liter Glass bowl"
          price={3.19}
          image="/image/book2.jpg"
          rating={2}
        />

        <Product
          title="Eenwood Kmix Stand Mixer for baking styling kitchen
           mixer with k-beater douughhookand whisk 5 liter Glass bowl"
          price={219}
          image="./image/book3.jpg"
          rating={8}
        />
      </div>
      
      <div className="home__row">
        <Product
          title="Fenwood Kmix Stand Mixer for baking styling kitchen 
          mixer with k-beater douughhookand whisk 5 liter Glass bowl
          Kenwood Kmix  Aenwood okan Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater dou  Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater douughhoughho  Kmix Stand Mixer for baking styling kitchen mixer 
          with k-beater douughhowhisk 5 liter Glass bowlStand  Mixer for baking styling kitchen mixer
           with k-beater douughhookand whisk 5 liter Glass bowl"
          price={9.99}
          image="/image/desktop.jpg"
          rating={5}
        />
      </div>

    </div>
  );
}

export default Home;
