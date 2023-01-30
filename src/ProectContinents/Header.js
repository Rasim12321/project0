import { NavLink, Link } from "react-router-dom"

export default function Header(props){
    return(
        <div className="continents">
            <Link to='/'></Link>
            {props.continents.map(item => <div className="continent" key={item} name={item}><Link to={`/${item}`}>{item}</Link></div>)}
        </div>   
    )
}