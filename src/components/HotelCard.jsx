import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";

const HotelCard = ({ card }) => {

    const { img, estate_title, segment_name, description, price, status, area, location, facilities } = card;

    return (
        <div className="shadow-lg border rounded-md duration-300 hover:shadow-sm flex flex-col justify-between" >
            <div>
                <img src={img} loading="lazy" className="w-full h-48 rounded-t-md" />
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-gray-900">
                        {estate_title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{description.slice(0, 100)}...</p>
                    <div className='flex justify-between items-center'>
                        <p><BsCurrencyDollar /> <span>{price}</span></p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

HotelCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default HotelCard;