
import { Heading, SimpleGrid } from "@chakra-ui/react";
import SingleHome from './SingleHome'


const data = [
  {
    cityState: "Tampa, FL",
    bedrooms: "3",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home2.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  //more data objects below 
]

export default function Home() {
  return (
    <div className='content'>

      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {data.map((house, i) => (
          <SingleHome
            key={i}
            cityState={house.cityState}
            img={house.img}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            date={house.date}
            price={house.price}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}