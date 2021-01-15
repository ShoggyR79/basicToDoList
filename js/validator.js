function Validator() {
    this.inputValidate = function () {
        var task = getEle("newTask");
        var isValid = true;
        if (task == "") {
            isValid = false;
            return isValid;
        } else {
            return isValid;
        }
    }
    this.validateTask = function (taskName, taskList) {
        return taskList.checkNames(taskName);
    }
}