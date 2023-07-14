import styles from './colorselector.module.css';
import ManaIcon from '../../ManaIcon';
import { useState, useEffect } from 'react';
import ManaToggle from './ManaToggle';

export default function ColorSelector({ selectedColors, setSelectedColors}) {
    
    
    useEffect(() => {
        console.log(selectedColors);
    }, [selectedColors])

    function appendToActiveArray(color) {
        setSelectedColors([...selectedColors, color]);
    }
    function removeFromActiveArray(color) {
        setSelectedColors(selectedColors.filter((item) => item !== color));
    }

    return (
    <div className={styles.colorSelectorContainer}>
       <ManaToggle appendToActiveArray={appendToActiveArray} removeFromActiveArray={removeFromActiveArray} selectedColors={selectedColors} color='W'/>
         <ManaToggle appendToActiveArray={appendToActiveArray} removeFromActiveArray={removeFromActiveArray} selectedColors={selectedColors} color='U'/>
            <ManaToggle appendToActiveArray={appendToActiveArray} removeFromActiveArray={removeFromActiveArray} selectedColors={selectedColors} color='B'/>
            <ManaToggle appendToActiveArray={appendToActiveArray} removeFromActiveArray={removeFromActiveArray} selectedColors={selectedColors} color='R'/>
            <ManaToggle appendToActiveArray={appendToActiveArray} removeFromActiveArray={removeFromActiveArray} selectedColors={selectedColors} color='G'/>
            <ManaToggle appendToActiveArray={appendToActiveArray} removeFromActiveArray={removeFromActiveArray} selectedColors={selectedColors} color='C'/>
    </div>
)}