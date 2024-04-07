import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

const Register = () => {

    const navigate = useNavigate();
    const { userSignUp } = useContext(AuthContext);
    const [error, setError] = useState('');

    const [show, setShow] = useState(false);
    const [showP, setShowP] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setError('');

        if (password.length < 6) {
            setError('Password length should be minimum 6');
            return;
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setError("Password contain minimum one digit, uppercase and lowercase character!");
            return;
        }
        if (password !== confirmPassword) {
            setError("Password & Confirm password did not match!");
            return;
        }

        userSignUp(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('User register successfully');
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="flex justify-center mt-8 lg:mt-12 px-5">
            <Helmet>
                <title>Second Home | Register</title>
            </Helmet>
            <form onSubmit={handleSignUp}>
                <div className="w-full lg:w-[570px]">
                    <div className="border p-7 lg:p-14 rounded">
                        <h3 className="text-2xl font-bold  mb-6 lg:mb-12">Create an account</h3>
                        <input type="text" placeholder="Name" className="mb-6 lg:mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                        <input type="email" name="email" placeholder="Email" className="mb-6 lg:mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                        <div className="relative">
                            <input type={show ? 'text' : 'password'} name="password" placeholder="Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                            <span onClick={() => setShow(!show)} className="absolute top-4 right-3 text-2xl cursor-pointer">{show ? <IoMdEye /> : <IoIosEyeOff />}</span>
                            <small className="text-red-500 font-semibold">{error}</small>
                        </div>
                        <div className="relative">
                            <input type={showP ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                            <span onClick={() => setShowP(!showP)} className="absolute top-4 right-3 text-2xl cursor-pointer">{showP ? <IoMdEye /> : <IoIosEyeOff />}</span>
                        </div>
                        <button className="btn w-full bg-[#2D9596] mb-5 text-white">Register</button>
                        <p className="font-medium text-center">Already have an account? <Link to="/login" className="text-[#9AD0C2] underline">Login</Link></p>
                    </div>
                    <div className="divider my-8">OR</div>
                </div>
            </form>
        </div>
    );
};

export default Register;