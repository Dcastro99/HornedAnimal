import React from "react";
import HornedBeast from "./HornedBeast";
import HornedGopher from "./horned-gophers.jpeg"
import Cassowary from "./cassowary1.jpg"
import NubianIbex from "./nubianibex.jpeg"


class Main extends React.Component {
  render() {
    return (
      <>
       <HornedBeast 

       title={'Horned Gopher'} imageUrl={HornedGopher} alt={'Horned Gopher Skeleton'} description={'Horned gophers are the smallest known horned mammals and the only known rodents ever to have had horns.'}/>

       <HornedBeast 

       title={'Cassowary'} imageUrl={Cassowary} alt={'Horned Bird'} description={'It\'s horn is called a casque. It has an inner layer of soft, spongy material and an outer layer of keratin. If you were to squeeze its horn, it would be soft in its middle portion.'}/>

       <HornedBeast 

       title={'Nubian Ibex'} imageUrl={NubianIbex} alt={'Horned Animal'} description={'Desert-dwelling goat species found in mountainous areas of northern and northeast Africa, and the Middle East.'}/>
      
       
      </>
    )
  }
}

export default Main;
