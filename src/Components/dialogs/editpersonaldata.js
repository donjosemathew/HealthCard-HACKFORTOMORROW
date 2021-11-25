import { updateDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react/cjs/react.development";
import { db } from "../../firebase/firebase";
import Loader from "react-loader-spinner";
const EditDetails = ({ CloseDialogue, data, resetData, uid }) => {
  const docref = doc(db, "user", uid);
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [uploading, setUploading] = useState(false);
  const update = () => {
    setUploading(true);
    updateDoc(docref, {
      personaldata: {
        age: age,
        sex: sex,
        weight: weight,
        height: height,
      },
    })
      .then(() => {
        setUploading(false);
        resetData();
        CloseDialogue();
      })
      .catch((error) => {
        setUploading(false);
        console.log(error);
      });
  };
  useEffect(() => {
    if (data) {
      setAge(data.age);
      setHeight(data.height);
      setWeight(data.weight);
      setSex(data.sex);
    }
  }, [data]);
  return (
    <div className="bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center  modal-window  fixed z-50 ">
      {uploading ? (
        <Loader type="TailSpin" color="#575ce5" height={65} width={65} />
      ) : (
        <>
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
                onChange={(e) => {
                  setSex(e.target.value);
                }}
                className="text-2xl mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                id="name"
                type="text"
                placeholder="Gender"
                value={sex}
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
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                className="text-2xl mt-2   focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                id="name"
                type="number"
                value={age}
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
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                className="text-2xl mt-2   focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                id="name"
                type="number"
                placeholder="Height"
                value={height}
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
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                className="text-2xl  mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                id="name"
                type="number"
                placeholder="Weight"
                value={weight}
              />
            </div>
            <div className="flex justify-end mt-4 w-full flex-row bg-gray-50">
              <button
                onClick={update}
                className="p-4 ml-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
              >
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
        </>
      )}
    </div>
  );
};
export default EditDetails;
