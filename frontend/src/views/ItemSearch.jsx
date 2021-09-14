import React, {useState, useEffect} from 'react';
import axios from "axios";
import Item from "./components/Item";
import "../styles/ItemSearch.css"
import Counter from "./Counter";

function ItemSearch() {
    const [ham, setHam] = useState([]);
    async function getHam() {
        await axios.get('http://localhost:5000/ham').then((res) => {
            console.log(res.data);
            setHam(res.data.message);
        })
    }
    useEffect(() => {
        console.log(ham);
    }, [ham])
  return (
    <div>
        {/*<p>Hello World</p>*/}
        <Counter/>
        <Counter/>
        <button onClick={getHam}>Search for ham</button>
        <div className="itemsearchframe">
        {ham.map((value) => (
            <div key={value.name}>
                {/*<p>test</p>*/}
                <Item hamData={value} />
            </div>
        ))}
        </div>
    </div>
  );
}

export default ItemSearch;