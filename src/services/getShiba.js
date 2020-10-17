function getShiba() {
    return fetch('https://dog.ceo/api/breed/shiba/images/random')
    .then(response => response.json())
    .then(shibaData => {
        return shibaData.message
    })
}

export default getShiba;