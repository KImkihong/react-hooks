import React from 'react';
import Button from '@material-ui/core/Button';

const MeteEx1=()=>{
    return(
        <div>
            <Button variant="outlined">Default</Button> 
            <Button variant="outlined" color="primary">Primary</Button> 
            <Button variant="contained" disabled>Disabled</Button> 
            <Button color="primary" href="https://www.naver.com/">네이버</Button> 
            <Button variant="outlined" color="secondary">Secondary</Button> 
            <Button variant="outlined" color="secondary" size="small">Secondary Small</Button> 
            <Button variant="outlined" color="secondary" size="medium">Secondary Medium</Button> 
            <Button variant="outlined" color="secondary" size="large">Secondary Large</Button> 
        </div>
    )
}

export default MeteEx1;