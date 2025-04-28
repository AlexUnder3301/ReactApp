import React from "react";


const Task = ({todoData}) => {

    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
              <label>
                <span className="description">{todoData.description}</span>
                <span className="created">{todoData.created}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
        </div>
    )
}

export default Task