import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const HotelCard = ({ card }) => {

    const { img, estate_title, segment_name, description, price, status, area, location, facilities } = card;

    return (
        <div className="shadow-lg border rounded-md duration-300 hover:shadow-sm flex flex-col justify-between" data-aos="zoom-in" data-aos-duration="1000">
            <div>
                <img src={img} loading="lazy" className="w-full h-48 rounded-t-md" />
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-gray-900">
                        {estate_title}
                    </h3>
                    <p className='font-medium text-[#265073]'>{segment_name}</p>
                    <p className="text-gray-400 text-sm mt-1">{description.slice(0, 100)}...</p>
                    <div className="divider my-3"></div>
                    <div className='flex justify-between items-center my-3'>
                        <div className="badge badge-secondary badge-outline"><p className='flex items-center gap-1'>Price :<span>{price}</span><BsCurrencyDollar /></p></div>
                        <div className="badge badge-accent badge-outline">Status : {status}</div>
                    </div>
                    <p className='opacity-80'><span className='font-medium'>Area :</span> {area}</p>
                    <p className='flex items-center gap-1 my-3 opacity-80'><IoLocationOutline /> <span>{location}</span></p>
                    <p className='opacity-80 font-medium mb-2'>Facilities : </p>
                    <div className='flex items-center flex-wrap gap-3'>
                        {
                            facilities.map((f, i) => <p key={i} className='bg-[#9AD0C2] px-2 py-1 rounded-full text-white'>{f}</p>)
                        }
                    </div>
                    <div className="divider my-3"></div>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn bg-[#2D9596] text-white w-[90%] mb-4'>View Details</button>
            </div>
        </div>
    );
};

HotelCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default HotelCard;