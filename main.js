function carregarDados() {
    fetch("json/estados.json")
        .then(response => response.json())
        .then(dados => {
            dados.sort(function (a, b) {
                if (a.uf < b.uf) return -1
                if (a.uf > b.uf) return 1
                return 0
            })

            let div = document.getElementById("estados");
            let ul = document.createElement("ul");
            let h3 = document.createElement("h3")
            h3.innerText = 'Estados Brasileiros'
            const brasil = { lat: -14.2400732, lng: -53.1805017 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: brasil

            });

            dados.forEach(estado => {
                let li = document.createElement("li");

                li.innerText = estado.nome + " - " + estado.uf
                ul.appendChild(li);

                const marker = new google.maps.Marker({
                    position: {lat: estado.latitude, lng: estado.longitude},
                    map: map,
                })
            })
            
            div.appendChild(h3)
            div.appendChild(ul);

        })
}