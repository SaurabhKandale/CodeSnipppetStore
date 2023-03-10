import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../Redux/Actions/actCreators';
import lgimf from '../Assets/loginForm3.png'
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const [u_name, setname] = useState("");
    const [umail, setmail] = useState("");
    const [upass, setpass] = useState("");
    const navigate=useNavigate();

    const dispatch = useDispatch();

    async function registerUser(event) {

        const uname=u_name.toLowerCase();

        event.preventDefault();

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    uname,
                    umail,
                    upass,
                }
            ),
        }).then(() => { dispatch(registerUserAction(uname.toLowerCase(), umail, upass,true)); }).then(()=>{navigate('/')}).catch((err) => { console.log("error occured") });

    }


    return (
        <div className='grid grid-cols-2 gap-2 px-8' >
            <div className='pb-16 pt-20 font-bold text-black'>
                <form onSubmit={registerUser} className='w-4/6 m-auto' >
                    <fieldset className='border-2 text-xl border-black p-4 rounded-lg mb-8'>
                        <legend ><label htmlFor="user_name" className='px-1' >User Name</label></legend>
                        <input type="text" id='user_name' name='user_name' placeholder='Name' className='rounded-lg text-lg border-b focus:outline-0 border-black p-2 bg-transparent' value={u_name} onChange={(e) => { setname(e.target.value) }} />
                    </fieldset>
                    <fieldset className='text-xl border-2 border-black p-4 rounded-lg mb-8'>
                        <legend ><label htmlFor="user_email" className='px-1'>Email Address</label></legend>
                        <input type="email" id='user_email' name='user_email' placeholder='Email-address' className='rounded-lg text-lg bg-transparent border-b border-black focus:outline-0 p-2' value={umail} onChange={(e) => { setmail(e.target.value) }} />
                    </fieldset>
                    <fieldset className='text-xl border-2 border-black p-4 rounded-lg'>
                        <legend ><label htmlFor="user_pass" className='px-1'>Password</label></legend>
                        <input type="password" id='user_pass' name='user_pass' placeholder='Password' className='rounded-lg text-lg bg-transparent border-b border-black focus:outline-0 p-2' value={upass} onChange={(e) => { setpass(e.target.value) }} />
                    </fieldset>
                    <div className='block pt-10'>
                                <button className='text-xl block m-auto border border-black px-8 hover:bg-slate-300 transition-bg duration-200 py-2 rounded-lg' type='submit'>Submit</button>
                            </div>
                </form>
            </div>
            <div className=''>
                <img src={lgimf} alt="LOGIN_FORM_IMG" className='object-auto h-screen m-auto' />
            </div>
        </div>
    )
}

export default Form;