import React from 'react'
import { Card, CardContent, CardActions, Typography, Button, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartCard = ({ item, onRemove, onAddQuantity }) => {
    const { imageUrl, name, quantity, price } = item;
    const { addItemsToCart, removeItemsFromCart } = useContext(CartContext);
  return (
    <Card>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="body2">Price: ${price}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => removeItemsFromCart(item)}>
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={()=>addItemsToCart(item) }>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary" startIcon={<DeleteIcon />} >
        Remove
      </Button>
    </CardActions>
  </Card>
  )
}
