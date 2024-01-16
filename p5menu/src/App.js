import React,{useState} from 'react'
import Catagory from './Catagory'
import Data from './Data'
import Menu from './Menu'

const cats = ["all", ...new Set(Data.map((elems)=>elems.category))]
const App = () => {
  const [item, setItem] = useState(Data)
  const [categories, setCategories] = useState(cats)
  console.log(categories)

  const filterItems = (cat)=>{
    if(cat === "all"){
      setItem(Data)
      // return
    }
    else{
      const setCat = Data.filter((elems)=>elems.category===cat)
      setItem(setCat)
    
    }
    // const setCat = Data.filter((elems)=>elems.category===cat)
    // setItem(setCat)

  }
  // console.log(item)
  return (
    <>
      <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* <Categories categories={categories} filterItems={filterItems} /> */}
        <Catagory categories={categories} filterItems={filterItems}></Catagory>
        <Menu item={item} />
        
      </section>
    </main>
    </>
  )
}

export default App;
