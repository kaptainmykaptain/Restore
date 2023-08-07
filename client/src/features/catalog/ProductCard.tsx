import {Card, CardMedia, CardContent, Typography, Button, CardActions, CardHeader, Avatar} from "@mui/material"
import { product } from "../../app/models/product"
import { Link } from "react-router-dom";

interface Props {
  product : product;
}

export default function ProductCard ({product}: Props){
  return (
    <>
  
      <Card>
        <CardHeader avatar={
          <Avatar sx={{ bgcolor: 'primary.main', color:'white' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>}
          title={product.name}
          titleTypographyProps={{sx:{fontWeight:'bold', color:'primary.main'}}}>

        </CardHeader>
        <CardMedia
          sx={{ height: 140, backgroundSize:"Contain", bgcolor: 'primary.main' }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color="secondary" variant="h5" component="div">
            ${(product.price/100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
        </CardActions>
      </Card>

 
    </>
  )

}