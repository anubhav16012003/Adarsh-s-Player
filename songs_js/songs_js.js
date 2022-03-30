let All_song = [
    {
      name: "Kalank Title Track",
      path: "music/1.mp3",
      img: "images/1.jpg",
      singer: "Arijit Singh"
    },
    {
      name: "Excuses",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "AP Dhillion"
    },
    {
      name: "Tu aake dekhle",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "King"
    },
    {
      name: "Ghumshudda",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "King"
    },
    {
      name: "Yaar Berozgar ",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "Preet Harpal"
    },
    {
     name: "Yaadein",
     path: "music/6.mp3",
     img: "images/6.jpg",
     singer: "Dino James"
    },
    {
     name: "Raanjhanaa",
     path: "music/7.mp3",
     img: "images/7.jpg",
     singer: "A.R Rehmaan"
    },
    {
     name: "Hensonn",
     path: "music/8.mp3",
     img: "images/8.jpg",
     singer: "Sahara"
    },
    {
     name: "Zara Sa",
     path: "music/10.mp3",
     img: "images/10.jpg",
     singer: "KK"
    }
 ];
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 