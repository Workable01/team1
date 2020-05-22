export class Plank {
  constructor(x, y, ctx, width = 150, type = "NORMAL") {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 10;
    this.remove = false;
    this.moving = true;
    this.direction = 1;
    this.visible = true;
    this.speed = 2;
    this.type = type;
    switch (type) {
      case "NORMAL":
        this.color = "#f1e9da";
        break;
      case "BOOST":
        this.color = "#ffd400";
        break;
      case "FINISH":
        this.color = "#541388";
        break;
      default:
        this.color = "#f1e9da";
        break;
    }
  }

  draw() {
    if (this.y >= window.game.groundY) {
      this.remove = true;
    }
    if (this.visible) {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  move() {
    if (this.moving) {
      if (this.x + this.width >= window.game.width) {
        this.direction = -1;
      } else if (this.x <= 0) {
        this.direction = 1;
      }
      this.x += 2 * this.direction;
    }
  }
}
