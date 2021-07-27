import React, {useState,setState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
const Catefory = ({ id },{ cCategory}) => {
    const [cate, setCate] = useState([]);
    const [home, setHome] = useState({ name: "Loading..." });

    useEffect(() => {
        axios.get('https://swapi.dev/api/'+ cCategory +'/' + id)
            .then(res => { setCate(res.data) })
            .catch(() => navigate('https://swapi.dev/api/'+ cCategory +'/' + id));
    }, [id,cate]);

    useEffect(() => {
        axios.get(cate.homeworld)
            .then(res => {
                setHome(res.data);
            })
            .catch(console.log);
    }, [id, cate]);

    const getHomeWorldId = () => {
        if (home.url) {
            const url = home.url;
            let path = url.length - 2;
            let HwId = "";

            while (url[path] !== "/") {
                HwId = url[path] + HwId;
                path--;
            }
            return HwId;
        }
    }

    return (
        <div>
            <h1>{cate.name}</h1>
            <div>
                <p>Height:</p>
                <h3>{cate.height} cm</h3>
            </div>
            <div>
                <p>Weight:</p>
                <h3>{cate.mass} kg</h3>
            </div>
            <div>
                <p>Hair Color:</p>
                <h3>{cate.hair_color}</h3>
            </div>
            <div>
                <p>Skin Color:</p>
                <h3>{cate.skin_color}</h3>
            </div>
            <div>
                <p>Eye Color:</p>
                <h3>{cate.eye_color}</h3>
            </div>
            <div>
                <p>Birth Year:</p>
                <h3>{cate.birth_year}</h3>
            </div>
            <div>
                <p>Home World:</p>
                <h3> <Link to={`/planets/${getHomeWorldId()}`}>{home.name}</Link></h3>
            </div>
        </div>
    )
}

export default Catefory;