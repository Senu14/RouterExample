import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

 const Goals = () => {
  return (
    <div>

         <h1>The 17 world goals</h1>
         <section><GoalList /></section>
         <section><GoalDetails /></section>
         <br />

    </div>
  );
}

// Here we use useState hook
const GoalList = () =>{
  const [ apiData, setApiData ] = useState([])

// Here we use useEffect hook
  useEffect(() => {
    const url =`https://api.mediehuset.net/sdg/goals`

// Here we have function as async and it sets constatnt result, have awit
    const getData = async () => {
      try {
        const result = await axios.get(url)
        setApiData(result.data.items)

      }
// Error action
      catch(err) {
        console.error(err);

      }
     
    }
   
  getData()
  // Here we used Dependency array, 
  // dependency array is the second parameter, []. 
  // Whenever any of the dependencies specified in the array change, 
  // the function is re-executed.
    }, [setApiData] )

    return(
      <ul>
        {
          apiData && apiData.map(item =>{
            return(
              <li key={item.id}>
                {/* Here we use template string `` */}
                <Link to={`/goals/${item.id}`}>{item.title}</Link></li>
            )
          })
        }
      </ul>
    )
  }


  const GoalDetails = () =>{
// Here we used Destructuring Assignment
const { id } = useParams()
const [apiData, setApiData ] = useState({})

useEffect(() =>{
  const url = `https://api.mediehuset.net/sdg/goals/${id}`

  
  const getData = async () => {
    const result = await axios.get(url)
    setApiData(result.data.item);
  

  }

  getData()
}, [id]);


console.log(apiData);

    return(
      <div>
  
        {
          apiData && ( 
            <>
               <h2>{apiData.title}</h2>
               <img src={apiData.image} alt={apiData.title} />
               <p>{apiData.byline}</p>
            </>
          )
        }
      </div>
    )

   }
  
  


export { Goals, GoalDetails };