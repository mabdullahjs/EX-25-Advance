import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Button,
  Box,
  Grid,
  Container,
  Rating,
  Divider,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux/reducers/cartSlice';

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          Error fetching product.
        </Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <Typography variant="h6">No product found.</Typography>
      </Container>
    );
  }


  const dispatch = useDispatch()

  const addtocartItem = () => {
    console.log(product);
    dispatch(addItem(product))
    
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="500"
              image={product.thumbnail}
              alt={product.title}
              sx={{ objectFit: 'contain', p: 2 }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Rating
              name="read-only"
              value={Math.round(product.rating)} // Assuming product has a rating field
              readOnly
              precision={0.5}
            />
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {product.category}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>
            <Divider />
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" size="large" onClick={addtocartItem}>
                Add to Cart
              </Button>
            </Box>
            <Box mt={3}>
              <Typography variant="h6">Product Details</Typography>
              <Typography variant="body2">
                Brand: {product.brand || "N/A"}
                <br />
                Model: {product.model || "N/A"}
                <br />
                Dimensions: {product.dimensions ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}` : "N/A"}
                <br />
                Weight: {product.weight || "N/A"}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleProduct;
