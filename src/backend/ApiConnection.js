//file contains methods for fetching and posting data to API

export async function FetchDataFromAPI(url) {
    let data = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
        });
    return data;
}

export async function EditDataOnAPI(url, body) {
    console.log(url)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: body
    };
    await fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function AddDataOnAPI(url, body) {
    console.log(url)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
    };
    await fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function DeleteDataFromAPI(url) {
    const requestOptions = {
        method: 'DELETE'
    };
    await fetch(url, requestOptions)
        .then(() => console.log('Delete successful ' + url))
        .catch((error) => {
            console.error(error);
        });
}

