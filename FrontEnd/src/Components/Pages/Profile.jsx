import React from 'react';
import NavBar from './Navbar';
import SideBar from './SideBar';
import Posts from './Posts'
import { useSelector } from 'react-redux';

function Profile(props) {

    const {userSignIn} = useSelector(state => state.loginState)
    return (
        <div>
         {userSignIn?(
         <React.Fragment>       
        <NavBar/>
        <div className="facebook">
            <SideBar />
            <Posts />
        </div>
        </React.Fragment>):(
            <React.Fragment>
                {props.history.push("/login")}
            </React.Fragment>
        )}

        </div>
    )
}

export default Profile
