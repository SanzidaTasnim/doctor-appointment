import React from "react";
import { faClock, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import HeaderBottomInfo from "../HeaderBottomInfo/HeaderBottomInfo";
import './HeaderBottom.css';

const HeaderBottom = () => {
  const infos = [
    {
      id: 1,
      icon: faClock,
      color: "sky",
      heading: "Opening Hours",
      description: "Lorem ipsum is simply the dummy text of the primary",
    },
    {
      id:2,
      icon: faMapMarker,
      color: "navy",
      heading: "Visit Our Location",
      description: "Brooklyn,NY 10036,United States",
    },
    {
      id: 3,
      icon: faPhoneAlt,
      color: "sky",
      heading: "Contact Us Now",
      description: "+8801678-987876, +165789905000",
    },
  ];
  return (
      <div className="row container-lg m-auto header-bottom">
         {
            infos.map(info => <HeaderBottomInfo key={info.id} info={info}/>)
         }
      </div>
  )
};

export default HeaderBottom;
