import React, { useState } from "react";
import { donjonVeryLow } from "../data/donjonVeryLow";

const ListDonjon = () => {
    const [currentDonjon] = useState(donjonVeryLow);

    console.log(currentDonjon);


    return (
        <div>
            <ul className="donjons">
                {currentDonjon.map((item) => {
                    return <ul key={item}>
                        <li>{item.title}</li>
                        <li>{item.succes}</li>
                        <li>{item.level}</li>
                        <li><img src={item.src} /></li>
                        
                    </ul>;
                })}
            </ul>
        </div>
    );
}

export default ListDonjon;