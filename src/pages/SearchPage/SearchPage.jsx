import { Helmet } from "react-helmet-async";


const SearchPage = () => {
    return (
        <div>
              <Helmet>
                <title>Donate | Search </title>
            </Helmet>
            <h2 className="text-center text-2xl bg-sky-400 py-3 my-4">Search Here</h2>
        </div>
    );
};

export default SearchPage;