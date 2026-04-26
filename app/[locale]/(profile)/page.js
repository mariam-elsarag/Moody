import ContentTag from "../../_components/feature/home/ContentTag";
import Greating from "../../_components/feature/home/Greating";
import HomeWrapper from "../../_components/feature/home/HomeWrapper";
import Shape from "../../_components/ui/Shape";

const Home = () => {
  return (
    <div className="Container py-6 flex flex-col gap-10">
      <Shape className="size-[400px] start-0 top-0 " />
      <Shape className="size-[400px] end-0 bottom-0 " />
      <Greating name="Alex" />
      <HomeWrapper />
    </div>
  );
};

export default Home;
