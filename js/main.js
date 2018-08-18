(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/getCommits?repoName=Spero-b&autherName=T37A",
        "method": "GET"
    }
    $.ajax(settings).done(function (response) {
        let i = 1;
        response.forEach(element => {
            $("#git-info").append(`<tr>
                <td>${i++}</td>
                <td>${element.commit.author.name}</td>
                <td>${element.commit.author.email}</td>
                <td>${element.commit.author.date}</td>
                <td>${element.commit.message}</td>
            </tr>`);
        });
    });

})();