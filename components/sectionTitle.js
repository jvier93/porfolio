export default function SectionTitle({ title, bg, textColor }) {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center">
        <div className={` h-[6px] w-11/12 rounded-full ${bg}`}></div>
        <h1 className={`  text-center  font-medium  ${textColor}`}>{title}</h1>
      </div>
    </div>
  );
}
