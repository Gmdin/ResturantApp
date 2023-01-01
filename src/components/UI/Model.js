
import { ReactDOM } from 'react';
import classes from './Model.module.css';
const Backdrop=(props)=>{
    return (<div className={classes.backdrop}/>)
};

const ModelOverlay=(props)=>{
    <div className={classes.model}>
            <div className={classes.content}>{props.children}</div>
        </div>
}

const portalElement=document.getElementById('overlase');
const Model=(props)=>{
    return(
        <>
            {ReactDOM.createPortal(<Backdrop/>,portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
        </>
    )
};
export default Model;