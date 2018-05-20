const Person = require('../../main/practice-3/person');
const Student = require('../../main/practice-3/student');
const Teacher = require('../../main/practice-3/teacher');
const Class = require('../../main/practice-3/class');

describe("Person", () => {
  it("should have field name and age", () => {
    let person = new Person("Tom", 21);
    expect(person.name).toBe("Tom");
    expect(person.age).toBe(21);
  });

  it("should have a method introduce, introduce person with name and age", () => {
    let person = new Person("Tom", 21);

    let introduce = person.introduce();

    expect(introduce).toBe("My name is Tom. I am 21 years old.");

  });
});

describe("Student", () => {
  it("should have field name, age and class", () => {
    let clazz = new Class(2);
    let student = new Student("Tom", 21, clazz);
    expect(student.name).toBe("Tom");
    expect(student.age).toBe(21);
    expect(student.clazz).toBe(clazz);

  });

  it("should overwrite Person introduce, introduce student with class", () => {
    let clazz = new Class(2);
    let student = new Student("Tom", 21, clazz);
    clazz.appendMember(student);
    let introduce = student.introduce();

    expect(introduce).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

  });

  it("should introduce there is not class assigned to this student, when this studen d" +
      "oesn't append to this class",
  () => {
    let clazz = new Class(2);
    let student = new Student("Tom", 21, clazz);
    let introduce = student.introduce();

    expect(introduce).toBe("My name is Tom. I am 21 years old. I am a Student. I haven't been allowed to joi" +
        "n Class.");

  });

  it("should introduce student is a leader, when class assign this student to be a lea" +
      "der",
  () => {
    let clazz = new Class(2);
    let student = new Student("Tom", 21, clazz);
    clazz.appendMember(student);
    clazz.assignLeader(student);
    let introduce = student.introduce();

    expect(introduce).toBe("My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.");

  });

});

describe("Teacher", () => {

  it("should have field name, age and klass", () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);
    expect(teacher.name).toBe("Joun");
    expect(teacher.age).toBe(21);
    expect(teacher.clazzes).toEqual([clazz1, clazz2]);
  });

  it("should overwrite Person introduce and show all classes this teacher teaches, whe" +
      "n init two classed to this teacher",
  () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

    let introduce = teacher.introduce();

    expect(introduce).toBe("My name is Joun. I am 21 years old. I am a Teacher. I teach Class 2,3.");

  });

  it("should show no class this teacher teaches info, when there is no class assgin to" +
      " this teacher",
  () => {
    let teacher = new Teacher("Joun", 21, []);

    let introduce = teacher.introduce();

    expect(introduce).toBe("My name is Joun. I am 21 years old. I am a Teacher. I teach No Class.");

  });

  it("should return false, when student hasn't been appended this student to this clas" +
      "s which teacher teaches",
  () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let student = new Student("Tom", 21, clazz1);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

    let isTeaching = teacher.isTeaching(student);

    expect(isTeaching).toBe(false);

  });

  it("should return true, when student has been appended this student to this class wh" +
      "ich teacher teaches",
  () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let student = new Student("Tom", 21, clazz1);
    clazz1.appendMember(student);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

    let isTeaching = teacher.isTeaching(student);

    expect(isTeaching).toBe(true);

  });

});

describe("Class", () => {

  it("should Assign team leader successfully, when student is appended to class", () => {
    let clazz = new Class(2);
    let student = new Student("Tom", 21, clazz);
    clazz.appendMember(student);
    let result = clazz.assignLeader(student);
    expect(result).toBe("Assign team leader successfully.");
  });

  it("should Assign team leader failed, when student doesn't append to class", () => {
    let clazz = new Class(2);
    let student = new Student("Tom", 21, clazz);
    let result = clazz.assignLeader(student);
    expect(result).toBe("It is not one of us.");
  });

  it("should call teacher's addended member event, when a student is appended to teach" +
      "er's own classes",
  () => {
    let clazz = new Class(2);
    let student = new Student("Jerry", 21, clazz);
    let teacher = new Teacher("Tom", 21, [clazz]);
    spyOn(teacher, 'notifyStudentAppended');
    clazz.appendMember(student);
    expect(teacher.notifyStudentAppended).toHaveBeenCalledWith("Jerry has joined Class 2");
  });

  it("should call teacher's assign class leader event, when a student is assigned to b" +
      "e a leader in teacher's own classes",
  () => {
    let clazz = new Class(2);
    let student = new Student("Jerry", 21, clazz);
    let teacher = new Teacher("Tom", 21, [clazz]);
    spyOn(teacher, 'notifyLeaderAssigned');
    spyOn(teacher, 'notifyStudentAppended');
    clazz.appendMember(student);
    clazz.assignLeader(student);
    expect(teacher.notifyLeaderAssigned).toHaveBeenCalledWith("Jerry become Leader of Class 2")
  });
});
