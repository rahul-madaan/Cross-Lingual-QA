import React from "react";
import {useNavigate} from "react-router-dom";


export const Header = (props) => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    return (<>
            <nav className="navbar navbar-dark bg-dark justify-content-center ">
                <div className="navbar-brand text-center ">
                         Cross Lingual Question Answering Web App
                </div>
            </nav>
        </>
    )
}
