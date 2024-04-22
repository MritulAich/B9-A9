import { Helmet, HelmetProvider } from 'react-helmet-async';
const UserProfile = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>User Profile</title>
                </Helmet>
                <h2 className='text-xl'>All user information will display here</h2>
            </HelmetProvider>
        </div>
    );
};

export default UserProfile;