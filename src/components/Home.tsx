import Filter from "./Filter";
import ItemCard from "./ItemCard";

const Home = () => {
  return (
    <div className="relative top-30 xl:top-46 group">
      <section className="empty:h-12">
        <Filter />
      </section>
      <section className="space-y-10 py-12 lg:space-y-4 xl:space-y-6 2xl:mt-10 ">
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
