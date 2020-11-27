import React from "react";

const Winners = (props) => {
    let WinnersList = null;
    if (props.winners.length > 0) {
        WinnersList = props.winners.map((winner) => {
            return (
                <div
                    className="d-block winner text-center py-2 px-3 mb-4 mx-4 "
                    key={winner._id}
                >
                    <h4>{winner.name}</h4>
                    <h5>{winner.rafflename}</h5>
                </div>
            );
        });
    }
    return (
        <div className="container p-0">
            <div className="winnersComponent">
                <div className="title  d-flex align-items-center justify-content-center mb-3">
                    <h1>Winners</h1>
                </div>
                <div className="winner-list pt-2">
                    {WinnersList !== null ? WinnersList : ""}
                </div>
            </div>
        </div>
    );
};

export default Winners;
