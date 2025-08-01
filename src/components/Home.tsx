import Filter from "./Filter";
import ItemCard from "./ItemCard";

const Home = () => {
  return (
    <div className="mg-x relative top-26">
       <Filter />
       <section className="mt-8 bg-white shad">
        <ItemCard />
       </section>
    </div>
  );
};

export default Home;
