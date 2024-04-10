import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const BookingCard = ({ card, ani_delay }) => {

    const { id, img, estate_title, segment_name, description } = card;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl" data-aos="fade-right" data-aos-duration="1000" data-aos-delay={ani_delay}>
            <figure className='lg:w-[50%]'><img src={img} alt="Album" className='h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{estate_title}</h2>
                <p className='font-medium text-[#9AD0C2]'>{segment_name}</p>
                <p className=' text-sm opacity-80'>{description.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${id}`}>
                        <button className="btn bg-[#2D9596] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

BookingCard.propTypes = {
    card: PropTypes.object.isRequired,
    ani_delay: PropTypes.number.isRequired
};

export default BookingCard;