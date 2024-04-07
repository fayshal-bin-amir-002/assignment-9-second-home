import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

const Hotels = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('/hotels.json')
            .then(res => res.json())
            .then(data => setHotels(data))
    },[]);

    return (
        <div className="my-10 md:my-16 lg:my-20 container mx-auto px-5">
            <div className="text-center lg:w-1/2 mx-auto mb-6 md:mb-8 lg:mb-12">
                <h3 className="text-2xl md:text-5xl font-semibold mb-6 lg:mb-8">Explore Our Collection of Premier Hotels</h3>
                <p className="opacity-80">Indulge in luxury at premier hotels worldwide. From lakeside retreats to urban boutiques, find your perfect getaway with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {
                    hotels &&
                    hotels.map((hotel) => <HotelCard key={hotel.id} card={hotel}></HotelCard>)
                }
            </div>
        </div>
    );
};

export default Hotels;