//all the components that we will create
//collate all the components that we will create

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Root(){



    return(
        <>
        <nav>
            <ul> 
                {/* Link to class so that it would only update the elements that needs changing */}
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/subjects'}>Subjects</Link></li>
            </ul>
        </nav>

        {/* allows to show ung defined sa routers */}
        {/* container where the sht will show when you press something */}
        <Outlet />
        </>
    )
}