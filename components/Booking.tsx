"use client";

import { BlinkBlur } from "react-loading-indicators";

const Booking = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlinkBlur
        color={["#32cd32", "#327fcd", "cd32cd", "#cd8032"]}
        size="large"
        textColor="black"
      />

      <div className="text-sm text-muted-foreground mt-4 font-bold">
        <p>Booking Event, don't click on anything⛔️⛔️...</p>
      </div>
    </div>
  );
};

export default Booking;
