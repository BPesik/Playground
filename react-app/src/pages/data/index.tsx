import React, { useState, useEffect } from "react"
import FetchData  from "../../api/dataApi"
import Table from "../../components/Table/index"
import { Todo } from "../../types/data"

function Data() {
    const [data, setData] = useState<Todo[]>([]);

    useEffect(() => {
        FetchData().then(x => setData(x));
    }, [])

    if(data === []) return <></>

    return (
        <Table data={data}/>
    )
}

export default Data;