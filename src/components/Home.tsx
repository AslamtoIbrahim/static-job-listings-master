import Filter from "./Filter";
import ItemCard from "./ItemCard";

const Home = () => {
  return (
    <div className="relative top-30 xl:top-32 2xl:top-40">
      <Filter />
      <section className="shad mt-8 space-y-10 lg:space-y-4 xl:space-y-6 2xl:mt-10">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
    </div>
  );
};

export default Home;
