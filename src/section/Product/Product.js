import './Product.css'
import { SeTitle } from '../../component/Index'
import {Search} from '../../component/Index' 
import {Category} from '../../component/Index'
import {CardP} from '../../component/Index'
import Slide from 'react-reveal/Slide';

const Product = ({DataP, ForlopCategory, CategoryByButton,SearchPru}) => {

   
  const MapData =   DataP.length >=1?(DataP.map((item)=>{

    return <CardP key={item.id}
    
    item={item}
    
    />

 })):(<h1>found</h1>)



  return (
    <div className='container-fluid p-section'>
    
      <SeTitle/>
      
      <Category ForlopCategory = {ForlopCategory} CategoryByButton = {CategoryByButton}/>
      <div className='container c-section'>
      <Search SearchPru = {SearchPru} />
      <Slide left>
      <div className='row d-flex m-3 justify-centent-center'>
      
    
      {MapData}
    
      </div>
      </Slide>
     </div>
     </div>
  )
}

export default Product
