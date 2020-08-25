import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 310,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    textAlign:"center"
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const ItemCard = React.memo(function ItemCard(props) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Link to={`/applications/${props.item.category}/${props.item.id}`}  style={{ textDecoration: 'none' }} >
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia classes={mediaStyles} image={props.item.image} />
        <CardContent className={styles.content}>
          <TextInfoContent classes={textCardContentStyles}   heading={props.item.name} />
        </CardContent>
      </Card>
    </Link>
  );
});

export default ItemCard;