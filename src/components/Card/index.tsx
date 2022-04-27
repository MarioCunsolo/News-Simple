import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import { ArticleModified } from "../../news.interface";

function Cards(props: { item: ArticleModified }) {

  return (
    <Card
      sx={{height: "430px"}}
      className="bg-info p-2 bg-opacity-25 col-4 mx-3 my-3"
    >
      <CardMedia
        component="img"
        height="180"
        image={props.item.urlToImage}
        alt="Immagine non disponibile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="text-danger" href={props.item.url}>Leggi altro</Button>
      </CardActions>
      <Typography className="bottone text-danger">{props.item.author}</Typography>
    </Card>
  );
}

export default Cards;
