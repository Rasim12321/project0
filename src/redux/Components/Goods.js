export default function Goods(props){
    return (
        <div className="goods">
            <img src={props.all.image} alt="" />
            <p>{props.title}</p>
            <p>{props.cost}</p>
            <button className="aaa" data-key={props.articul}> Add to cart </button>
        </div>
    )
}