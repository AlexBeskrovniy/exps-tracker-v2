export const useFetch = async (url, method, body ) => {
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}