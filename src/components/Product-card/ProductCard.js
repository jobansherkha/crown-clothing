import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = ()=> addItemsToCart(product)
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={addProductToCart} variant="outlined" startIcon={<AddShoppingCartOutlined />}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
