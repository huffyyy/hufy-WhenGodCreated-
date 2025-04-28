document.addEventListener('DOMContentLoaded', function() {
    // Animasi tambahan untuk efek cairan
    const liquids = document.querySelectorAll('.liquid');
    
    liquids.forEach(liquid => {
        // Tambahkan efek gelembung acak
        if (!liquid.classList.contains('toxic-liquid')) {
            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.left = `${Math.random() * 80 + 10}%`;
                bubble.style.bottom = `${Math.random() * 20}%`;
                bubble.style.width = `${Math.random() * 10 + 5}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.animationDelay = `${Math.random() * 5}s`;
                liquid.appendChild(bubble);
            }
        }
    });
});