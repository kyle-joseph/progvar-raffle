import React, { useState, useEffect } from "react";
import Shuffle from "./Shuffle/ShuffleComponent";
import Winners from "./Winners/WinnersComponent";
import * as Contestants from "../data/contestants";

const Main = () => {
    const [shuffleText, setshuffleText] = useState("");
    const [contestants, setcontestants] = useState([]);
    const [winnerId, setwinnerId] = useState("");
    const [winners, setwinners] = useState([]);

    const fetchContestants = async () => {
        const result = await Contestants.fetchContestant();
        setcontestants(result);
        console.log(result);
    };
    const fetchWinners = async () => {
        const result = await Contestants.fetchWinners();
        setwinners(result);
        console.log(result);
    };
    const updateStatus = async () => {
        await Contestants.updateStatus(winnerId);
    };

    useEffect(() => {
        const fetch = async () => {
            if (winnerId !== "") {
                await updateStatus();
            }
            const timer = setTimeout(async () => {
                await fetchWinners();
            }, 2300);

            await fetchContestants();

            return () => clearTimeout(timer);
        };
        fetch();
    }, [shuffleText, winnerId]);

    return (
        <div className="container-fluid wrapper p-0">
            <div className="row no-gutters">
                <div className="col-md-8 d-flex align-items-center shuffle">
                    <Shuffle
                        shuffleText={shuffleText}
                        setshuffleText={setshuffleText}
                        contestants={contestants}
                        setcontestants={setcontestants}
                        setwinnerId={setwinnerId}
                    />
                </div>
                <div className="col-md-4 winners">
                    <Winners winners={winners} />
                </div>
            </div>
        </div>
    );
};

export default Main;
