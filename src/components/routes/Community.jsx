import { Helmet, HelmetProvider } from 'react-helmet-async';

const Community = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Community</title></Helmet>
            <h2 className="text-2xl text-center">Find The Most Amazing Places Nearest Your Location</h2>
            </HelmetProvider>
        </div>
    );
};

export default Community;