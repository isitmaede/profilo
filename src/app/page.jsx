import Image from "next/image";
import Header from "@/components/header";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Classichead from "@/components/Classichead";
import WorkBody from "@/components/WorkBody";
import MainHeader from "@/upgrade/MainHeader";
import MainBody from "@/upgrade/MainBody";
import MainFooter from "@/upgrade/MainFooter";
export default function Home() {
  return (
    <div className="">
      <MainHeader />
      <MainBody />
     
    </div>
  );
}
