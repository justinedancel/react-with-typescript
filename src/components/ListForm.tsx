import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        imageUrl: string;
        note?: string | undefined;
    }[]>>
}

const ListForm: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        imageUrl: "",
        note: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.imageUrl) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                imageUrl: input.imageUrl,
                note: input.note,
            }
        ])

        setInput({
            name: "",
            age: "",
            imageUrl: "",
            note: "",
        })
    }

    return (
        <div className="list-form">
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="list-form-input"
                value={input.name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Age"
                name="age"
                className="list-form-input"
                value={input.age}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image URL"
                name="imageUrl"
                className="list-form-input"
                value={input.imageUrl}
                onChange={handleChange}
            />
            <textarea
                placeholder="Note"
                name="note"
                className="list-form-input"
                value={input.note}
                onChange={handleChange}
            />
            <button
                className="list-form-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    );
}

export default ListForm;