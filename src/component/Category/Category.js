import  './Category.css'

const Category = ({ ForlopCategory, CategoryByButton}) => {

const Fcategory = (cat) =>{

 CategoryByButton(cat)
}

  return (
    <div className='Category d-flex me-3 text-center'>

    {
      ForlopCategory.length >=1? (ForlopCategory.map((cat)=>{
        return(<div className="">
        <button style={{border:'2px solid #b45b35'}} onClick={()=> Fcategory(cat)} className="btn mx-2">{cat}</button> 
       </div>)
    })) : (<h1>not found</h1>)   
}
    
      </div>
  )
}

export default Category
