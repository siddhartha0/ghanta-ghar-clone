import { MostSearchRoomData } from "../../constant";
import { Text } from "../../units";
import { RoomDiv } from "..";

export const MostSearch = () => {
  return (
    <main className="flex flex-col p-6 mt-5 gap-8 z-10 bg-white">
      <Text
        classNAME="flex underline underline-offset-2 decoration-black place-self-center"
        size="header"
      >
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
