let createApt = function(apartment) {
    return fetch('/apartments', {
        body: JSON.stringify(apartment), // we need to stringify the json for fetch
        headers: { // we specificy that we're sending JSON, and expect JSON back
            'Content-Type': 'application/json'
        },
        method: "POST" // here's our verb, so the correct endpoint is invoked on the server
    })
        .then((resp) => {
            let json = resp.json()
            return json
        })
}

export {
    createApt
}