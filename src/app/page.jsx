import MainBodyUpdate from "../../update/MainBodyUpdate";
import MainHeaderUpdate from "../../update/MainHeaderUpdate";
import MainHeroUpdate from "../../update/MainHeroUpdate";
export default function Home() {
  return (
    <div className="">
     <MainHeaderUpdate />
      <MainHeroUpdate />
     <MainBodyUpdate />
    </div>
  );
}
