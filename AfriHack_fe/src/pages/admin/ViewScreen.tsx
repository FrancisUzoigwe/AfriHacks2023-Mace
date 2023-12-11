import vite from "../../../src/assets/shoe.webp";

const Cards = () => {
  return (
    <div className="h-[220px] rounded-lg border border-gray-600 flex flex-col items-center">
      <div className="h-[170px] w-[90%] border mt-2  rounded-md">
        <img src={vite} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-[90%] items-center mt-2 flex justify-between">
        <div>Bags</div>
        <div className="text-red-600 font-bold">₦2,000</div>
      </div>
    </div>
  );
};
const ViewScreen = () => {
  return (
    <>
      <div className="w-full h-screen px-2">
        <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-lg:grid-cols-3  ">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default ViewScreen;
