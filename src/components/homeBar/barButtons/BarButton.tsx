import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineCalendarDays, HiOutlineCog8Tooth, HiOutlinePuzzlePiece, HiOutlineRectangleStack } from "react-icons/hi2";
import { IoCompassOutline } from "react-icons/io5";
import '../../../index.css'

interface BarButtonProps {
    iconText: string;
    isActive: string;
    setIsActive: (value: string) => void;
  }

const BarButton = ({ iconText, isActive, setIsActive }: BarButtonProps) => {

  const returnIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <HiOutlineHome size={30} color={isActive == "Home" ? "#7b5bf5" : "#ffffff3b"}/>
      case "Calendar":
        return <HiOutlineCalendarDays size={30} color={isActive == "Calendar" ? "#7b5bf5" : "#ffffff3b"}/>
      case "Addons":
        return <HiOutlinePuzzlePiece size={30} color={isActive == "Addons" ? "#7b5bf5" : "#ffffff3b"}/>
      case "Library":
        return <HiOutlineRectangleStack size={30} color={isActive == "Library" ? "#7b5bf5" : "#ffffff3b"}/>
      case "Settings":
        return <HiOutlineCog8Tooth size={30} color={isActive == "Settings" ? "#7b5bf5" : "#ffffff3b"}/>
      case "Search":
        return <IoCompassOutline size={30} color={isActive == "Search" ? "#7b5bf5" : "#ffffff3b"}/>
      default: 
        return
    }
  }

  return (
    <div className="flex flex-col gap-1 text-disabledGrey items-center justify-center p-2 rounded-2xl menuButtonContainer hover:bg-disabledGrey cursor-pointer" onClick={() => setIsActive(iconText)}>
        {returnIcon(iconText)}
        <span className="text-xs text-center text-[#ffffff3b] menuButtonSpan">{iconText}</span>
    </div>
  )
}

export default BarButton;