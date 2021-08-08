import React, {useState} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../styles/Styles';

const PlayerForm = (props) => {
    const {newPlayer, setNewPlayer, onSubmitProp} = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [game1, setGame1] = useState(0);
    const [game2, setGame2] = useState(0);
    const [game3, setGame3] = useState(0);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name,
            position,
            game1,
            game2,
            game3
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <form>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </form>
                <form>
                    <FillLabel>Position:</FillLabel>
                    <MainInput type="text" onChange={(e) => setPosition(e.target.value)}/>
                </form>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PlayerForm
