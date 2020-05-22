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
        this.color = "#6D6875";
        break;
      case "BOOST":
        this.color = "#02c39a";
        break;
      case "FINISH":
        this.color = "red";
        break;
      default:
        this.color = "#6D6875";
        break;
    }
  }

  draw() {
    //this.y += this.speed;
    if (this.moving) {
      if (this.x + this.width >= window.game.width) {
        this.direction = -1;
      } else if (this.x <= 0) {
        this.direction = 1;
      }
      this.x += 2 * this.direction;
    }
    if (this.y >= window.game.groundY) {
      this.remove = true;
    }
    if (this.visible) {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
