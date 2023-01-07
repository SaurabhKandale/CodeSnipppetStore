import './scrollbar.css';

const SideNavBar = (props) => {
    return (
        <aside className="fixed px-4 py-4 left-2 top-10 bottom-0 overflow-y-scroll w-64 text-center">
            <ul className="list-none">

                {props.userDataArray.map((val,key)=>{return <li key={key}><a href={"#"+val.code_title.toLowerCase().split(" ").join("")} className="block mt-4 font-bold rounded-lg border-2 border-black py-2 px-2 hover:bg-violet-500 transition-bg duration-300">{val.code_title}</a></li>})}
            </ul>
        </aside>
    );
}

export default SideNavBar;