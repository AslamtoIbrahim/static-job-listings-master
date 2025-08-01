import Featured from "./Featured";
import Language from "./Language";
import New from "./New";

const ItemCard = () => {
  return (
    <div className="card pd-x relative py-5">
      <section className="absolute -top-5 size-11">
        <img src="../../public/sources/images/loop-studios.svg" alt="" />
      </section>
      <section className="mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <p className="mr-4 text-sm font-semibold text-green-400">Company</p>
          <New />
          <Featured />
        </div>
        <p className="text-sm font-semibold text-green-900">
          Senior Frontend Developer
        </p>
        <div className="flex items-center gap-2 font-medium text-gray-400">
          <p>1d ago</p>
          <div className="point" />
          <p>Full Time</p>
          <div className="point" />
          <p>USA Only</p>
        </div>
      </section>
      <hr className="text-gray-400/80 my-4" />
      <section className="flex items-center gap-3 flex-wrap">
        <Language text="HTML" />
        <Language text="JavaScript" />
        <Language text="CSS" />
        <Language text="Python" />
      </section>
    </div>
  );
};

export default ItemCard;
