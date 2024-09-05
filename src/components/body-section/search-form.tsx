import React from "react";
import { Button, DropDown, InputField, Text } from "../../units";

interface propTypes {
  title: string;
}

export const SearchContainer = React.memo(({ title }: propTypes) => {
  return (
    <main className="flex  flex-col py-14 px-8 bg-white w-[1200px]  gap-6 mt-24">
      {title === "short" && (
        <DropDown options={["Select your purpose", "Fun", "Stay"]} outline />
      )}
      <DropDown outline options={["Select your District"]} />
      <DropDown outline options={["Select your Location"]} />

      <section className="grid grid-cols-3 gap-4 ">
        <div className="flex flex-col gap-1">
          <Text size="small">Check in Date</Text>
          <InputField inputSize="small" outline type="date" />
        </div>

        {title === "long" ? (
          <div className="flex flex-col gap-1">
            <Text size="small">Check out Date</Text>
            <InputField inputSize="small" outline type="date" />
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <Text size="small">Time in hours</Text>
            <DropDown outline options={["Time in hrs"]} inputSize="small" />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Text size="small">Number of Guests:</Text>
          <InputField inputSize="small" outline type="number" />
        </div>
      </section>

      <Button
        usage="click"
        size="large"
        classNAME="absolute -bottom-7 place-content-center left-[480px] z-10 flex w-96"
      >
        Search
      </Button>
    </main>
  );
});
