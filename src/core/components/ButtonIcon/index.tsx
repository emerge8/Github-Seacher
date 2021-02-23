import React from 'react';
import './styles.scss';

type  Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <button className="button-config">
        <h5>Começar</h5>
    </button>
);
export default ButtonIcon;