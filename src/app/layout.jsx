import { Tajwal , Cairo, Tajawal } from "next/font/google";
import "./globals.css";


const tajawal = Tajawal({
  subsets:['arabic'],
  weight:['400' , '800']
})

const cairo = Cairo({
  subsets:['arabic'],
  weight:['400' , '800']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className} bg-[#ffffff]`}>
        {children}
      </body>
    </html>
  );
}
