function TaskList() {
    this.arr = [];

    this.findIndex = function (id) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }

    this.addTask = function (task) {
        this.arr.push(task);
    }
    this.removeTask = function (id) {
        this.arr.splice(this.findIndex(id), 1);
    }
    this.getTask = function (id) {
        return this.arr[this.findIndex(id)];
    }
    this.updateTask = function (id) {
        index = this.findIndex(id);
        if (this.arr[index].status == "todo") {
            this.arr[index].status = "completed";
        } else {
            this.arr[index].status = "todo";
        }
    }
    this.checkNames = function (name) {
        isUnique = true;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name == name) {
                isUnique = false;
                break;
            }
        }
        return isUnique;
    }
}