import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function IphoneProducts() {
    const[iphone,setIphone]=useState([]);
    // to catch the url we use
    const {ID}=useParams();

    useEffect(()=>{
        fetch("/iphone.json")
        .then((res) => {
            return res.json();})
        .then((data)=>{
          setIphone(()=>data.products);
          // const listItem=data.Products.filter((iphone)=>
          // iphone.Product_url=== ID)
          // setIphone(listItem);
          console.log(setIphone)
        },[ID])
        
    })
 
  return (
    <section className=" top-25">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 mt-5 pt-5">
          <h1 className="font-weight-bold">Iphones</h1>
          <h1 className="brief">New Product </h1>
          {/* b/c the data comes in an array we can use the map method to atterate similar data  */}
          {iphone?.map((products) => {
            let id = products.product_url;
            let title = products.product_name;
            let img = products.product_img;
            let Brief = products.product_brief_description;
            let StartPrice = products.starting_price;
            let PriceRange = products.price_range;
            let productPage = "/iphone/" + id;
            let details = products.product_description;
            let iphoneList = (
              <div key={id} className="row justify-content-center text-center top-100">
                <div className="col-sm-12 col-md-6 mt-5">
                <div className="title">{details} </div>
                <div className="brief">{Brief} </div>
                <div className="sprice">{StartPrice} </div>
                <div>{PriceRange} </div>
                </div>
                <div>
                    <div className="col-sm-12 col-md-6 mt-5">
                        <img src={img} alt="products"/>
                    </div>
                </div>
                
              </div>
            );
            return iphoneList;
          })}
        </div>
      </div>
    </div>
    </section>
  )
}


