function applyTypewriterToAll(selector, speed = 50) {
    const elements = document.querySelectorAll(selector);
    let index = 0;

    function typeElement(el) {
        const text = el.textContent;
        el.textContent = "";
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                index++;
                if (index < elements.length) {
                    typeElement(elements[index]);
                }
            }
        }, speed);
    }

    if (elements.length > 0) {
        typeElement(elements[0]);
    }
}
