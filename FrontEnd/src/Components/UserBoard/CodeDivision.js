import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as clipboard from "clipboard-polyfill/text";

const CodeDivision = (props) => {

    const username=useSelector(state=>state.user_name);
    const navigate=useNavigate();
    const copyFunction =()=>{
        clipboard.writeText(props.codeArray.code_content);
    }

    const deleteFunction=async ()=>{
        await fetch('/api/deleteContent',{
            method:'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:JSON.stringify({
                username:username,
                codeTitle:props.codeArray.code_title,
                code_content:props.codeArray.code_content,
            }),
        }).then(()=>{
            console.log(props.deleted);
            props.setDel(!props.deleted);
            navigate('/userpage');
        }).catch(()=>{console.log("could not delete")})
    }

    const title=props.codeArray.code_title.charAt(0).toUpperCase() + props.codeArray.code_title.slice(1);

    return (
        <div className="ml-72 mr-4 rounded-xl py-6 px-4 block text-white" style={{ backgroundColor: "#0a0024", }}>
            <h2 className="text-center text-lg ">{title}</h2>
            <div className="flex flex-row justify-between py-2">
                <div className="w-3/4 font-normal">
                    <pre className="prettyprint text-lime-400">
                        {props.codeArray.code_content}
                    </pre>
                </div>
                <div className="flex flex-col justify-center px-24 w-80" style={{ color: "#001524" }}>
                    <button onClick={copyFunction} className="block mt-4 active:bg-lime-400 border-2 border-black hover:border-amber-500 transition-border duration-200 px-5 py-1 rounded-lg bg-amber-400">COPY</button>
                    <button onClick={deleteFunction} className="block mt-4 border-2 border-black hover:border-amber-500 transition-border duration-200 px-5 py-1 rounded-lg bg-amber-400 active:bg-red-400">DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default CodeDivision;