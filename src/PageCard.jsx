import './pageCard.css'
export default function PageCard({product}){
    // console.log(prop.product)

    
    console.log(product)
    return(
        <div>
            <div >
               <div>
                <img src="" alt="" />
               </div>
               <p>{product.title}</p>
               <span></span>
               <p></p>
               <p></p>
            </div>
        </div>
    )
}