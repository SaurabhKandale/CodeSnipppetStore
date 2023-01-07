import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeSection from "./CodeSection";
import NoCode from "./NoCode";
import SideNavBar from "./SideNavBar";
import { Link, useNavigate } from "react-router-dom";
import plus from '../Assets/plus.png'
import Loader from "../Loader/Loader";
import { registerUserAction } from "../../Redux/Actions/actCreators";


const UserBoard = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const username1 = useSelector(state => state.user_name);
    const username2 = username1.charAt(0).toUpperCase() + username1.slice(1);
    const [userDataArray, setUserData] = useState([]);
    const [deleted,setDel]=useState(true);
    let [time,setTime]=useState(false);
    useEffect(
        () => {
            async function getdata() {

                const response = await fetch(`/api/getdata?username=${username1}`);
                const data = await response.json();
                setUserData(data.dataFromUser[0].user_code);
            }
            setTime(false);
            getdata();
        }
        , [deleted]);

    const logOutFun=()=>{
        dispatch(registerUserAction("","","",false));
        navigate('/');
    }


    const del=(val)=>{
        setDel(val);
    }

    if(!time){
        setTimeout(()=>{
            setTime(true);
        },2000);

        return (
            <Loader />
        )
    }
    else{
        time=false;
        return (
            <div className="min-h-screen font-bold">
                <div className="flex justify-between items-center fixed top-0 left-0 right-0 text-white py-1" style={{ backgroundColor: "#0a0024" }}>
                    <div className="">
                    <span className="inline-block px-8 text-amber-400 text-lg text-center">Hi {username2+"..."} </span>
                    </div>
                    <div className="px-2 text-sm font-semibold">
                        <button onClick={logOutFun} className="border-2 border-black rounded-lg px-4 py-1 bg-red-600 hover:bg-red-700 transition-bg duration-300">LOG OUT</button>
                    </div>
                </div>
                <Link to='/createpage' >
                <div className="fixed right-4 bottom-2 bg-amber-400 rounded-3xl hover:bg-amber-500 hover:scale-105 transition-all hover:cursor-pointer duration-300 z-10">
                    <img src={plus} alt="addLogo" className="w-16 object-cover" />
                </div>
                </Link>
                {
                    (userDataArray.length===0) ?
                        <NoCode /> :
                        <div className="py-4">
                            {
                                <SideNavBar userDataArray={userDataArray} />
                            }
                            {
                                <CodeSection userDataArray={userDataArray} deleted={deleted} setDel={del} />
                            }
                        </div>
                }
                <div>
                </div>
            </div>
        )
    }


    
}

export default UserBoard;