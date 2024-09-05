import { MostSearchRoomData } from "../../constant";
import { Text } from "../../units";
import { RoomDiv } from "..";

export const MostSearch = () => {
  return (
    <main className="flex flex-col p-6 mt-5 gap-12 z-10 bg-other-white-100">
      <Text
        classNAME="flex underline underline-offset-2 decoration-black place-self-center"
        size="header"
      >
        Frequently Searched Room
      </Text>

      <section className="grid grid-cols-3   gap-10">
        {MostSearchRoomData.map((room) => (
          <RoomDiv
            key={room.id}
            img={room.imgUrl}
            location={room.location}
            price={room.price}
            title={room.title}
            rating={room.rating}
          />
        ))}
      </section>
    </main>
  );
};
