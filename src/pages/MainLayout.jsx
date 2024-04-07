import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <p>this is main lay out</p>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;