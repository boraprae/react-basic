import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Fruit = ({ fruit, index, deleteFruit, beforeEdit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }} key={fruit.id}>
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
          Fruits are an excellent source of essential vitamins and minerals, and
          they are high in fiber. Fruits also provide a wide range of
          health-boosting antioxidants, including flavonoids. Eating a diet high
          in fruits and vegetables can reduce a person's risk of developing
          heart disease, cancer, inflammation, and diabetes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="btnEdit"
          onClick={() => {
            beforeEdit(index, fruit.name);
          }}
        >
          Edit
        </Button>
        <Button onClick={() => deleteFruit(fruit.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Fruit;
