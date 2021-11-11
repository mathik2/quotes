const con = document.querySelector('.container')

async function quote() {
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            con.innerHTML = data.content + '<br><br>' + 'By&nbsp;&nbsp;&nbsp;' + data.author;

            con.style.color = "yellow";
          
        })

}

function cinema() {
    fetch(' https://movie-quote-api.herokuapp.com/v1/quote?censored ')
        .then(res => res.json())
        .then(data => {

            con.innerHTML = data.quote + '<br><br>' + "by&nbsp;&nbsp;" + '"' + data.role + '"' + '&nbsp;&nbsp;' + 'From&nbsp;&nbsp;&nbsp;' + data.show;

            con.style.color = "orange";
        })

}

function advice() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            con.innerHTML = data.slip["advice"];
            con.style.color = "white";

        })

}