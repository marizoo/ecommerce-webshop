import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './productStyles';

const Product = ({product, onHandleAddToCart}) => {
    const classes = useStyles();

    // console.log(product);


    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' >
                        Rp {product.price.raw}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }}  variant='body2' color='textSecondary' />
                    
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Add to Cart' onClick={() => onHandleAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product
