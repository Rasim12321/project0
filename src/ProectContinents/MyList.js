export default function MyList(props){
    return(
        <>
            <div className="countries">
                {props.obj.map((item) => <li key={item} > {item} </li> )}
            </div>
        </>
    )
}