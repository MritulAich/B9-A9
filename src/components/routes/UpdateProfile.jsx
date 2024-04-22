import { Helmet, HelmetProvider } from 'react-helmet-async';

const UpdateProfile = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Profile Update</title>
                </Helmet>
                <h2 className='text-xl'>User can update their information here</h2>
            </HelmetProvider>
        </div>
    );
};

export default UpdateProfile;