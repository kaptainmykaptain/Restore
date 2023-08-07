
import {Grid, Typography, Divider, TableContainer, Table, TableRow,TableCell, TableBody} from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { product } from "../../app/models/product";

export default function ProductDetail () {
  const {id} = useParams<{id: string}>();
  const [product,setProduct] = useState<product|null>(null);
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/Products/${id}`).then(response => setProduct(response.data)).catch(error => console.log(error)).finally(()=>setLoading(false))
  },[id])

  if (loading) return <h4>loading</h4>

  if (!product) return <h3>no product</h3>
  return (
    <>
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}}></img>

      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">
          {product.name}
        </Typography>
        <Divider sx={{mb: 2}}></Divider>
        <Typography variant="h4" color='secondary'>${(product.price/100).toFixed(2)}</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </>
  )
}