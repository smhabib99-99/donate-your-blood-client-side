

const DonationHighlights = () => {
    return (
        <>
            <h2 className="text-3xl font-medium bg-sky-400 py-3 text-center text-white">Donation Highlights</h2>
            <div  className="grid md:grid-cols-3 gap-5 my-5">
                <div className="bg-sky-200 p-6 rounded-md">
                    <img className="h-44" src="/highlights1.jpg" alt="" />
                    <h2 className="text-2xl my-2 ">We need White donors</h2>
                    <p>The married couple regularly donate together and gave blood on Friday at Bradford Blood Donor Centre – each donation can save up to three lives, so their romantic gesture could save up to six lives</p>
                </div>
                <div className="bg-sky-200 p-6 rounded-md">
                    <img className="h-44" src="/highlights2.jpeg" alt="" />
                    <h2 className="text-2xl my-2 ">We need Black donors</h2>
                    <p>At the moment we need more people of Black heritage to grow the number of blood donors with well-matched blood to help those with sickle cell disorder.In recent years, there has been a rise in demand for some rare blood.</p>
                </div>
                <div className="bg-sky-200 p-6 rounded-md">
                    <img className="h-44" src="/highlights3.webp" alt="" />
                    <h2 className="text-2xl my-2 ">Are You giving Type?</h2>
                    <p>We are celebrating our amazing donors and living the nations giving types to donate. </p>
                </div>
            </div>
        </>
    );
};

export default DonationHighlights;