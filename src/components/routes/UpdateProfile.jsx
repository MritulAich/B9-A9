import { Helmet, HelmetProvider } from 'react-helmet-async';

const UpdateProfile = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Profile Update</title>
                </Helmet>
                it is up profile
            </HelmetProvider>
        </div>
    );
};

export default UpdateProfile;