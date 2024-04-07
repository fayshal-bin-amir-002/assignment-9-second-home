import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <header className="h-[72px] lg:h-[85px]">
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;