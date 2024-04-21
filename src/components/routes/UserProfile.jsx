import { Helmet, HelmetProvider } from 'react-helmet-async';
const UserProfile = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>User Profile</title>
                </Helmet>
                it is user profile
            </HelmetProvider>
        </div>
    );
};

export default UserProfile;