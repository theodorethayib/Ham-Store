import React, {useEffect} from 'react';
import "../../styles/Item.css"

function Item(hamData) {
    useEffect(() => {
        console.log(hamData);
    }, [hamData]);
  return (
      <div className="itemframe">
        <h1>{hamData.hamData.name}</h1>
          <img src={hamData.hamData.image} width="800px" height="500px" />
        <p>{hamData.hamData.description}</p>
        <p>{hamData.hamData.price}</p>
      </div>
  );
}

export default Item;