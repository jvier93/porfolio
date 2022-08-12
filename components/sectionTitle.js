export default function SectionTitle({ title, bg, textColor }) {
  return (
    <div className="flex justify-center ">
      <div className="items-cente mb-6 flex flex-col">
        <h1
          className={`  mb-2 text-center text-3xl font-semibold md:text-4xl  ${textColor}`}
        >
          {title}
        </h1>
        {/* <div className={` h-[6px] w-11/12 rounded-full ${bg}`}></div> */}
      </div>
    </div>
  );
}
