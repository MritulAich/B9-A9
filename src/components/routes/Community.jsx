import { Helmet, HelmetProvider } from 'react-helmet-async';

const Community = () => {
    return (
        <div className='text-center space-y-6 mt-10'>
            <HelmetProvider>
                <Helmet><title>Community</title></Helmet>
            <h2 className="text-2xl text-center">Find The Most Amazing Places Nearest Your Location</h2>
            <p className="text-lg">Welcome to the vibrant world of real estate. Whether you are a seasoned professional or just beginning your journey, you are now part of our dynamic community <br />where opportunities abound and connections flourish. Get ready to explore the endless possibilities, build valuable relationships. Here is your exciting journey ahead!</p>
            </HelmetProvider>
        </div>
    );
};

export default Community;