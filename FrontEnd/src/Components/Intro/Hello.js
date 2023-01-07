import React from "react"
import codesrc from '../Assets/c++hellocode.png'
import './hello.css'
import langs from '../Assets/langs.png'
import Steps from "./Steps"

const Hello=()=>{
    return(
        <>
        <section className="grid grid-cols-2 gap-4 py-8 font-bold">
            <div className="px-16 pt-20 pb-32" id="hello_text">
                <span className="block text-center text-8xl mx-auto my-4">HEY</span>
                <span className="block text-center text-8xl mx-auto my-4">CODERS !!! </span>
            </div>
            <div>
                <img src={codesrc} alt="C++Code" className="block m-auto h-96 object-cover" id="cppcode"  />
            </div>
        </section>
        <section className="grid grid-cols-2 gap-2 pb-8 pt-36 px-8">
            <div>
                <img src={langs} id="coderboy" className='block m-auto h-80 object-cover' alt="codeboy" />
            </div>
            <div className="">
                <p className="w-3/4 m-auto text-4xl font-bold leading-normal pt-20">Don't you feel it unnecessary to write same piece of code again and again and again?</p>
            </div>
        </section>
        <section className="py-48" >
            <h2 className="text-center text-5xl font-bold ">Don't Worry!! We have a solution...</h2>
        </section>
        <section className="flex justify-center items-center">
            {
                <Steps />
            }
        </section>
        <section className="block pt-4" > 
            <div className="block text-center p-4">
                <a title="Github Repository" target="_blank" href="https://github.com/SaurabhKandale/Code_Snippet_Store" className="font-semibold">© SaurabhKandale</a>
            </div>
        </section>
        </>
    )
}

export default Hello;