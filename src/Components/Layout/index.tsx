import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <div>
        <div className="w-full  border-b-[1px] bg-white dark:bg-gray-800  fixed z-40 ">
          <div className="md:max-w-screen-md px-5 md:px-0  lg:max-w-screen-lg 2xl:max-w-8xl mx-auto h-full  pt-3 pb-5 flex items-center justify-center ">
            <h1 className=" font-bold text-[25px] dark:text-white text-gray-800 text-center">
              Pokedex
            </h1>
          </div>
        </div>
        <div className=" pt-[100px] md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-8xl mx-auto md:px-0 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
