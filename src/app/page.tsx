
'use client'

import LayoutPage from "@/components/LayoutPage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ListMovie from "@/components/ListMovie/page";
export default function Home() { 
  return <>
      <LayoutPage />
     <ListMovie title = {"New Releases"}/> 
 {/* <----------------------------------------------> */}
      <ListMovie title = {"Donghua"}/> 
  </>;
}
