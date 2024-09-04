import React, { useState } from "react";
import hero from "../../assets/hero.jpg";
import { Button, InputField, ShowData } from "../../units";
import { useOutsideClick } from "../../hooks";
import { LocationData } from "../../constant";
import UseCalender from "../../units/Calender";

export const TopSection = React.memo(() => {
  const [locationDetail, setLocationDetails] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationDivAlert, setLocationDivAlert] = useState(false);
  const [dateAlert, setDateAlert] = useState(false);

  const closeLocationDiv = useOutsideClick(() => setLocationDivAlert(false));

  const closeDateAlert = useOutsideClick(() => setDateAlert(false));

  const searchLocation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`your search result ${locationDetail} couldn't be find`);
  };

  return (
    <main className="relative flex -mt-5">
      <form
        onSubmit={searchLocation}
        className="bg-brand min-w-[450px] absolute top-52 right-0 p-8 rounded-xl flex gap-4 z-10"
      >
        <InputField
          inputSize="large"
          placeholder="Select your location"
          value={locationDetail}
          onChange={(e) => setLocationDetails(e.target.value)}
          onClick={() => setLocationDivAlert(true)}
        />
        {locationDivAlert && (
          <div className="absolute top-24">
            <ShowData
              inputData={locationDetail}
              setInputData={setLocationDetails}
              setDivAlert={setLocationDivAlert}
              ref={closeLocationDiv}
              datas={LocationData}
            />
          </div>
        )}

        <InputField
          inputSize="large"
          placeholder="Arrival Date"
          onClick={() => setDateAlert(true)}
          value={dateValue}
        />

        {dateAlert && (
          <div className="absolute top-24 left-52">
            <UseCalender
              ref={closeDateAlert}
              date={dateValue}
              setDateValue={setDateValue}
              closeDiv={setDateAlert}
            />
          </div>
        )}

        <Button usage="pop-up" type="submit">
          Search
        </Button>

        <Button
          usage="danger"
          type="button"
          onClick={() => {
            setDateValue("");
            setLocationDetails("");
          }}
        >
          Clear
        </Button>
      </form>
      <img src={hero} alt="" className="" />
    </main>
  );
});
