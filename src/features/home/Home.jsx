import React from "react";
import HomeBanner from "./HomeBanner";
import BookingServices from "./BookingServices";
import WhyRoyalEnfield from "./WhyRoyalEnfield";

// Home Page Wrapper
export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <HomeBanner />
      <BookingServices />
      <WhyRoyalEnfield />
    </div>
  );
}
