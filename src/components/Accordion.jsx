import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({details}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleToggle(index) {
      setActiveIndex(activeIndex === index ? null: index);
    }

  return (
    <>
      {
          details.map((item, index) => (
              <div key={index} className="py-2">
                  <div onClick={() => handleToggle(index)} className="w-full p-[10px] bg-white shadow-sm rounded-lg flex justify-between items-center"><span className={`${activeIndex === index ? 'text-primary': ''} font-medium transition-all duration-300 ease-in-out font-bricolage`}>{item.label}</span>{activeIndex === index ? (<span className="pr-5"><FontAwesomeIcon icon={faAngleUp} className="text-primary" /></span>) : (<span className="pr-5"><FontAwesomeIcon icon={faAngleDown} /></span>)}</div>
                  <div className={`w-full bg-slate-200 mt-2 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-linear ${activeIndex === index ? 'max-h-[100px] p-[10px]': 'max-h-0'}`}>{item.paragraph}</div>
              </div>
          ))
      }
    </>
  )
}

export default Accordion
