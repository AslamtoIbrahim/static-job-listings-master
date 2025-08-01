import ClearButton from "./ClearButton"
import KeyWord from "./KeyWord"

const Filter = () => {
  return (
    <div className="card pd-x py-4 shad flex justify-between items-center">
      <section className="w-full flex flex-wrap gap-3">
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
