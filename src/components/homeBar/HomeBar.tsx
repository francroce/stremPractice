import { useEffect, useState } from "react"
import BarButton from "./barButtons/BarButton"
import {navButtonsArr } from "../../constants/navButtons"

const HomeBar = () => {
  const [isActive, setIsActive] = useState("")

  useEffect(()=> {
    console.log("isActive: " + isActive)
  },[isActive])

  return (
    <div className=" flex flex-col gap-4 h-full w-28 px-4 py-3 bg-transparent">
      {navButtonsArr.map((button,index)=>(
        <BarButton
            key={index}
            iconText= {button}
            isActive= {isActive}
            setIsActive= {setIsActive}
        />
      ))}
    </div>
  )
}

export default HomeBar