import React, {useState, useEffect} from 'react';

function History() {
    const [data, setData] = useState('');
    const getInfo = async () => {
        try{
            let response = await fetch('https://api.spacexdata.com/v3/history/1');
            let info = await response.json();
            setData(info);
            return;
        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div>
            <center><b><h1>{data.title}</h1></b></center>
            <center><h6>{data.event_date_utc}</h6></center>
            <center><p><h4>{data.details}</h4></p></center>
        </div>
    )
}

export default History;