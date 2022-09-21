import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { yellow } from '@mui/material/colors';

const color_buttonEdit = yellow[500];


const Fruit = ({ fruit, index, deleteFruit, beforeEdit }) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={fruit.id}>
      <CardMedia
        component="img"
        height="140"
        image={`/images/${fruit.image}`}
        alt={fruit.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fruit.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* Edit Button */}
        <Button color="secondary"
          onClick={() => beforeEdit(index, fruit.name)}
        >
          Edit
        </Button>

        {/* <Button
       
          className="btnEdit"
          onClick={() => beforeEdit(index, fruit.name)}
        >
          Edit
        </Button> */}

        {/* Delete Button */}
        <Button color="error"
          onClick={() => deleteFruit(fruit.id)}
        >
          Delete
        </Button>
        {/* <Button onClick={() => deleteFruit(fruit.id)}>Delete</Button> */}
      </CardActions>
    </Card>
  );
};

export default Fruit;
