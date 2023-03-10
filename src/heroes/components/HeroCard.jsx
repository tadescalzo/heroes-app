import React from 'react'

export const HeroCard = ({id,superhero,publisher,alter,first,characters}) => {

    const url = `/assets/heroes/${ id }.jpg`

  return (
    <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className="col-4">
                    <img src={url} alt={superhero}/>
                </div>
            </div>
        </div>
    </div>
  )
}
