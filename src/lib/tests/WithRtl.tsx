import React from "react";

const WithRtl = (component: React.ReactNode): JSX.Element => (
  <div dir="rtl">{component}</div>
);

export default WithRtl;
