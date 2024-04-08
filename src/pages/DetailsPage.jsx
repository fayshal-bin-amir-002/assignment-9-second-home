import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const DetailsPage = () => {

    const { id } = useParams();

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('/hotels.json')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, []);

    const hotel = hotels.find((h) => h.id === parseInt(id));
    
    const { img, estate_title, segment_name, description, price, status, area, location, facilities } = hotel || {};

    return (
        <div className="py-7 lg:py-14 min-h-[calc(100vh-408px)] md:min-h-[calc(100vh-326px)] flex justify-center px-5">
            <Helmet>
                <title>Second Home | Details</title>
            </Helmet>
            {
                hotel &&
                <section>
                    <div className="w-full lg:w-1/2 mx-auto p-5 border rounded-lg">
                        <div className="gap-x-12 sm:px-4 md:px-0">
                            <div className="w-full">
                                <img src={img} className="w-full rounded-lg" alt="" />
                            </div>
                            <div className="w-full space-y-3 mt-6 sm:px-0 md:mt-0">
                                <div className="pt-4">
                                    <h3 className="text-xl text-gray-900">
                                        {estate_title}
                                    </h3>
                                    <p className='font-medium text-[#265073]'>{segment_name}</p>
                                    <p className="text-gray-400 text-sm mt-1">{description}</p>
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
                                <div className="text-right">
                                    <Link>
                                        <button className="btn bg-[#2D9596] text-white border-none">Book<FaArrowRight /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default DetailsPage;