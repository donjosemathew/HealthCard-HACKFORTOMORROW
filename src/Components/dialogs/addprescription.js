import { updateDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react/cjs/react.development";
import { db } from "../../firebase/firebase";
import Loader from "react-loader-spinner";
const EditPrescription = ({
  CloseDialogue,
  data,
  resetData,
  ClosePrescriptionDialogue,
  dialogueAim,
  uid,
  i,
}) => {
  const docref = doc(db, "user", uid);
  const [lab, setLab] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [icn, setIcn] = useState("");
  const [testvalue, setTestValue] = useState(0);
  const [uploading, setUploading] = useState(false);

  const update = () => {
    setUploading(true);
    updateDoc(docref, {
      test: [
        ...data,
        {
          category: category,
          date: "dd",
          icon: icn,
          labname: lab,
          url: url,
          value: testvalue,
        },
      ],
    })
      .then(() => {
        ClosePrescriptionDialogue();
        setUploading(false);
        resetData();
      })
      .catch((error) => {
        setUploading(false);
        console.log(error);
      });
  };
  const deleteData = (i) => {
    let deletedArray = data;
    //console.log(data);
    deletedArray.pop(i);

    setUploading(true);
    updateDoc(docref, {
      test: deletedArray,
    })
      .then(() => {
        setUploading(false);
        resetData();
        ClosePrescriptionDialogue();
      })
      .catch((error) => {
        setUploading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (data) {
      //setAge(data.age);
      // setHeight(data.height);
      //setWeight(data.weight);
      // setSex(data.sex);
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
              {dialogueAim === "delete" ? "Delete Results" : "Add Test Results"}
            </p>

            {dialogueAim !== "delete" ? (
              <>
                <div class="lg:mt-6 mt-10 flex flex-col ">
                  <label
                    className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
                    for="username"
                  >
                    Category
                  </label>
                  <input
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    className="text-2xl mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                    id="name"
                    type="text"
                    placeholder="Category: Sugar"
                    value={category}
                  />
                </div>
                <div class="lg:mt-6 mt-10 flex flex-col ">
                  <label
                    className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
                    for="username"
                  >
                    Lab:
                  </label>
                  <input
                    onChange={(e) => {
                      setLab(e.target.value);
                    }}
                    className="text-2xl mt-2   focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                    id="name"
                    type="text"
                    value={lab}
                    placeholder="Age"
                  />
                </div>
                <div class="lg:mt-6 mt-10 flex flex-col ">
                  <label
                    className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
                    for="username"
                  >
                    Test value:
                  </label>
                  <input
                    onChange={(e) => {
                      setTestValue(e.target.value);
                    }}
                    className="text-2xl mt-2   focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                    id="name"
                    type="number"
                    placeholder="Height"
                    value={testvalue}
                  />
                </div>
                <div class="lg:mt-6 mt-10 flex flex-col ">
                  <label
                    className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
                    for="username"
                  >
                    Test result url:
                  </label>
                  <input
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                    className="text-2xl  mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                    id="name"
                    type="url"
                    placeholder="Weight"
                    value={url}
                  />
                </div>
                <div class="lg:mt-6 mt-10 flex flex-col ">
                  <label
                    className="text-3xl head-txt text-gray-700 tracking-tight font-medium"
                    for="username"
                  >
                    Icon:
                  </label>
                  <input
                    onChange={(e) => {
                      setIcn(e.target.value);
                    }}
                    className="text-2xl  mt-2  focus:outline-none focus:bg-gray-100  bg-gray-200 text-gray-700 tracking-tight p-4 outline-none   rounded "
                    id="name"
                    type="text"
                    placeholder="Icon :💉,🧂"
                    value={icn}
                  />
                </div>
                <div className="flex justify-end mt-4 w-full flex-row bg-gray-50">
                  <button
                    onClick={update}
                    className="p-4 ml-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                  >
                    &nbsp;Add&nbsp;
                  </button>
                  <button
                    onClick={ClosePrescriptionDialogue}
                    className="p-4 ml-4 rounded btn-active font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-end mt-4 w-full flex-row bg-gray-50">
                <button
                  onClick={deleteData}
                  className="p-4 ml-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                >
                  &nbsp;Delete&nbsp;
                </button>
                <button
                  onClick={ClosePrescriptionDialogue}
                  className="p-4 ml-4 rounded btn-active font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default EditPrescription;
