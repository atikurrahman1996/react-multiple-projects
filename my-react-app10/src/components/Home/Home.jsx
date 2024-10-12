import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeatureJobs from "../FeaturesJobs/FeatureJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <br />
      <br />
      <CatagoryList></CatagoryList>
      <br />
      <br />
      <FeatureJobs></FeatureJobs>
      <br />
      <br />
    </div>
  );
};

export default Home;
