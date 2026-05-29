function revealLove() {
    // Pehle wale message ko chhupane ke liye
    document.getElementById('initialState').style.display = 'none';
    
    // Surprise message dikhane ke liye
    const secret = document.getElementById('secretMessage');
    secret.style.display = 'block';
    setTimeout(() => {
        secret.style.opacity = '1';
    }, 50);

    // Dil (Hearts) udane ka animation shuru karne ke liye
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Alag-alag jagah se hearts nikalne ke liye random logic
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    document.body.appendChild(heart);

    // Screen se bahar jaane ke baad remove karne ke liye
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
