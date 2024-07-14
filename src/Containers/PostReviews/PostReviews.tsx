import React from 'react'
import "./PostReviews.css"
import { Container, Paper, Rating, TextField, Typography } from '@mui/material'
type Props = {}

const PostReviews = (props: Props) => {
    const [value, setValue] = React.useState<number | null>(2);
  return (
       <React.Fragment>
        <Paper sx={{m:3,width:"40%"}}>
            <Container>
                <Typography variant='h6' className='fw-bold opacity07'>Post Review</Typography>
                <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography>Review</Typography>
       <TextField
          id="outlined-textarea"
          placeholder="Provide Review........."
          multiline
       minRows={6}
          sx={{marginBottom:"10px"}}
          fullWidth
        />
            </Container>
        </Paper>
       </React.Fragment>
  )
}

export default PostReviews