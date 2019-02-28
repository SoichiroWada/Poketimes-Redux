import React from 'react'

function Rainbow (WrappedComponent) {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        // console.log('color:',color)
        return color;
      }
            
    const colorCode = {color:getRandomColor()};

    return (props) => {
        // console.log('props in Rainbow:',props)
        return (
            <div style={colorCode}>
                <WrappedComponent {...props} newColor={colorCode}></WrappedComponent>
            </div>
        )
    }
}
export default Rainbow