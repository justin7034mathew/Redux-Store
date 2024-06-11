import React from 'react'
import { connect } from 'react-redux'

const Card = ({cards}) => {
  return (
    <div>
        {cards.map((cards,key) => {
            return (
                <div key={key}>
                    <h1>{cards.tittle}</h1>
                    <p>{cards.body}</p>
                </div>
            )          
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Card)