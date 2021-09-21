// write your CatList component here
import React from 'react'

export const CatList = (props) => {
  return (
    <div>
      {props.catPics.map( cat => {
        return (
          <img src={cat.url} key={cat.id} alt="Cat" />
        )
      })}
    </div>
  )
}