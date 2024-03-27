import { useState } from "react";


export const useConditions=()=>{
    const [terms, setTerms] = useState<boolean>(false)
    const [maxYearsOld, setmaxYearsOld] = useState<boolean>(false)

    const handleTermsChange = ( check:boolean ) => {
        setTerms(check);
      };
    
    const handleMaxYearsOldChange = ( check:boolean ) => {
        setmaxYearsOld(check);
      };

    return { terms, maxYearsOld, handleTermsChange, handleMaxYearsOldChange }
}