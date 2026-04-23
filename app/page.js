import React from "react";
import Shape from "./_components/ui/Shape";
import Record from "./_components/feature/chat/Record";

const Home = () => {
  return (
    <main className="relative min-h-[calc(100dvh_-_70px)]">
      <Shape className="size-[384px] start-[-10%] top-1/2 -translate-y-1/2 " />
      <Shape className="size-[384px] end-[-10%] bottom-10 " />
      <Record />
    </main>
  );
};

export default Home;
