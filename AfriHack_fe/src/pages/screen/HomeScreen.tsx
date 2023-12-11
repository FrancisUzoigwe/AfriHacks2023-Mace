import vite from "../../../public/vite.svg";

const Products = () => {
  return (
    <div className="h-[250px] flex items-center border flex-col border-gray-600 rounded-md">
      <div className="w-[95%] mt-2 border  rounded-md h-[150px]">
        <img src={vite} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="font-bold">Boys Bags</div>
      <div className="text-red-500 font-bold">₦2,000</div>
      <div className="">
        <button className="px-4 py-2 rounded-md hover:scale-[1.1] transition-all duration-300 bg-black text-white text-[13px]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-lg:grid-cols-3 ">
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  );
};

export default HomeScreen;
