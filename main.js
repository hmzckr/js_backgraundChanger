
const body = document.querySelector("body")
const button = document.querySelector("button")
const colors = [  "black" ,
                  "yellow" ,
                  "red" , 
                  "blue", 
                  "green", 
                  "#6c74bd", 
                  "#a3bd6c" , 
                  "#bd8b6c"];

/////////////////// buttonun rengini değiştirme alanı

button.addEventListener ("click", buttonBackground);

function buttonBackground() {
   const rastgeleSayi = Math.floor(Math.random() * colors.length);
   const secilenRenk = colors [rastgeleSayi]; 
   button.style.backgroundColor = secilenRenk;
}


/////////////////// arkaplan rengini değiştirme alanı
button.addEventListener("click", changeBackground);

let sıra = 0 ;

function changeBackground() {
/////////////////////// rastgele bir renk 

    // const rastgeleSayi = Math.floor(Math.random() * colors.length);
    // const secilenRenk = colors [rastgeleSayi]; 
    // body.style.backgroundColor = secilenRenk;
    // console.log(rastgeleSayi, secilenRenk)

///////////////////// sırayla renk geçişi yapsın
    console.log (sıra);
    if(sıra == 7) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;
    }

/////////////////// arkaplan rengini değiştirme alanı