import { Helmet } from "react-helmet-async";
import { getLocalData } from "../utilities/localStorage";
import BookingCard from "../components/BookingCard";

const Booking = () => {

    const allBookingCard = getLocalData();


    if (allBookingCard.length === 0) {
        return (
            <div className="min-h-[calc(100vh-408px)] md:min-h-[calc(100vh-326px)] flex justify-center items-center">
                <p className="text-3xl font-semibold text-red-500">Booking data not found</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto min-h-[calc(100vh-408px)] md:min-h-[calc(100vh-326px)] py-6 flex flex-col justify-center items-center px-5">
            <Helmet>
                <title>Second Home | Booking</title>
            </Helmet>
            <div className="space-y-4 lg:space-y-6 lg:w-[75%] mx-auto">
                {
                    allBookingCard.map((data, i) => <BookingCard key={data.id} card={data} ani_delay={i*500}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Booking;