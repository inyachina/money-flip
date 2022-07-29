import React, {useState} from 'react';
import Select from 'react-select';
import './select.scss'
import triangle from '../../assets/img/triangle.svg'

export const SelectImg = ({banks, withOutInput, handleBankIndex, handleAmount}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [amount, setAmount] = useState(null);

    const handleChangeSelect = e => {
        setSelectedOption(e);
        handleBankIndex(e.index);
    }

    const handleChangeInput = e => {
        // setAmount(e);
        handleAmount(amount)
    }
    const colourStyles = {
        menuList: styles => ({
            ...styles,
            background: 'white'
        }),
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            background: isFocused
                ? '#C9DAFF'
                : isSelected
                    ? 'white'
                    : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100,
            background: "red"
        }),
        control: (styles, {isFocused, isSelected, isHovered}) => ({
            ...styles,
            borderRadius: '10px',
            background: '#F5F5F5',
            border: isHovered
                ? '1 px solid #2E6DFE' : '1px solid transparent'
        }),
    }
    return <div className="select_container">
        <img className={"triangle"} src={triangle}/>{/*{e.icon}*/}
        <Select
            placeholder=""
            classNamePrefix="select"
            styles={colourStyles}
            value={selectedOption}
            options={banks}
            prefixClassName={"select"}
            isSearchable={false}
            onChange={handleChangeSelect}
            getOptionLabel={e => (
                <div className="option_container">
                    <img src={e.icon}/>{/*{e.icon}*/}
                    <span style={{marginLeft: 5}}>{e.text}</span>
                </div>
            )}
        />
        {(withOutInput) ??
        <div className="input_container">
            <input
                o
                type={"number"}
                min={1}
                required={true}
                onChange={handleChangeInput}
                value={amount}/>
        </div>}
    </div>
}
