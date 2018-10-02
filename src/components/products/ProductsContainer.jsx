import React,{Component} from 'react'
import ProductDisplay from './ProductsDisplay'



class ProductsContainer extends Component{
  state={
    products:[
      {
        id:1,
        name:'didlo',
        price:123,
        picURL:'https://ep01.epimg.net/internacional/imagenes/2017/09/28/mundo_global/1506597194_624591_1506597383_noticia_normal.jpg',
        color:['red','blue','white']
      },
      {
        id:2,
        name:'pollo',
        price:123,
        color:['red','blue','white']
      },
      {
        id:3,
        name:'perro',
        price:123,
        picURL:'http://img.desmotivaciones.es/201107/265034_218356958201944_100000829243621_518474_7740495_n.jpg',
        color:['red','blue','white']
      },
      {
        id:4,
        name:'gato',
        price:123
      }
  ]  
  }

  showProduct = (product,index)=>{
    return <ProductDisplay key={index} {...product}/>
  }

  tercerForma = ()=>{
    const {products} = this.state
    return products.map((p,i)=>
      <div key ={i}>{p.name}</div>
    )
  }

  render(){
  const {products}=this.state
    return(
      <div className='flexpapa'>
        {products.map(this.showProduct)}
      </div>
    )
  } 
}

export default ProductsContainer