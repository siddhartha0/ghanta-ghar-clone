import { Text } from "./text";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface propTypes {
  length: number;
}

type starTypes = {
  fill: string;
};

const generateStar = (length: number) => {
  const emptyStar: starTypes[] = [];
  for (let i = 0; i < length; i++) {
    if (i === Math.floor(length)) {
      emptyStar.push({
        fill: "half",
      });
      break;
    }
    emptyStar.push({
      fill: "full",
    });
  }
  return emptyStar;
};

export const ShowStar = React.memo(({ length }: propTypes) => {
  const star = generateStar(length);

  return (
    <div className="flex  place-items-center">
      {star?.map((data, i) =>
        data.fill === "full" ? (
          <Icon
            icon="material-symbols:star"
            height={18}
            color="#ffd700"
            key={i}
          />
        ) : (
          <Icon
            icon="fluent:star-half-28-filled"
            height={18}
            color="#ffd700"
            key={i}
          />
        )
      )}
      <Text size="small">{length} star</Text>
    </div>
  );
});
