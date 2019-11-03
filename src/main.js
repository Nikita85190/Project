const allDog = document.getElementsByClassName('Dog-name');
for (let i = 0; i < allDog.length; i++) {
    allDog[i].addEventListener("click", function () {
        if (document.getElementById(this.id + '-tel').style.display == "")
            document.getElementById(this.id + '-tel').style.display = "none";
        else
            document.getElementById(this.id + '-tel').style.display = "";
    })
}

const news = document.getElementsByClassName("news");
for (let i = 0; i < news.length; i++) {
    news[i].addEventListener("click", function () {
    })
}