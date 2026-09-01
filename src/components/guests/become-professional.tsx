type popupProps = {
  position: {
    x: string,
    y: string,
  }
  setPop:() => void,
}
const PopUpRegister = ({position, setPop}: popupProps) => {
  const {x, y} = position

  return (
    <div className={`flex flex-col absolute text-xs 425xl:text-sm lg:text-base font-medium rounded-lg transition-colors shadow-xl bg-slate-100 ${x} ${y}`}>
      <button onClick={setPop} className={"inline-flex text-nowrap outline-0 ring-0 p-3 border-b-[.8px] border-b-[#DCDCDC] text-primary-text hover:text-secondary-orange"}>Become a Professional</button>
      <button onClick={setPop} className={"inline-flex text-nowrap outline-0 ring-0 p-3 text-primary-text hover:text-secondary-orange"}>Become a User</button>
    </div>
  )
}

export default PopUpRegister