import React, { Fragment } from 'react'

import { Paper, Typography } from '@mui/material'

const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20
  }
}

export default function RightPane(props) {
  const { oneData } = props
  return (
    <Paper style={styles.paper}>
      {
        oneData ? (
          <Fragment>
            <Typography variant="h6">{oneData.id}</Typography>
            <Typography variant="overline">{oneData.title}</Typography>
            <br></br>
            <Typography variant="overline">{oneData.detail}</Typography>
          </Fragment>
        ) 
        : (
          <Fragment>
            <Typography variant="h6">欢迎使用</Typography>
          </Fragment>
        )
      }
    </Paper>
  )
}
