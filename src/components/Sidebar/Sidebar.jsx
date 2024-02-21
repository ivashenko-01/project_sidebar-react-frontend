import "./sidebar.scss";
import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

const routes = [
    { title: "Dashboard", icon: "fas-solid fa-house", path: "/" },
    { title: "Sales", icon: "chart-line", path: "/sales" },
    { title: "Costs", icon: "chart-column", path: "/costs" },
    { title: "Payments", icon: "wallet", path: "/payments" },
    { title: "Finances", icon: "chart-pie", path: "/finances" },
    { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
    { title: "Settings", icon: "sliders", path: "/settings" },
    { title: "Support", icon: "phone-volume", path: "/support" },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            isSelectMenu: "",
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
        this.setState((state) => ({ isSelectMenu: `${path}` }));
    };

    render() {
        const { isOpened, isSelectMenu } = this.state;
        const containerClassnames = classnames("sidebar", { opened: isOpened }, { closed: !isOpened });

        return (
            <div className="application">
                <div className={containerClassnames}>
                    <div className={`sidebar-top`}>
                        <div className="sidebar-header">
                            <img className="sidebar-header__images" src={logo} alt="TensorFlow logo" />
                            <span className="menu-item__span">TensorFlow</span>
                        </div>

                        <div className="sidebar-menu">
                            {routes.map((route) => {
                                return (
                                    <div className={`menu-item ${isSelectMenu === route.path ? "active" : ""}`} key={route.title} onClick={() => this.goToRoute(route.path)}>
                                        <FontAwesomeIcon icon={route.icon} />
                                        <span className="menu-item__span">{route.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="sidebar-bottom">
                        {bottomRoutes.map((route) => (
                            <div className={`menu-item ${isSelectMenu === route.path ? "active" : ""}`} key={route.title} onClick={() => this.goToRoute(route.path)}>
                                <FontAwesomeIcon icon={route.icon} />
                                <span className="menu-item__span">{route.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="button" onClick={this.toggleSidebar}>
                    <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
                </button>
            </div>
        );
    }
}
