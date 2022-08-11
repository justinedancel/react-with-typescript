import React from "react";

interface IProps {
    people: {
        name: string,
        age: number,
        imageUrl: string,
        note?: string, // ? - optional
    }[] // [] - going to be an array
}


const List: React.FC<IProps> = ({ people }) => {

    return (
        <div>
            List, I am
        </div>
    );
}

export default List;