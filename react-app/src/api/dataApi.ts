async function FetchData(): Promise<any> {
    const data = await fetch("https://localhost:5001/todo")
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
            return response.json() as Promise<any>
        })
    
    return data;
}
   
export default FetchData;