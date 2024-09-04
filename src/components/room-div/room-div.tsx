import React from "react";
import { Text } from "../../units";

interface propTypes {
  img: string;
  title: string;
  location: string;
  price: string;
}

export const RoomDiv = React.memo(
  ({ img, title, location, price }: propTypes) => {
    return (
      <main className="flex flex-col place-items-center p-4 gap-4 bg-other-white-200 rounded-xl">
        <div
          style={{
            backgroundImage: `url(${img})`,
            width: "90%",
            height: "250px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" hover:animate-pulsing  cursor-pointer "
        />
        <Text>{title}</Text>
        <Text size="tiny">{location}</Text>
        <Text size="tiny" usage="secondary">
          Rs. {price}
        </Text>
      </main>
    );
  }
);
