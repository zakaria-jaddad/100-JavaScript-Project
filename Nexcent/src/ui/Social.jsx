
const Social = ({icon, iconName, url}) => {
  return (
    <a href={url} className="w-[36px] h-[36px]" target="_blank">
    <div className="w-full h-full flex justify-center items-center">
      <img className="rounded-full w-full h-full" src={icon} alt={iconName} />
    </div>
    </a>
  )
}
export default Social;