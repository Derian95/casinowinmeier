


enum ColorsReactSelect  {
    backgroundInput =        'white',
    borderInput= '#707070',
    borderInputFocus = 'black',
    fontMenuColor = 'black',
    fontInputColor='black',
    menuOptionHover='gray'
}


export const stylesReactSelect = {
    control: (baseStyles: any, state: any) => ({
        ...baseStyles,
        borderColor: state.isFocused ? ColorsReactSelect.borderInputFocus : ColorsReactSelect.borderInput,
        backgroundColor: ColorsReactSelect.backgroundInput,
        borderRadius: '8px',
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? 'black' : ColorsReactSelect.borderInput,
          },
          boxShadow: state.isFocused ?  `0 0 0 .2px #000` :  `0 0 0 .2px #000`,
      
    }),
    placeholder: (baseStyles: any,) => ({
        ...baseStyles,
        color: `gray`,
        fontSize:'14px'
    }),

    dropdownIndicator: (baseStyles: any) => ({
        ...baseStyles,
        color: ColorsReactSelect.borderInput,
    }),
    menu: (b: any) => ({
        ...b,
        backgroundColor: ColorsReactSelect.backgroundInput,
        border: 'solid #2c2e33 1px',
        fontSize:'14px'
    }),
    option: (b: any, state: any) => ({
        ...b,
        backgroundColor: state.isFocused ? ColorsReactSelect.menuOptionHover : ColorsReactSelect.backgroundInput,
        color: ColorsReactSelect.fontMenuColor,
    }),
    clearIndicator: () => ({
        color: ColorsReactSelect.borderInput,
    }),
    indicatorSeparator: (b: any) => ({
        ...b,
        backgroundColor: ColorsReactSelect.borderInput,
    }),
    multiValue: (b: any) => ({
        ...b,
        backgroundColor: ColorsReactSelect.borderInput,
        color:ColorsReactSelect.backgroundInput
    }),
    multiValueLabel:(b: any) => ({
        ...b,
        color: 'white',
    }),
    input:(b: any) => ({
        ...b,
        color: ColorsReactSelect.fontInputColor,
        
    }),
    singleValue: (baseStyles: any) => ({
        ...baseStyles,
        color: ColorsReactSelect.fontInputColor,
        fontSize:'14px'

    }),
}