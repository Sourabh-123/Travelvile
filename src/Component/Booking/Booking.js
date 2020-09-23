import React,{useState,useEffect} from 'react'
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

function Booking() {
  const [state, setstate] = useState([])
  const [search, setSearch] = useState("")


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      console.log(res)
      setstate(res.data)
    })
  })


  const FilterSearch = state.filter(states=>{
    return states.name.toLowerCase().includes(search.toLowerCase())
   }) 

  return (
                <TableContainer >
              <Table  aria-label="simple table">
                <TableHead>
          <input className="form-control"  type="text" placeholder="search" onChange={e=>setSearch(e.target.value)}/> 

                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell >email</TableCell>
                    <TableCell >phone</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                  FilterSearch.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
         
          );
    }

export default Booking;
    
      

