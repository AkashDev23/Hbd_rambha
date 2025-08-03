// Start heart animation after a delay
function startHeartAnimation() {
    const canvas = document.getElementById('garden');
    const ctx = canvas.getContext('2d');

    let hearts = [];

    function Heart(x, y, size, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy;
        this.alpha = 1;
    }

    Heart.prototype.draw = function () {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#ff69b4';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x + this.size, this.y - this.size,
                          this.x + 2 * this.size, this.y + this.size,
                          this.x, this.y + 2 * this.size);
        ctx.bezierCurveTo(this.x - 2 * this.size, this.y + this.size,
                          this.x - this.size, this.y - this.size,
                          this.x, this.y);
        ctx.fill();
        ctx.restore();
    };

    Heart.prototype.update = function () {
        this.y -= this.dy;
        this.alpha -= 0.01;
    };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts = hearts.filter(h => h.alpha > 0);
        hearts.forEach(h => {
            h.update();
            h.draw();
        });

        if (Math.random() < 0.1) {
            let x = Math.random() * canvas.width;
            let y = canvas.height;
            let size = 8 + Math.random() * 4;
            let dy = 1 + Math.random() * 1;
            hearts.push(new Heart(x, y, size, 0, dy));
        }

        requestAnimationFrame(animate);
    }

    // Resize canvas to fit section
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
}
