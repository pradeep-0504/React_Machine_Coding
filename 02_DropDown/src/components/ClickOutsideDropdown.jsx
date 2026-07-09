import {Button} from "./ui/button"
import {useState,useRef,useEffect} from "react"
import {ChevronDown} from "lucide-react"

function ClickOutsideDropdown() {
    const[isOpen,setIsOpen]=useState(true);
    const dropDownRef=useRef(null);

    const toggleDropdown=()=> setIsOpen(!isOpen);

    useEffect(()=>{
        if(isOpen===false) return;

        const handleClickOutSide=(event)=>{
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
                console.log(event.target,dropDownRef.current);
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutSide);

        return()=>{
            document.removeEventListener("mousedown",handleClickOutSide);
        }

    },[isOpen]);

    return (
        <div className="flex flex-col pt-4 justify-center ">
            <h1 className="text-lg font-semibold mb-2">Close dropdown on outside click</h1>

            <div className="relative mt-6" ref={dropDownRef}>
            <Button  variant="outline" className="w-full justify-between rounded" onClick={toggleDropdown}>
                Select an Option
            <ChevronDown className={`ml-2 h-4 w-4 ${isOpen ? 'rotate-180' : ''}`}/>
            </Button>
            {
                isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="py-1">
                            {
                                ["option1","option2","option3"].map((option,index)=>(
                                   <button key={index} className="block w-full px-4 py-2 hover:bg-gray-100 border-b">{option}</button>   
                                ))
                            }
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ClickOutsideDropdown