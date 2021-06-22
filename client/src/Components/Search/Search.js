import React from "react";

const Search = ({ getSearchItem }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <input
                type="text"
                className="form-control shadow-none "
                className="col-xs-4"
                style={{
                    boxSizing: "50%",
                    borderRadius: "10px",
                    borderColor: "#777",
                    textDecoration: "none",
                }}
                placeholder="Search..."
                onChange={(e) => getSearchItem(e.target.value)}
            />
        </div>
    );
};

export default Search;
