import React from 'react'
import "./PortfolioProject.css"
import {FiLink2} from "react-icons/fi"

// import nftimg from "../../../assets/NftProject.png"

const PortfolioProject = ({url, link}) => {
  return (
    <div className="border w-full sm:w-11/12 md:w-5/12 lg:w-[32%] h-64 mb-3 flex-grow-[0.4] filter-app">
    <div className="portfolio-wrap border  h-full rounded-sm">
      <img src={url} className="w-full h-full" alt="..." />
      <div className="portfolio-links">
        <a href={link}
         title="More Details"
         target='_blank'>
          <FiLink2 className=""></FiLink2>
        </a>
      </div>
    </div>
  </div>
 
  )
}

export default PortfolioProject
