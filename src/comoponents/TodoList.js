import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';


export default function TodoList (){
    return(
        <Container maxWidth="sm"  > 
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography  variant="h2" color="text.secondary" gutterBottom>
         مهامي
        </Typography>
        <Divider />

      <ToggleButtonGroup
            style={{direction:"ltr", marginTop :"30px"}}
            value={""}
            exclusive
            onChange={""}
            aria-label="text alignment"
            >
        <ToggleButton value="right" > غير منجز</ToggleButton>
        <ToggleButton value="center">المنجز</ToggleButton>
        <ToggleButton value="left" >  الكل </ToggleButton>
    </ToggleButtonGroup>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Container>
        
)
}