import React from 'react'
import {FlatsType, FlatType} from "../../api/flats-api";
import {setIsLikeTC} from "./flat-reducer";
import {useDispatch, useSelector} from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import style from './Flat.module.scss'

export type CardPropsType = {
    flat: FlatType
}

export const Flat = (props: CardPropsType) => {

    const {id, attributes, relationships, like} = props.flat;
    const {title, rooms, address} = attributes;
    const {street, house, room} = address;
    const { attributes: { first_name, last_name, middle_name } } = relationships;


    const dispatch = useDispatch()

    const setIsLike = (id: number) => dispatch(setIsLikeTC(id, !props.flat.like));


    return <div className={style.flatItem}>
        <img src={props.flat.img}/>
        <h2 className={style.title}>{props.flat.attributes.title}</h2>
        <div className={style.flatDescription}>
            <HomeIcon/>
            <p>{`Улица:${street},  Дом:${house},  Квартира:${room}`}</p>
        </div>
        <div className={style.agentInfo}>
            <PersonIcon/>
            <p>{`Агент: ${first_name}  ${last_name} ${middle_name}`}</p>
        </div>
        <div className={style.postLike}>
            <span>Отметить жилье</span>
            <div>{props.flat.like ? <FavoriteIcon onClick={() => setIsLike(props.flat.id)}/>
            : <FavoriteBorderIcon onClick={() => setIsLike(props.flat.id)}/>}</div>
        </div>
    </div>
}
