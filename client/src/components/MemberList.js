import React, { useState, useEffect } from "react";
import Axios from "axios";

const MemberList = () => {
    const [memberPseudo, setMemberPseudo] = useState("");
    const [memberLevel, setMemberLevel] = useState(0);
    const [memberClasse, setMemberClasse] = useState("");
    const [memberSucces, setMemberSucces] = useState(0);

    const [newMemberPseudo, setNewMemberPseudo] = useState("");
    const [memberList, setMemberList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setMemberList(response.data)
        });
    }, []);

    const addToList = () => {
        Axios.post("http://localhost:3001/insert",
            {
                memberPseudo: memberPseudo,
                memberLevel: memberLevel,
                memberClasse: memberClasse,
                memberSucces: memberSucces
            }
        );
    }

    const updateMember = (id) => {
        Axios.put("http://localhost:3001/update", {
            id: id,
            newMemberPseudo: newMemberPseudo,
        });
    };

    const deleteMember = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    };

    return (
        <div className="App">
            <h1>CRUD App with MERN</h1>

            <input
                type="text"
                onChange={(event) => {
                    setMemberPseudo(event.target.value);
                }} />

            <input
                type="number"
                onChange={(event) => {
                    setMemberLevel(event.target.value);
                }} />

            <input
                type="text"
                onChange={(event) => {
                    setMemberClasse(event.target.value);
                }} />

            <input
                type="number"
                onChange={(event) => {
                    setMemberSucces(event.target.value);
                }} />

            <button onClick={addToList}>Add to list</button>

            <h1>Member List</h1>

            {memberList.map((val, key) => {
                return (
                    <div key={key}>
                        <h1>{val.memberPseudo}</h1>
                        <input type="text" placeholder="New member"
                            onChange={(event) => {
                                setNewMemberPseudo(event.target.value);
                            }}
                        />
                        <button onClick={() => updateMember(val._id)}>Update</button>
                        <button onClick={() => deleteMember(val._id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

export default MemberList;