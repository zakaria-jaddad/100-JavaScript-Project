import counts from "../../data/counts";

const Count = ({icon, number, table}) => {
  return (
    <div
      className="
        flex  
        gap-3
        items-center
        justify-center sm:justify-start
      "
    >
      <img className="w-8 h-8" src={icon} alt={table} />  

      <div>
        <h3 className="text-heading-grey text-lg font-semibold">{number}</h3>
        <p className="text-line-grey text-xs">{table}</p>
      </div>

    </div>
  )
}
const Counts = () => {
  return counts.map((count) => {
    return <Count {...count} />
  })
}

export default Counts;