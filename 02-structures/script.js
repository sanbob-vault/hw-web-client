console.log("\n-----------------------------------\n")

{
    let toCamelCase = (line) => {
        words = line.split("-")

        return words.at(0) + words.slice(1)
        .map(word => word.at(0).toUpperCase() + word.slice(1)).join("");
    }

    console.log("Изменение имени:", toCamelCase("super-cool-repository"))
}

console.log("\n-----------------------------------\n")

{
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    let arr1 = structuredClone(arr);
    let arr2 = arr.slice();

    console.log("Массивы: ", arr, arr1, arr2);
    console.log("Сравнение с исходным: ", arr === arr1, arr === arr2);
    
    arr1.reverse();
    arr2 = arr2.toReversed();

    console.log("Развернутые массивы: ", arr1, arr2);
}

console.log("\n-----------------------------------\n")

{

    let dict = {
        "hi": "привет",
        "how": "как",
        "are": "эм",
        "you": "ты",
        "food": "еда",
        "eat": "кушать"
    }

    let translateFromEngToRus = (line) =>
    {
        line = line.replace("?", "").replace("!", "").replace(".", "").replace(",", "")
        return line.split(" ").map(word => dict[word.toLowerCase()] || "*").join(" ")
    }

    console.log(translateFromEngToRus("Hi, how are you?"))
}

console.log("\n-----------------------------------\n")

{
    const weekDays = {
    1: "Понедельник", 2: "Вторник", 3: "Среда", 4: "Четверг", 5: "Пятница", 6: "Суббота", 7: "Воскресенье",
    
    showToday() {
        let dayNum = new Date().getDay(); 
        dayNum = (dayNum === 0) ? 7 : dayNum; 

        console.log(this[dayNum]); 
        }
    };

    weekDays.showToday();
}

console.log("\n-----------------------------------\n")

{
    const staff = {
        "Менеджер": "Иван",
        "Программист": "тоже Иван"
    };
    
    const staff2 = { ...staff };
    
    staff2["Менеджер"] = "Петр";
    staff2["Программист"] = "все еще Иван";
    
    console.log("Первый персонал:\n", JSON.stringify(staff));
    console.log("Второй персонал:\n", JSON.stringify(staff2));
}

console.log("\n-----------------------------------\n")

{
    let subjects = {
        line: "Математика, История, Физика",

        addSubject(newSubject)
        {
            let arr = this.line.split(", "); 
            if (!arr.includes(newSubject)) 
            {
                arr.push(newSubject);
                this.line = arr.join(", ");  
            }
        },

        removeSubject(subject)
        {
            let arr = this.line.split(", ");
            let index = arr.indexOf(subject);
            if (index !== -1) 
            {
                arr.splice(index, 1);
                this.line = arr.join(", ");
            }
        }
    };

    console.log(subjects.line);
    subjects.addSubject("Химимя");
    subjects.removeSubject("История");
    console.log(subjects.line);
}

console.log("\n-----------------------------------\n")
