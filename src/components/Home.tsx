import { useContext } from "react";
import Filter from "./Filter";
import ItemCard from "./ItemCard";
import { KeysContext } from "../store/KeysContext";

const Home = () => {
  const context = useContext(KeysContext);
  console.log('data 🎃: ',context.keys);
  return (
    <div className="group relative top-30 xl:top-46">
      <section className="empty:h-12">
        <Filter />
      </section>
      <section className="space-y-10 py-12 lg:space-y-4 xl:space-y-6 2xl:mt-10">
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
