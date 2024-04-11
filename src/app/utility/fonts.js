import { Poppins } from "next/font/google";
import localFont from "next/font/local";


export const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
  });
  
  export const gtSuper = localFont({
    src: '../../..//public/fonts/GT Super Text Book.woff2',
    display: 'swap',
  });
  