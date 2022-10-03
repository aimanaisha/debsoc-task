const Display = (props) => {
  return (
    <li className="text-[#f1faee] sm:w-2/3 list-none text-center sm:text-xl md:text-2xl px-5 py-2  my-4 bg-[#457b9d] h-24 font-['Short Stack'] flex items-center justify-center xl:w-2/5 mx-auto">
      <span className="grow" />
      <span>{props.onRendering}</span>
      <span className="grow" />
      <span className="w-[40px] h-[40px] rounded-full hover:bg-[#0005] hover:cursor-pointer bg-opacity-5 flex items-center justify-center" onClick={props.onRemove}>×</span>
    </li>
  );
};
export default Display;
