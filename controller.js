


function show(){
    let image = document.getElementById("image");
    const gifs = ["https://media0.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=ecf05e4769y1e79e98ul05c3xxxomlo8nwj8hpj44ftd1fek&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=ecf05e47t1bqno1bedpqia0ruhvuvmh6ibshe6btncmgkmga&rid=giphy.gif&ct=g",
"https://media2.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=ecf05e47t1bqno1bedpqia0ruhvuvmh6ibshe6btncmgkmga&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=ecf05e47t1bqno1bedpqia0ruhvuvmh6ibshe6btncmgkmga&rid=giphy.gif&ct=g", "https://media4.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif?cid=ecf05e47t1bqno1bedpqia0ruhvuvmh6ibshe6btncmgkmga&rid=giphy.gif&ct=g",
 "https://media1.giphy.com/media/QObPo575HQHlGMhbae/giphy.gif?cid=ecf05e47t1bqno1bedpqia0ruhvuvmh6ibshe6btncmgkmga&rid=giphy.gif&ct=g", "https://media0.giphy.com/media/njtPBlbYnHAHK/giphy.gif?cid=790b7611877baf6d87868f03517cbac6199975def44ff8bb&rid=giphy.gif&ct=g", 
"https://media1.giphy.com/media/Dw1m8lSxkXPZC/giphy.gif?cid=ecf05e47mfd0pzzqgwmpdgcu2yao94ou9s32ydxdn68vf413&rid=giphy.gif&ct=g", "https://media2.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=ecf05e47n6l7oppey9aqkor0dp6l4mqqilbbbqh4p8fvcg2s&rid=giphy.gif&ct=g", 
"https://media3.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=790b7611f258fe92ed9611e59767c63f94246a37003315bc&rid=giphy.gif&ct=g"];

    let randomIndex = Math.floor(Math.random() * gifs.length);

    image.src = gifs[randomIndex];
    document.getElementById("btnId").style.display = "none";
}

module.exports = {
    show
}