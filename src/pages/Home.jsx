import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Hotels from '../components/Hotels';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Second Home | Home</title>
            </Helmet>
            <Banner></Banner>
            <Hotels></Hotels>
        </div>
    );
};

export default Home;