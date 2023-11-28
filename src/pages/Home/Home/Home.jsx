import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import DonationHighlights from "./DonationHighlights/DonationHighlights";


const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Donate | Home </title>
            </Helmet>
            <Banner></Banner>
            <DonationHighlights></DonationHighlights>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;