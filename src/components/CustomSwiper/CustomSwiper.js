import React from "react";
import { Swiper } from "swiper/react";
// Import Swiper styles
import 'swiper/scss';
import "swiper/css/navigation";
import "./CustomSwiper.scss"

function CustomSwiper({ children, ...props }) {
  return <Swiper {...props}>{children}</Swiper>;
}
export default CustomSwiper;
