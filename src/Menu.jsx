import React from 'react'

export const Menu = ({title, version, flag, owner, arr, courses}) => {
    const buyCoorse = (id) => {
        console.log('click', id);
    }
  return (
    <>
        <h1>{title}</h1>
        <p>{version}</p>
        <b>{flag ? 'Рабочая': 'Нерабочая'}</b>
        <p> Owner: {owner.parent1}</p>
        <div>{arr}</div>
        {/* передача массива нормальным способом */}
        <ul>
            {arr.map((el) => <li key={el}>{el}</li>)}
        </ul>
        <ul>
            {courses.map(el => 
                <li key={el.id}> {el.name}, Возраст: {el.age}
                {/* //Как узнать на какой id мы нажали */}

                <button onClick={() => buyCoorse(el.id)}></button>
                </li>
            )}
        </ul>

    </>
  )
}
