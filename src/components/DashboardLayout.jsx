import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import '/src/styles/DashboardLayout.scss';

const DashboardLayout = () => {
    return (
        <div className="dashLayout">
            <Nav />
            <div className="dashContentPage">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
