const images = document.querySelectorAll('.gallery img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');

        let currentIndex = 0;

        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                showLightbox(img.src);
            });
        });

        function showLightbox(src) {
            lightbox.style.display = 'flex';
            lightboxImg.src = src;
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }

        function filterImages(category) {
            images.forEach(img => {
                if (category === 'all') {
                    img.style.display = 'block';
                } else {
                    img.style.display = img.classList.contains(category) ? 'block' : 'none';
                }
            });
        }
        document.getElementById('themeToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            document.getElementById('themeToggle').innerText = isDark ? 'Light Mode' : 'Dark Mode';
        });

        /* Smooth Filter Transition */
        function filterImages(category) {
            images.forEach(img => {
                img.style.opacity = 0;
                setTimeout(() => {
                    if (category === 'all') {
                        img.style.display = 'block';
                    } else {
                        img.style.display = img.classList.contains(category) ? 'block' : 'none';
                    }
                    img.style.opacity = 1;
                }, 300);
            });
        }