import { useEffect, useState } from "react";


export const useMinDate = () =>{
    const [minDate, setMinDate] = useState('');


    useEffect(() => {
        const currentDate = new Date()
		currentDate.setFullYear(currentDate.getFullYear() - 18)
		const formattedDate = currentDate.toISOString().split('T')[0]
		setMinDate(formattedDate)
    }, []);

    return {minDate}
}