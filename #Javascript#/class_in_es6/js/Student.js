export class Student
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }

  set studentName(name)
  {
    this.name = name;
  }

  get studentInfo()
  {
    return `id: ${this.id}, name: ${this.name}`;
  }
}