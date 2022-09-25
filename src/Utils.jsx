export const useFetch = async (url, method, body ) => {
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (method) {
            return res;
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}