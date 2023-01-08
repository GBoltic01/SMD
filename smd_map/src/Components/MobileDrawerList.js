import React from "react";
import { useState } from "react";
import MobileItemDetails from "./MobileItemDetails";
import MobileListItem from "./MobileListItem";



function MobileDrawerList({ translation }) {

  const [itemClicked, setItemClicked] = useState(false);

  const handleClickDetails = () => {
    if (itemClicked === false) {
    setItemClicked(true)
    } else {
      setItemClicked(false)
    }
  }

  return(
    <>
      {(!itemClicked) ? <MobileListItem handleClickDetails={handleClickDetails}/> : <MobileItemDetails handleClickDetails={handleClickDetails}/>}
    </>
  )
}

export default MobileDrawerList;