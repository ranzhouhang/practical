const Person = require('../../main/practice-2/person');
const Student = require('../../main/practice-2/student');
const Teacher = require('../../main/practice-2/teacher');
const Class = require('../../main/practice-2/class');

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
      let introduce = student.introduce();

      expect(introduce).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

    });

    it("should introduce student is a leader, when class assign this student to be a leader",
    () => {
      let clazz = new Class(2);
      let student = new Student("Tom", 21, clazz);
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

    it("should overwrite Person introduce and show all class this teacher teaches, when init two classed to this teacher",
    () => {
      let clazz1 = new Class(2);
      let clazz2 = new Class(3);
      let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

      let introduce = teacher.introduce();

      expect(introduce).toBe("My name is Joun. I am 21 years old. I am a Teacher. I teach Class 2,3.");

    });

    it("should show no class this teacher teacher, when there is no class assgin to this teacher",
    () => {
      let teacher = new Teacher("Joun", 21, []);

      let introduce = teacher.introduce();

      expect(introduce).toBe("My name is Joun. I am 21 years old. I am a Teacher. I teach No Class.");

    });

  });
});