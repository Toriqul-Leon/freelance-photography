import React from "react";
import Banner from "../../Banner/Banner";
import QnA from "../QnA/QnA";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <QnA></QnA>
    </div>
  );
};

export default Home;
