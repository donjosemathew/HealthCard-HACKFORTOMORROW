import { FaRegHospital } from "react-icons/fa";
import Loader from "react-loader-spinner";
const Prescription = ({ data, load }) => {
  console.log(data);
  return (
    <div className="prescription w-full h-full mt-5 p-6">
      {!load ? (
        data.length !== 0 ? (
          data.map((item, index) => {
            return (
              <div className="prescription__card mt-8" key={index}>
                <p className="text-2xl head-txt font-medium tracking-tight">
                  {item.date}
                </p>
                <div className="prescription__card__subcard p-6 mt-3 bg-white">
                  <p className="text-2xl head-txt font-medium tracking-tight">
                    Doctor Name:
                    <span className="font-bold sub-txt ">{item.doctrname}</span>
                  </p>
                  <div className="flex flex-row items-center mt-6">
                    <FaRegHospital size="2em" color="#8390bb" />
                    <p className="text-2xl ml-5 head-txt font-medium tracking-tight">
                      {item.hospital}
                    </p>
                  </div>

                  <div className="prescription__table flex flex-col mt-3">
                    <div className="flex flex-row w-full ">
                      <p className="text-2xl text-white ml-5  font-medium tracking-tight">
                        s
                      </p>
                      <p className="text-2xl ml-5 w-full text-center  head-txt font-medium tracking-tight">
                        Med.Name
                      </p>
                      <p className="text-2xl ml-5  text-center w-full head-txt font-medium tracking-tight">
                        Dosage
                      </p>
                      <p className="text-2xl ml-5  text-center w-full head-txt font-medium tracking-tight">
                        Duration
                      </p>
                    </div>
                    {item.medicine.map((data, i) => {
                      return (
                        <div className="flex flex-row w-full mt-3" key={i}>
                          <p className="text-2xl  sub-txt ml-5  font-medium tracking-tight">
                            {i + 1}
                          </p>
                          <p className="text-2xl ml-5 sub-txt w-full text-center  head-txt font-medium tracking-tight">
                            {data.medname}
                          </p>
                          <p className="text-2xl ml-5 sub-txt  text-center w-full head-txt font-medium tracking-tight">
                            {data.dosage}
                          </p>
                          <p className="text-2xl ml-5 sub-txt  text-center w-full head-txt font-medium tracking-tight">
                            {data.duration}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" w-full flex items-center justify-center">
            <p className="text-3xl font-bold">No Data Available !</p>
          </div>
        )
      ) : (
        <div className="flex  w-full h-full justify-center items-center">
          <Loader type="TailSpin" color="#575ce5" height={65} width={65} />
        </div>
      )}
    </div>
  );
};

export default Prescription;
