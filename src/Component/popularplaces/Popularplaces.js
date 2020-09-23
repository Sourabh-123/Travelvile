import React,{useState,useEffect} from 'react'
import MaterialTable from "material-table";
import axios from "axios"

 
 
function Popularplaces() {

  const [state, setstate] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      console.log(res)
      setstate(res.data)
    })
  })


    // const data = [
    //   { name: "John", email: "john@gmail.com", age: 12, gender: "Male" },
    //   { name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male" },
    //   { name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female" },
    //   { name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male" },
    //   { name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female" },
    //   { name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female" },
    // ];
    const columns = [
        {
          title: "Name",
          field: "name",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "phone",
          field: "phone",
        },
        {
          title: "username",
          field: "username",
        },
      ];
 
      return (
      <MaterialTable
      title="Booking Details"
      data={state}
      columns={columns}
      options={{ search: true, paging: true, filtering: false, exportButton: false }}
        />
      );
  };
 
export default Popularplaces;