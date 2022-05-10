const employees = (bob, jim, doug)
class employee{
    constructor (name, job, salary, type = "Full Time"){
    this.name = name
    this.job = job
    this.salary = salary
    this.type = type
    }
}

    var bob = new employee("bob", "instructor", "$30/hr")
    var jim = new employee("jim", "coach", "40/hr", "Contract")
    var doug = new employee("doug", "teacher", "30/hr")



console.log(jim)
