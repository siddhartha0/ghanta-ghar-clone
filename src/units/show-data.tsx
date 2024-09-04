import { forwardRef, useEffect, useState } from "react";
import { Text } from "./text";

interface propTypes {
  inputData: string;
  datas: string[];
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  setDivAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowData = forwardRef<HTMLDivElement, propTypes>(
  ({ inputData, setInputData, setDivAlert, datas }, ref) => {
    const [mappingData, setMappingData] = useState<string[]>();

    useEffect(() => {
      const filteredData = datas.filter((data) =>
        data.toLowerCase().includes(inputData.toLowerCase())
      );
      setMappingData(filteredData);
    }, [inputData, datas]);

    return mappingData && mappingData?.length > 0 ? (
      <main
        ref={ref}
        className="flex flex-col max-h-56 overflow-y-scroll p-6 bg-other-white-100 gap-5"
      >
        {mappingData.map((data, index) => (
          <Text
            key={data + index}
            classNAME="cursor-pointer"
            onClick={() => {
              setInputData(data);
              setDivAlert(false);
            }}
          >
            {data}
          </Text>
        ))}
      </main>
    ) : null;
  }
);
