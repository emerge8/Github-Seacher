import React from 'react';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';
import {Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <h1 className="text-title">Desafio do Capítulo 3<br /> Bootcamp DevSuperior</h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /> <br /> Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br /> <br /> Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <Link to="/search">
            <ButtonIcon text="começar" />
            </Link>
        </div>
    </div>
);
export default Home;