import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('estates.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, []);


    return (
        <div>
            <div className="flex flex-row justify-around mt-20 mb-8">
                <h2 className="lg:text-3xl md:text-2xl text-xl">Luxury At Its Finest</h2>
                <p className="lg:text-2xl text-xl">We Offer The Highest Level Of Expertise, Service and Integrity. <br />
                    See our properties below.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    estates.map(estate => <div key={estate.id} >
                        <div className="card w-96 bg-base-100 shadow-xl p-8 space-y-4">
                            <figure className=""><img src={estate.image} className="rounded-xl"/></figure>
                            <h2 className="text-2xl font-semibold">{estate.estate_title}</h2>
                            <p className="text-lg">{estate.description.slice(0, 100)}....more</p>
                            <div className="flex flex-row justify-between">
                            <p className="text-xl font-bold text-lime-500">{estate.price}</p>
                            <p>Status: <span className="text-xl font-semibold">{estate.status}</span></p>
                            </div>
                            <div className="text-center">
                              <Link to={`/estateDetails/${estate.id}`}><button className="btn btn-success">View property</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Estates;