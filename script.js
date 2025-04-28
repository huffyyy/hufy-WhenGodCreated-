document.addEventListener('DOMContentLoaded', function() {
    // Animasi tambahan untuk efek cairan
    const liquids = document.querySelectorAll('.liquid');
    
    liquids.forEach(liquid => {
        // Tambahkan efek gelembung acak
        if (!liquid.classList.contains('toxic-liquid') && 
            !liquid.classList.contains('lemot-liquid') &&
            !liquid.classList.contains('galak-liquid')) {
            for (let i = 0; i < 8; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.left = `${Math.random() * 80 + 10}%`;
                bubble.style.bottom = `${Math.random() * 20}%`;
                bubble.style.width = `${Math.random() * 10 + 5}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.animationDelay = `${Math.random() * 3}s`;
                bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
                liquid.appendChild(bubble);
            }
        }
        
        // Efek khusus untuk galak (gelembung merah)
        if (liquid.classList.contains('galak-liquid')) {
            for (let i = 0; i < 6; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.backgroundColor = 'rgba(232, 67, 147, 0.7)';
                bubble.style.left = `${Math.random() * 80 + 10}%`;
                bubble.style.bottom = `${Math.random() * 20}%`;
                bubble.style.width = `${Math.random() * 15 + 5}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.animationDelay = `${Math.random() * 2}s`;
                bubble.style.animationDuration = `${Math.random() * 2 + 1}s`;
                liquid.appendChild(bubble);
            }
        }
    });
});