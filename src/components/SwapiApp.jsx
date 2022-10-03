import { useState } from "react";

function SwapiApp(){

    const [keyword,setKeyword]=useState('');
    const [results,setResults]=useState([]);


    function keywordHandler(event){
        setKeyword(event.target.value);
    }

    function handleSearch(){

        //console.log("button clicked");
        fetch("https://swapi.dev/api/people/?search=" + keyword)
        .then((response) => {
            //console.log(response);
            return response.json();
        }).then(response => {
            //console.log({ json });
            setResults(response.results);
            console.log("response is ",results)
        }).catch(error => {
            console.log("error ",error);

        })
    }

    //console.log("result is ",{results});
    return (
        
    <div>
        
        <div className="search-bar">

            <input 
            type="text"
            
            onChange={keywordHandler}
            value={keyword}
            />
            <button onClick={handleSearch}>Search</button>
        </div>

        <div className="search-result">
        {
            keyword.length > 0 ?
            ( <div >
                Searching {keyword}....
              </div>
            ) : null
            
        }
        <ul>
            {
                results.map(item => {
                    <li>{item.name}</li>
                })
            }
        </ul>
        </div>
    </div>

    );

}
export default SwapiApp;