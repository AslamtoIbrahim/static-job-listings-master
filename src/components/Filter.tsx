import ClearButton from "./ClearButton"
import KeyWord from "./KeyWord"

const Filter = () => {
  return (
    <div className="card pd-x py-4 lg:py-5 2xl:py-6 shad flex justify-between items-center gap-2 ">
      <section className="w-full flex flex-wrap gap-3 lg:gap-4 2xl:gap-6">
        <KeyWord text="frontend"/>
        <KeyWord text="CSS"/>
        <KeyWord text="JavaScript"/>
      </section>
      <section>
        <ClearButton />
      </section>
    </div>
  )
}

export default Filter
