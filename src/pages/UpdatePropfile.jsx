import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const UpdatePropfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const navigate = useNavigate();


    const userEmail = user?.email || '';

    useEffect(() => {
        const userUrl = user?.photoURL || '';
        const userName = user?.displayName || '';
        setName(userName);
        setUrl(userUrl);
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();

        if (e.target.name.value === '' && e.target.photo.value === '') {
            return toast.error("Fill the input!");
        }

        const name = e.target.name.value || user.displayName;
        const photo_Url = e.target.photo.value || user.photoURL;

        console.log(name, photo_Url);
        updateUserProfile(name, photo_Url)
            .then(() => {
                toast.success("Profile updated successfully");
                e.target.reset();
                navigate("/update-profile");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="min-h-[calc(100vh-408px)] md:min-h-[calc(100vh-326px)] flex justify-center items-center">
            <Helmet>
                <title>Second Home | Update Profile</title>
            </Helmet>
            <section className="dark:bg-gray-100 py-6 dark:text-gray-900">
                <form onSubmit={handleUpdate} className="container flex flex-col mx-auto border p-4 rounded-lg shadow-md">
                    <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm p-6 dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-2xl">Personal Inormation</p>
                            <p className="text-xs">You can update your user name and photo url</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Name</label>
                                <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full input text-black input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Email</label>
                                <input type="email" defaultValue={userEmail} placeholder="Email" className="input input-bordered w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" disabled />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Photo URL</label>
                                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} name="photo" placeholder="Photo URL" className="input input-bordered w-full text-black rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                        </div>
                    </fieldset>
                    <div className="py-4 text-right"><button className="btn bg-[#2D9596] text-white" type="submit">Update Profile</button></div>
                </form>
            </section>
        </div>
    );
};

export default UpdatePropfile;