import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Country = (props) => {
    const classes = useStyles();
    // console.log(props.country);
    const { flag, name, capital } = props.country;

    const history = useHistory();
    const handleClick = (id) => {
        const url = `/country/${id}`;
        history.push(url);
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={flag}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name: {name}
                        <p>Capital: {capital}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleClick(name)} variant="contained" size="small" color="primary">
                    Details
                </Button>
                {/* <p><Link to={`/country/${name}`}>Click</Link></p> */}
            </CardActions>
        </Card>
    );
};

export default Country;