import React from 'react'
import Rainbow from '../hoc/Rainbow'

const handleClick = () => {
    window.location.reload();
}

const About = (props) => {
    // console.log(props.newColor.color);
    return (
        <div className="container">
            <h4 className="center">About</h4>
            
            <p>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants 
              (plants of the division Magnoliophyta, also called angiosperms). The biological function of a flower is to 
              effect reproduction, usually by providing a mechanism for the union of sperm with eggs. Flowers may 
              facilitate outcrossing (fusion of sperm and eggs from different individuals in a population) or allow 
              selfing (fusion of sperm and egg from the same flower). Some flowers produce diaspores without 
              fertilization (parthenocarpy). Flowers contain sporangia and are the site where gametophytes develop. 
              Many flowers have evolved to be attractive to animals, so as to cause them to be vectors for the 
              transfer of pollen. After fertilization, the ovary of the flower develops into fruit containing seeds.</p>

              <div className="center" id="newColor">{props.newColor.color}</div>
              <div className="center"><button className="waves-effect waves-light btn" onClick={handleClick}>
                  Change color by Reload</button></div>
              <h3 className="center">Color is changed by higher order function</h3>
        </div>
    )

}

export default Rainbow(About)

