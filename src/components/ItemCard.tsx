import Featured from "./Featured";
import Language from "./Language";
import New from "./New";

const ItemCard = () => {
  return (
    <div className="card pd-x featured relative py-5 lg:py-8 xl:py-10 2xl:py-12 lg:flex lg:items-center lg:justify-between">
      <div className="lg:flex lg:items-center lg:gap-6 2xl:gap-8">
        <section className="absolute lg:static -top-5 size-11 lg:size-16 xl:size-20 2xl:size-24">
          <img src="../../public/sources/images/loop-studios.svg" alt="" />
        </section>
        <section className="mt-4 lg:mt-0 space-y-2 lg:space-y-3 2xl:space-y-4">
          <div className="flex items-center gap-2 xl:gap-3">
            <p className="mr-4 text-xs lg:text-base xl:text-lg 2xl:text-xl font-semibold text-green-400 md:text-sm">
              Company
            </p>
            <New />
            <Featured />
          </div>
          <p className="tx-s cursor-pointer font-semibold text-green-900 hover:text-green-400">
            Senior Frontend Developer
          </p>
          <div className="tx-s flex items-center gap-2 font-medium text-gray-400">
            <p>1d ago</p>
            <div className="point" />
            <p>Full Time</p>
            <div className="point" />
            <p>USA Only</p>
          </div>
        </section>
      </div>
      <hr className="my-4 text-gray-400/80 lg:hidden" />
      <section className="flex flex-wrap items-center gap-3 xl:gap-4">
        <Language text="HTML" />
        <Language text="JavaScript" />
        <Language text="CSS" />
        <Language text="Python" />
      </section>
    </div>
  );
};

export default ItemCard;
