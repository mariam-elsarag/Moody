import Record from "../_components/feature/chat/Record";
import Shape from "../_components/ui/Shape";
import Wave from "../_components/ui/Wave";

const Home = () => {
  return (
    <main className="relative min-h-[calc(100dvh_-_70px)] flex items-center justify-center">
      <Shape className="size-[384px] start-[-10%] top-1/2 -translate-y-1/2 " />
      <Shape className="size-[384px] end-[-10%] bottom-10 " />
      <div className="w-full max-w-[672px]">
        <Wave />
      </div>
      <Record />
    </main>
  );
};

export default Home;
