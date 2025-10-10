import React from "react";
import Banner from "../../Components/Banner/Banner";
import Main from "../../Components/Main/Main";
import useApps from "../../hooks/useApps";
import Loader from "../../Components/Loader/Loader";
import Error from "../Error/Error";

const Home = () => {
  const { loading, error } = useApps();
  

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Loader></Loader>
      </div>
    );
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div>
      <Banner></Banner>
      <Main></Main>
    </div>
  );
};

export default Home;
