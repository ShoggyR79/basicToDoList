function Task(name) {
    this.id = 0;
    this.name = name;
    this.status = "todo";

    this.makeID = function () {
        this.id = Math.random();
    }

}