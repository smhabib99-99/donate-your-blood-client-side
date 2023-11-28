import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import DonationHighlights from "./DonationHighlights/DonationHighlights";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DonationHighlights></DonationHighlights>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;