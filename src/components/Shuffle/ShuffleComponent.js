import React from "react";
import ShuffleText from "react-shuffle-text";
import { Button } from "react-bootstrap";

const Shuffle = (props) => {
    const btnClick = () => {
        if (props.contestants.length > 0) {
            var randomNum = Math.floor(
                Math.random() * props.contestants.length
            );
            props.setshuffleText(props.contestants[randomNum].rafflename);
            props.setwinnerId(props.contestants[randomNum]._id);
            console.log(props.contestants[randomNum]._id);
        }
    };
    return (
        <div className="container text-center">
            <div className="shuffleComponent text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="ticket d-flex align-items-center justify-content-center mb-3">
                        <h1>
                            <ShuffleText content={props.shuffleText} />
                        </h1>
                    </div>
                </div>
                <div
                    className="gradient-button gradient-btn"
                    onClick={btnClick}
                >
                    Draw
                </div>
                {/* <Button
                    variant="primary"
                    className="shuffleBtn"
                    size="lg"
                    
                >
                    Draw
                </Button> */}
            </div>
        </div>
    );
};

export default Shuffle;
