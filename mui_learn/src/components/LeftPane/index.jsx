import React, { Fragment } from 'react'

import { List, Paper, Typography, ListItem, ListItemText} from '@mui/material'

const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20
  }
}

export default function LeftPane(props) {


  const {newData, handleDetail} = props

  return (
    <Paper style={styles.paper}>
      {
        newData.map((item, index)=>{
          return (
            <Fragment key={index}>
              <Typography variant="h6">{item[0]}</Typography>
              <List>
                {
                  item[1].map((item, index)=>{
                    return (
                      <ListItem 
                        button 
                        key={index}
                        onClick={()=>handleDetail(item.id)}
                      >
                        <ListItemText>{item.title}</ListItemText>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Fragment>
          )
        })
      }
    </Paper>
  )
}
