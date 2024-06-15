/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      if (!(this.notes.hasOwnProperty(code))) {
        this.notes[code] = [];
      }
      this.notes[code].push(note);
    },

    updateNote(code, note) {
      this.notes[code] = [note];
    },

    getAllNotes(code) {
      return this.notes[code].join('; ');
    },

    viewNotes() {
      for (let courseObj of this.courses) {
        if (this.notes.hasOwnProperty(courseObj.code)) {
          console.log(`${courseObj.name}: ${this.getAllNotes(courseObj.code)}`);
        }
      }
    }
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advanced Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"