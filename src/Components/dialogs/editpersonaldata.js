const EditDetails = ({ CloseDialogue }) => {
  return (
    <div className="bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center  modal-window  fixed z-50 ">
      <div className="dialog p-8 pl-12 rounded-md w-2/5  bg-white">
        <p className="text-3xl font-medium mt-4 tracking-tight">
          Edit Personal Details
        </p>

        <div class="lg:mt-6 mt-10 flex flex-col ">
          <label
            className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
            for="username"
          >
            Gender:
          </label>
          <input
            className="text-2xl mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
            id="name"
            type="text"
            placeholder="Gender"
          />
        </div>
        <div class="lg:mt-6 mt-10 flex flex-col ">
          <label
            className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
            for="username"
          >
            Age:
          </label>
          <input
            className="text-2xl mt-2   focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
            id="name"
            type="number"
            placeholder="Age"
          />
        </div>
        <div class="lg:mt-6 mt-10 flex flex-col ">
          <label
            className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
            for="username"
          >
            Height:
          </label>
          <input
            className="text-2xl mt-2   focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
            id="name"
            type="number"
            placeholder="Height"
          />
        </div>
        <div class="lg:mt-6 mt-10 flex flex-col ">
          <label
            className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
            for="username"
          >
            Weight:
          </label>
          <input
            className="text-2xl  mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
            id="name"
            type="number"
            placeholder="Weight"
          />
        </div>
        <div className="flex justify-end mt-4 w-full flex-row bg-gray-50">
          <button className="p-4 ml-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50">
            &nbsp;Save&nbsp;
          </button>
          <button
            onClick={CloseDialogue}
            className="p-4 ml-4 rounded btn-active font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditDetails;
