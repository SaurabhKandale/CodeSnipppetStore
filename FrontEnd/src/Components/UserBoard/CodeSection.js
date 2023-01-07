import CodeDivision from "./CodeDivision";

const CodeSection = (props) => {

    return (

        props.userDataArray.map((val, key) => {
            return <section className="pt-12" id={""+val.code_title.toLowerCase().split(" ").join("")}  key={key} >
                {
                    <CodeDivision codeArray={val} deleted={props.deleted} setDel={props.setDel} />
                }
            </section>
        })
    )
}

export default CodeSection;