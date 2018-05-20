const Person = require('../../main/practice-1/person');
const Student = require('../../main/practice-1/student');
const Worker = require('../../main/practice-1/worker');

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
    it("should have field name, age and class number", () => {
      let student = new Student("Tom", 21, 2);
      expect(student.name).toBe("Tom");
      expect(student.age).toBe(21);
      expect(student.klass).toBe(2);

    });

    it("should overwrite Person introduce, introduce student with class", () => {
      let student = new Student("Tom", 21, 2);
      let introduce = student.introduce();

      expect(introduce).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

    });

  });

  describe("Worker", () => {

    it("should have field name, age and klass", () => {
      let worker = new Worker("Tom", 21, 2);
      expect(worker.name).toBe("Tom");
      expect(worker.age).toBe(21);

    });
    it("should overwrite Person introduce, introduce with no field", () => {
      let worker = new Worker("Tom", 21);

      let introduce = worker.introduce();

      expect(introduce).toBe("My name is Tom. I am 21 years old. I am a Worker. I have a job.");

    });

  });
});