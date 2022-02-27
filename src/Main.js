import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
       <HornedBeast 

       title1={'Horned Gopher'} description1={'Horned gophers are the smallest known horned mammals and the only known rodents ever to have had horns.'}
       title2={'Cassowary'} description2={'It\'s horn is called a casque. It has an inner layer of soft, spongy material and an outer layer of keratin. If you were to squeeze its horn, it would be soft in its middle portion.'}
       title3={'Nubian Ibex'} description3={'Desert-dwelling goat species found in mountainous areas of northern and northeast Africa, and the Middle East.'}
       />
      </>
    )
  }
}

export default Main;
