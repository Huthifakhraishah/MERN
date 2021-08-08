import React, {useEffect} from 'react';
import axios from 'axios';
import DeleteBut from './DeleteBut';
import LittleHead from './LittleHead';

const PlayerList = (props) => {
    const {player, setPlayer} = props;

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => setPlayer(res.data))
    }, [])

    const removeFromDom = (playerId) => {
        setPlayer(player.filter(players => player._id !== playerId))
    }

    return (
        <div>
            <LittleHead/>
            <table>
                <tbody>
                    <tr>
                        <td> <h2>Players</h2></td>
                        <td><h2>Preferred Position</h2></td>
                        <td><h2>Actions</h2></td>
                    </tr>
                    {player.map((players,idx) => {
                        return (
                            <tr key={idx}>
                                <td>{players.name}</td>
                                <td>{players.position}</td>
                                <td><DeleteBut playerId={players._id} successCallback={() => removeFromDom(players._id)}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList
