import { Heading, SimpleGrid } from "@chakra-ui/react";
import SingleHome from './SingleHome'
import NavBar from "./Navbar";


export default function Favorites({ favorites }) {


  return (
    <div>
      <NavBar/>
      <div  className="favoriteHouse">
      <Heading as="h2" mb="4">
        Favorite Listings
      </Heading>
      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {favorites.map((house, i) => (
          <SingleHome
            key={i}
            cityState={house.cityState}
            img={house.img}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            date={house.date}
            price={house.price}
            description={house.description}
           
          />
        ))}
      </SimpleGrid>
      </div>
    </div>
  );
}