import { useLoaderData, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(e => e.id === idInt);


    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Estate Details</title>
                </Helmet>
                
                <div className="bg-base-200 flex flex-col lg:flex-row gap-10 p-6">
                    <div>
                        <img className="rounded-xl" src={estate.image} />
                    </div>
                    <div className="">
                        <h2>Segment: <span className="text-xl">{estate.segment_name}</span></h2>
                        <h2 className="text-2xl font-semibold">{estate.estate_title}</h2>
                        <p>Status: <span className="text-xl font-semibold text-red-500">{estate.status}</span></p>
                        <p className="text-lg mt-4">{estate.description.slice(0, 90)}</p>
                        <p className="text-lg">{estate.description.slice(90, 190)}</p>
                        <p className="text-lg mb-5">{estate.description.slice(190, 300)}</p>

                        <div className="bg-base-100 rounded-xl p-5 mr-[250px]">
                            <p className="text-xl font-bold text-lime-500 mb-2">{estate.price}</p>
                            <p className="font-medium">Area: {estate.area}</p>
                            <p>Location: {estate.location}</p>

                            <h3 className="font-semibold text-lg mt-5">Facilities :</h3>
                            <p>{estate.facilities[0]}</p>
                            <p>{estate.facilities[1]}</p>
                            <p>{estate.facilities[2]}</p>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </div>
    );
};

export default EstateDetails;