import React, { useState } from "react";
import { Button } from "../../units";
import { SearchContainer } from "./search-form";

export const TopSection = React.memo(() => {
  const [title, setTitle] = useState("");

  const chooseStay = (data: string) => {
    setTitle(data);
  };

  return (
    <main className=" flex flex-col relative place-items-center  gap-2 z-10">
      <header className="flex absolute top-10  bg-ternary p-3 rounded-xl place-items-center gap-2">
        <Button
          outline={true}
          usage="click"
          onClick={() => chooseStay("short")}
        >
          Short Stay
        </Button>
        <Button outline={true} onClick={() => chooseStay("long")}>
          Long Stay
        </Button>
      </header>

      <SearchContainer title={title} />
    </main>
  );
});
