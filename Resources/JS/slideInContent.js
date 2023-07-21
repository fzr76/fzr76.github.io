// This code will have content slide in to the screen when you scroll past it
window.addEventListener('scroll', function() {
    const content = document.getElementById('Content');
    const elements = content.children;

    Array.from(elements).forEach(element => {
        const rect = element.getBoundingClientRect();
        const top = rect.top;

        if(top <= window.innerHeight / 0.75) {
            element.classList.add('animate');
        }
    });
});
