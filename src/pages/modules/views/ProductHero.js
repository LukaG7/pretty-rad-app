import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import prettyrad from '../images/prettyradlogo.PNG';

const backgroundImage =
prettyrad;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Cute Crafts For Anyone
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Jibber jabber stuff and other words for placement as an example.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Shop Now
      </Button>
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}
