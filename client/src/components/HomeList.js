import { SimpleGrid } from "@chakra-ui/react";
import SingleHome from './SingleHome'
import Search from './Search';
import NavBar from "./Navbar";


export default function Home({setReviews, favorites, setFavorites,homeList,changeSearch, reviews,onEditForm}) {
  return (
    <div className='content'>
      <NavBar/>
      <Search changeSearch={changeSearch}/>
      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {homeList.map((house) => {
          return (
            <SingleHome cityState={house.city}
            price={house.price}
            bedrooms={house.num_bedrooms}
            bathrooms={house.num_bathrooms}
            img={house.image}
            description={house.description}
            reviews={house.reviews}
            favorites={favorites}
            setFavorites={setFavorites}
            setReviews={setReviews}
            onEditForm={onEditForm}
            />
          )})}
      </SimpleGrid>
    </div>
  );
}


