const students = [
    { id: 1, name: "João", average: 6, birth: 2005 },
    { id: 2, name: "Thiago", average: 6, birth: 2002 },
    { id: 3, name: "Jonas", average: 5, birth: 1998 },
    { id: 4, name: "Rosa", average: 9, birth: 2004 },
    { id: 5, name: "Amanda", average: 8, birth: 1992 },
    { id: 6, name: "Pedro", average: 7, birth: 1998 },
    { id: 7, name: "Pedro", average: 7, birth: 2000 },
  ];

    console.log(students.find((value) => {
        return value.id === 6;
    }));

    console.log(students.find((value) => {
        return value.name === "Jonas";
    }));

    console.log(students.find((value) => {
        return value.name === "Jonas" || value.name === "Rosa";
    }));

    console.log(students.find((value) => {
        return value.name === "Pedro" && value.birth > 1998;
    }));

    console.log(students.find(value => value.average >= 7));
    console.log(students.filter((value) => value.average >= 7));
    console.table(students.filter((value) => value.average >= 7));
    console.table(students.filter((value) => value.birth >= 2000));
    console.table(students.filter((value) => value.name.includes("d")));

    const currentYear = new Date().getFullYear();
    console.log(students.filter((value) => currentYear - value.birth <= 18));
    console.log(students);

    console.log(students.filter(value => value.name.includes("Pe")));