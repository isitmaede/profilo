import { Cairo, Tajawa , Poppins } from "next/font/google";
import "./globals.css";
import Classichead from "@/components/Classichead";
import WorkBody from "@/components/WorkBody";


const pop = Poppins({
    subsets:['latin'],
    weight:['400' , '600' , '800']
})

const cairo = Cairo({
  subsets:['arabic'],
  weight:['400' , '800']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
