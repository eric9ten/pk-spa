import React from 'react'

import s from './field.module.scss'

class Field extends React.Component {
    render() {
      return (
          <>
            <canvas id="field" width="665" height="375" className={s.field}></canvas>
            </>
      )
    }
  }


export default Field;