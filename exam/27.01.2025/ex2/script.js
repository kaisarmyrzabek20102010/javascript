
    const search = document.getElementById('search');
    const List = document.getElementById('List');
    const errorDiv = document.getElementById('error');
    const button = document.getElementById('button');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            displayCities(data);
            search.addEventListener('input', function() {
                const searchText = search.value.toLowerCase();
            });
        })

