import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import { HiOutlineUser } from "react-icons/hi"
import { HiOutlineArrowsPointingOut, HiOutlineArrowTopRightOnSquare, HiOutlineMagnifyingGlass, HiOutlineXMark, HiPlayCircle } from "react-icons/hi2"
import '../../index.css'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")

  useEffect(()=> {
    console.log("searchValue: " + searchValue)
  },[searchValue])

  return (
    <div className="flex justify-center items-center w-full h-16 py-6 px-8">
        <div className="w-1/3 flex justify-start">
          <HiPlayCircle color="white" size={42} className="w-min"/>
        </div>
        <div className="flex items-center justify-between bg-disabledGrey text-sm px-3 text-white rounded-full h-9 w-1/3 ">
            
            <input value={searchValue} onChange={(e: React.FormEvent<HTMLInputElement>)=> setSearchValue(e.currentTarget.value)} placeholder="Search or paste link" className=" w-10/12 border-none bg-transparent focus:border-none outline-none"/>
            
            <IconContext.Provider value={{ className: "searchBarIcons" }}>
              {
                searchValue.length > 0 ? (
                  <HiOutlineXMark className="w-1/12" onClick={()=> setSearchValue("")}/>
                ) : (
                  <HiOutlineMagnifyingGlass className="w-1/12"/>
                )
              }
          </IconContext.Provider>
        </div>
        <div className="flex w-1/3 justify-end">
          <IconContext.Provider value={{ className: "searchBarIcons" }}>
            <HiOutlineUser/>
            <HiOutlineArrowTopRightOnSquare/>
            <HiOutlineArrowsPointingOut/>
          </IconContext.Provider>
        </div>
    </div>
  )
}

export default SearchBar