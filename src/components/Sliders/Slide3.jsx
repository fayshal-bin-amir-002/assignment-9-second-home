import { FaArrowRight } from "react-icons/fa";
import 'animate.css';
import Img from "../../assets/img-4.jpg"

const Slide3 = () => {
    return (
        <div className="hero min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-85px)] -z-10" style={{ backgroundImage: `url(${Img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-4xl md:text-6xl font-bold animate__animated animate__fadeInDownBig">Welcome to Second<span className="text-[#7bc4b0]">Home</span></h1>
                    <p className="mb-5 opacity-80 animate__animated animate__fadeInUp animate__delay-1s">We are thrilled to have you as our guest and extend our warmest greetings to you.</p>
                    <button className="btn bg-[#2D9596] text-white border-none animate__animated animate__fadeInUp animate__delay-2s">Let&apos;s Booking <FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Slide3;