import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";

function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    console.log(details);

    const filtered = details.filter((entry) => {
        return entry.description.toLowerCase().includes(searchField.toLowerCase()) || entry.name.toLowerCase().includes(searchField.toLowerCase());
    });


    return (
        <div>
            <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        align: "center",
                    }}>
                <input
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        align: "center",
                        width: 50 + '%'
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <br/>
            <br/>
            <div>
                <DisplayFoodItems recipes={filtered} />
            </div>
        </div>
    );
}

export default Search;