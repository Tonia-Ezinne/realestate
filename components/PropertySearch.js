import React from "react";

const PropertySearch = ({ handleSubmit }) => {
  return (
    <div className="bg-[#FFFFFF33] p-4 container mx-auto pxw-11/12">
      <div className="flex w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 bg-white p-1 rounded-lg rounded-br-none rounded-tr-none divide-y md:divide-y-0 md:divide-x divide-[#CAD4DE] w-full">
          <div className="flex flex-col mt-1 text-center items-center">
            <h1 className="font-semibold">LOCATION</h1>
            <input
              type="text"
              placeholder="Enter location"
              className="rounded p-2 mt-1 w-full text-center"
            />
          </div> 

          <div className="flex flex-col mt-1">
            <h1 className="font-semibold text-center">PROPERTY TYPE</h1>
            <input
              type="text"
              placeholder="Enter property type"
              className="rounded p-2 mt-1 w-full text-center"
            />
          </div>

          <div className="flex mt-1 flex-col items-center">
            <h1 className="font-semibold">BEDROOM</h1>
            <div className="flex items-center gap-5 mt-2 w-full justify-center">
              <button aria-label="Decrease" className="focus:outline-none">
                <img src="/btn.svg" width="20" height="15" alt="Decrease" />
              </button>
              <button aria-label="Current Value" className="focus:outline-none">
                <img src="/0.svg" width="20" height="10" alt="Current Value" />
              </button>
              <button aria-label="Increase" className="focus:outline-none">
                <img src="/bttn.svg" width="20" height="10" alt="Increase" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-start ">
  <div className="bg-[#3D9970] cursor-pointer  justify-start rounded-tr-lg rounded-br-lg p-3 px-24">
    <p className="text-white font-medium text-lg ">Find Property</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default PropertySearch;
