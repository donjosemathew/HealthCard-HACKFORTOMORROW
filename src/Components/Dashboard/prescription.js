import { FaRegHospital } from "react-icons/fa";
const Prescription = () => {
  return (
    <div className="prescription w-full h-full mt-5 p-6">
      <div className="prescription__card">
        <p className="text-2xl head-txt font-medium tracking-tight">
          29 Januvary 2021
        </p>
        <div className="prescription__card__subcard p-6 mt-3 bg-white">
          <p className="text-2xl head-txt font-medium tracking-tight">
            Doctor Name:
            <span className="font-bold sub-txt "> Dr.Michelle Mitchelle</span>
          </p>
          <div className="flex flex-row items-center mt-6">
            <FaRegHospital size="2em" color="#8390bb" />
            <p className="text-2xl ml-5 head-txt font-medium tracking-tight">
              MIMS Calicut
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
            <div className="flex flex-row w-full mt-3">
              <p className="text-2xl  sub-txt ml-5  font-medium tracking-tight">
                2
              </p>
              <p className="text-2xl ml-5 sub-txt w-full text-center  head-txt font-medium tracking-tight">
                TAB.DEMO MEDICINE 2
              </p>
              <p className="text-2xl ml-5 sub-txt  text-center w-full head-txt font-medium tracking-tight">
                1 Morning 1 Night
              </p>
              <p className="text-2xl ml-5 sub-txt  text-center w-full head-txt font-medium tracking-tight">
                10Days
              </p>
            </div>
            <div className="flex flex-row w-full mt-3">
              <p className="text-2xl sub-txt   text-white ml-5  font-medium tracking-tight">
                1
              </p>
              <p className="text-2xl sub-txt ml-5 w-full text-center  head-txt font-medium tracking-tight">
                TAB.DEMO MEDICINE 1
              </p>
              <p className="text-2xl sub-txt ml-5  text-center w-full head-txt font-medium tracking-tight">
                1 Morning 1 Night
              </p>
              <p className="text-2xl sub-txt ml-5  text-center w-full head-txt font-medium tracking-tight">
                10Days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prescription__card mt-8">
        <p className="text-2xl head-txt font-medium tracking-tight">
          29 Januvary 2021
        </p>
        <div className="prescription__card__subcard p-6 mt-3 bg-white">
          <p className="text-2xl head-txt font-medium tracking-tight">
            Doctor Name:
            <span className="font-bold sub-txt "> Dr.Michelle Mitchelle</span>
          </p>
          <div className="flex flex-row items-center mt-6">
            <FaRegHospital size="2em" color="#8390bb" />
            <p className="text-2xl ml-5 head-txt font-medium tracking-tight">
              MIMS Calicut
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
            <div className="flex flex-row w-full mt-3">
              <p className="text-2xl  sub-txt ml-5  font-medium tracking-tight">
                2
              </p>
              <p className="text-2xl ml-5 sub-txt w-full text-center  head-txt font-medium tracking-tight">
                TAB.DEMO MEDICINE 2
              </p>
              <p className="text-2xl ml-5 sub-txt  text-center w-full head-txt font-medium tracking-tight">
                1 Morning 1 Night
              </p>
              <p className="text-2xl ml-5 sub-txt  text-center w-full head-txt font-medium tracking-tight">
                10Days
              </p>
            </div>
            <div className="flex flex-row w-full mt-3">
              <p className="text-2xl sub-txt    text-white ml-5  font-medium tracking-tight">
                1
              </p>
              <p className="text-2xl sub-txt ml-5 w-full text-center  head-txt font-medium tracking-tight">
                TAB.DEMO MEDICINE 1
              </p>
              <p className="text-2xl sub-txt ml-5  text-center w-full head-txt font-medium tracking-tight">
                1 Morning 1 Night
              </p>
              <p className="text-2xl sub-txt ml-5  text-center w-full head-txt font-medium tracking-tight">
                10Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
