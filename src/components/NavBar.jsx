import { useState, useRef, useEffect, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { toast } from 'react-toastify';
import { AuthContext } from "../AuthProvider/AuthProvider";
import userImg from "../assets/user.png"

const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Profile Settings" },
        { title: "Log out" }
    ]

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef?.current?.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={` ${props.class} z-10`}>
            {
                user &&
                <div className="flex items-center gap-4">
                    <div ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600 cursor-pointer tooltip"  data-tip={user?.displayName || "User name not define"}
                        onClick={() => setState(!state)} onMouseOver={() => console.log("tooltip")}
                    >
                        <img 
                            src={user?.photoURL || userImg}
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div className="lg:hidden">
                        <span className="block">{user?.displayName || 'Name not found'}</span>
                        <span className="block text-sm text-gray-500">{user?.email || 'Name not found'}</span>
                    </div>
                </div>
            }
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => <li key={idx}>
                        <button className="text-gray-600 lg:hover:bg-gray-50 lg:p-2.5">
                            {item.title}
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
}

const NavBar = () => {

    const { user, userSignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('User log out successfully');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const [menuState, setMenuState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Update Profile", path: "/update-profile" }
    ]

    return (
        <div>
            <nav className="bg-[#F1FADA] border-b w-full fixed top-0 z-50 bg-opacity-80">
                <div className="flex items-center space-x-8 py-6 px-4 max-w-screen-xl mx-auto md:px-8">
                    <div className="flex-none lg:flex-initial">
                        <button className="text-2xl md:text-3xl font-semibold">Second<span className="text-[#7bc4b0]">Home</span></button>
                    </div>
                    <div className="flex-1 z-50 flex items-center justify-between">
                        <div className={`absolute bg-white lg:bg-transparent w-full top-16 lg:top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                            <ul className="mt-4 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                                {
                                    navigation.map((item, idx) => (
                                        <li key={idx} className="text-gray-600 text-lg font-medium hover:text-gray-900">
                                            <NavLink to={item.path} className={({ isActive }) => isActive ? 'text-[#2D9596]' : ''}>
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ProfileDropDown
                                class="mt-5 z-10 pt-5 border-t lg:hidden"
                            />
                        </div>
                        <div className="flex-1 z-10 flex items-center justify-end space-x-2 sm:space-x-6">
                            <ProfileDropDown
                                class="hidden lg:block"
                            />
                            {
                                user ?
                                    <button onClick={handleSignOut} className="btn bg-[#2D9596] text-white">Log Out</button> :
                                    <Link to="/login">
                                        <button className="btn bg-[#2D9596] text-white">Login</button>
                                    </Link>
                            }
                            <button
                                className="outline-none text-gray-400 block lg:hidden"
                                onClick={() => setMenuState(!menuState)}
                            >
                                {
                                    menuState ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default NavBar;