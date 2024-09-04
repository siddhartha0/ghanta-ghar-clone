import { MostSearchRoomData } from "../../constant";
import { Text } from "../../units";
import { RoomDiv } from "../";

export const MostSearch = () => {
  return (
    <main className="flex flex-col gap-8">
      <Text classNAME="flex place-self-center" size="header">
        Frequently Searched Room
      </Text>
      <section className="grid grid-cols-3  gap-10">
        {MostSearchRoomData.map((room) => (
          <RoomDiv
            key={room.id}
            img={room.imgUrl}
            location={room.location}
            price={room.price}
            title={room.title}
          />
        ))}
      </section>
    </main>
  );
};
