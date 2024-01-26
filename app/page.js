import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <p>Hi I am Parvez.</p>
      <Link href="/about">Learn more</Link>
    </div>
  );
};

export default HomePage;
