import React from "react";
import { Text } from "../../units";
import { ShowStar } from "../../units/show-star";

interface propTypes {
  img: string;
  title: string;
  location: string;
  price: string;
  rating: number;
}

export const RoomDiv = React.memo(
  ({ img, title, location, price, rating }: propTypes) => {
    return (
      <main className="flex flex-col  p-4 gap-2 bg-white rounded-xl">
        <div
          style={{
            backgroundImage: `url(${img})`,
            width: "100%",
            height: "250px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" hover:animate-pulsing  cursor-pointer "
        />
        <Text>{title}</Text>
        <Text size="small">{location}</Text>
        <Text size="small" varaint="semi-bold" usage="secondary">
          Rs. {price}
        </Text>
        <ShowStar length={rating} />
      </main>
    );
  }
);
