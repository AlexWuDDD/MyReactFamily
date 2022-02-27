import React from 'react'

import { Grid } from '@mui/material'
import LeftPane from '../LeftPane'
import RightPanel from '../RightPane'

export default function Content(props) {

  const {newData, handleDetail, oneData} = props

  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <LeftPane newData={newData} handleDetail={handleDetail}/>
      </Grid>
      <Grid item sm>
        <RightPanel oneData={oneData}/>
      </Grid>
    </Grid>
  )
}
