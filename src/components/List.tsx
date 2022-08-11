import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => (
            <li className="list-item">
                <div className="list-header">
                    <img className="list-image" alt={`${person.name}-imageUrl`} src={person.imageUrl} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="list-note">{person.note}</p>
            </li>
        ))
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default List;