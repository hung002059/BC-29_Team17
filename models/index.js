fetch('https://628b995c7886bbbb37bbca5a.mockapi.io/api/product')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(function(err) {
        console.log(err)
    })