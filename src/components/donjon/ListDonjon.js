import React, { useState, useEffect } from "react";
import { donjonAll } from '../../data/donjonAll';

const ListDonjon = () => {
    const [currentDonjon] = useState(donjonAll);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ["50", "100", "150", "190", "200"];

    return (
        <div className="donjon">
            <div className="donjon__header">
                <input type="text"
                    placeholder="Search..."
                    onChange={event => { setSearchTerm(event.target.value) }}
                />

                <ul className="donjon__radio">
                    {radios.map((radio) => {
                        return (
                            <li key={radio}>
                                <input
                                    type="radio"
                                    value={radio}
                                    id={radio}
                                    checked={radio === selectedRadio}
                                    onChange={(e) => setSelectedRadio(e.target.value)}
                                />
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        );
                    })}
                </ul>
                <div className="cancel">
                    {selectedRadio && (
                        <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
                    )}
                </div>
            </div>

            {currentDonjon.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val
                }
            })
                .filter((val) => val.select.includes(selectedRadio))
                .map((val, key) => {
                    return <ul key={key} className="donjon__list">
                        <li><img src={val.img} /></li>
                        <li>{val.title}</li>
                        <li>{val.level}</li>
                        <li>{val.succes}</li>
                    </ul>;
                })}


        </div>
    );
}

export default ListDonjon;