import React, {useEffect, useState} from 'react'
import {FlatsType, FlatType} from "../../api/flats-api";
import {Flat} from "../Flat/Flat";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlatsTC} from "../Flat/flat-reducer";
import {CircularProgress, Grid, LinearProgress} from "@material-ui/core";
import {AppRootStateType} from "../../store";
import style from './Flats.module.scss'


export const Flats = () => {
    const dispatch = useDispatch()
    const flats = useSelector<AppRootStateType, FlatsType>((state) => state.flats)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)

        }, 1000)
        dispatch(fetchFlatsTC())
    }, [])

    if (!isLoaded) {
        return <div className={style.loader}><CircularProgress/></div>
    }
    return (
        <div>
            <h1 className={style.header}>Вашему вниманию представлены следующие объекты недвижимости:</h1>
            <Grid container className={style.container}>
                {
                    flats.map(flat => {
                        return <Grid item key={flat.id}>
                            <Flat flat={flat}/>
                        </Grid>
                    })
                }
            </Grid>

        </div>
    )
}
