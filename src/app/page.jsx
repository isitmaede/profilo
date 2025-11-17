import Image from "next/image";
import Header from "@/components/header";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Classichead from "@/components/Classichead";
import WorkBody from "@/components/WorkBody";
export default function Home() {
  return (
    <div className="">
      <Classichead />
      <WorkBody />
    </div>
  );
}
