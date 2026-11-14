(() => {
  const languageKey = "pystart-language";
  let language = localStorage.getItem(languageKey) || "ru";
  const labels = {
    ru: {
      home:"Главная", textbook:"Учебник", start:"Начать обучение", all:"Все темы", todo:"Не пройдены", done:"Завершены",
      search:"Найти тему...", program:"ПРОГРАММА КУРСА", completed:"завершено", theory:"Простыми словами",
      life:"ПРИМЕР ИЗ ЖИЗНИ", code:"Посмотри на код", codeHint:"Пример можно скопировать в редактор Python и запустить. Попробуй изменить значения, чтобы увидеть разницу.",
      how:"Как это работает?", practice:"Попробуй сам", tasks:"Практические задания", taskHint:"Сделай задания по порядку. Если что-то не получается — вернись к примеру, поменяй его и попробуй ещё раз.",
      quiz:"Проверь себя", check:"Проверить ответ", next:"Следующая тема", allTopics:"Все темы", progress:"Твой прогресс",
      markDone:"Отметить как пройденную", markTodo:"Отметить непройденным", lessonDone:"Урок пройден", selfPace:"В своём темпе",
      inLesson:"В этом уроке", slow:"Не спеши", theoryLink:"Теория", exampleLink:"Пример кода", practiceLink:"Практика и тест",
      completedTopics:"тем завершено", copy:"Копировать", copied:"Скопировано", exampleTitle:"Дополнительные примеры",
      deeper:"Разберём подробнее", empty:"Темы не найдены", emptyHint:"Попробуй изменить запрос или фильтр.",
      groups:"ТВОЙ МАРШРУТ", overall:"Общий прогресс", first:"Начни с первого урока", level:"С нуля",
      heroTitle:"Твой путь в Python начинается здесь.", heroText:"Без сложных слов и скучных лекций. Разбирайся на понятных примерах из жизни, смотри, как работает код, и закрепляй знания практикой.",
      learnAt:"Учись в своём темпе", stats1:"последовательных тем", stats2:"с разбором каждой строки", stats3:"задания после уроков", stats4:"прогресс сохраняется в браузере",
      courseTitle:"От первой строки до своих проектов", courseText:"Выбирай следующую тему или двигайся по порядку.",
      tip:"Совет начинающему", tipText:"Не пытайся запомнить всё сразу. Запускай примеры, меняй значения и смотри, что произойдёт. Так программирование становится понятнее.",
      finish:"Курс завершён — отличная работа!", completedCount:"Пройдено тем:"
    },
    en: {
      home:"Home", textbook:"Textbook", start:"Start learning", all:"All topics", todo:"Not started", done:"Completed",
      search:"Search topics...", program:"COURSE PROGRAM", completed:"completed", theory:"In simple terms",
      life:"REAL-LIFE EXAMPLE", code:"Let's look at the code", codeHint:"Copy this example into a Python editor and run it. Try changing the values to see what happens.",
      how:"How does it work?", practice:"Try it yourself", tasks:"Practice tasks", taskHint:"Complete the tasks in order. If something does not work, return to the example, change it, and try again.",
      quiz:"Check your knowledge", check:"Check answer", next:"Next topic", allTopics:"All topics", progress:"Your progress",
      markDone:"Mark as completed", markTodo:"Mark as incomplete", lessonDone:"Lesson completed", selfPace:"Learn at your own pace",
      inLesson:"In this lesson", slow:"Take your time", theoryLink:"Theory", exampleLink:"Code example", practiceLink:"Practice and quiz",
      completedTopics:"topics completed", copy:"Copy", copied:"Copied", exampleTitle:"More examples",
      deeper:"Let's explore further", empty:"No topics found", emptyHint:"Try changing your search or filter.",
      groups:"YOUR LEARNING PATH", overall:"Overall progress", first:"Start with the first lesson", level:"Beginner",
      heroTitle:"Your Python journey starts here.", heroText:"No complicated language or boring lectures. Learn through clear real-life examples, see how code works, and reinforce your knowledge with practice.",
      learnAt:"Learn at your own pace", stats1:"structured topics", stats2:"with line-by-line explanations", stats3:"practice after each lesson", stats4:"progress saved in your browser",
      courseTitle:"From your first line to your own projects", courseText:"Choose your next topic or follow the suggested order.",
      tip:"A tip for beginners", tipText:"Do not try to memorise everything at once. Run examples, change values, and observe the result. This makes programming easier to understand.",
      finish:"Course completed — great work!", completedCount:"Topics completed:"
    }
  };

  const lessonEN = {
    1:["Getting to know Python","Learn what code is, how programs work, and where Python is used.","A program is a sequence of instructions executed by a computer.","Python is a programming language used for websites, bots, games, automation, and data tools. Code is a set of instructions written in a human-readable form. The Python interpreter executes these instructions from top to bottom.","Think of a sandwich recipe: take bread, add cheese, then cover it with another slice. A program works in a similar way: the computer follows precise steps in order.","The first command prints “Hello, world!”, and the second prints another line.","Print your name and the sentence “I am learning to code”.","What does a program do?","A program executes written instructions."],
    2:["print() and input()","Display messages and get answers from the user.","print() displays information, while input() waits for the user to type an answer.","print() outputs data to the screen. input() displays an optional prompt and waits for keyboard input. The entered value is returned as a string, so save it in a variable if you need it later.","Imagine a café counter: the display shows the order total, while the cashier asks for a name. These are similar to print() and input().","input() gets the answer and stores it in name. print() displays a greeting and the value of name.","Ask the user for their favourite colour and print the answer.","What does input() return?","input() returns the text entered by the user."],
    3:["Variables","Store names, scores, prices, and other values under clear names.","A variable is a name that refers to a value stored by the program.","Create a variable by writing a name, the assignment operator =, and a value. Use descriptive names such as player_name instead of x. Python is case-sensitive: score and Score are different names.","Imagine labelled moving boxes: one says “Books”, another says “Clothes”. A variable is like a labelled box for a value.","player_name stores text, score stores a number, and is_playing stores a Boolean value. The score is then increased by 10.","Create variables for a character name, health, and score.","How do you increase score by one?","The expression score = score + 1 calculates a new value and stores it back in score."],
    4:["Data types and conversion","Understand strings, integers, floats, and Boolean values.","Different data types behave differently; conversion changes a value from one type to another.","str is text, int is an integer, float is a decimal number, and bool is True or False. input() returns a string, so use int() or float() before performing numeric calculations. Invalid text cannot always be converted.","The text “15” on a label looks like a number, but it may be stored as text. Convert it before doing arithmetic.","The input is first stored as text. int() converts it to an integer, allowing us to add 1.","Ask for two numbers and print their sum.","Why do we often use int(input()) for age?","input() returns text, so convert it before doing numeric calculations."],
    5:["Operators and calculations","Perform calculations, compare values, and combine logical checks.","Operators let a program calculate, compare, and make decisions.","Arithmetic: +, -, *, /, //, %, **. Comparisons: ==, !=, >, <, >=, <=. Logical operators: and, or, not. A single = assigns a value; == compares two values.","Two items cost 100 each. The * operator calculates the total, while a comparison checks whether the customer has enough money.","price * quantity calculates the total. % returns the remainder. The comparison produces True or False.","Calculate a purchase total after a 10% discount.","What does == do?","The == operator compares two values for equality."],
    6:["Strings and formatting","Combine text, access characters, and insert values into messages.","A string is a sequence of characters, such as a name or a message.","Strings are written in quotes. Indexing starts at 0: word[0] is the first character. A slice such as word[1:4] extracts part of a string. Useful methods include lower(), upper(), strip(), and replace(). f-strings insert values inside curly braces.","A chat message is made of characters. You may need to clean extra spaces, change letter case, or insert a score into a sentence.","strip() removes spaces at the edges, upper() converts letters to uppercase, and an f-string inserts variable values.","Ask for a name and display it in uppercase.","Which index belongs to the first character?","String indexing starts at zero."],
    7:["Lists","Store multiple values together: products, scores, names, or tasks.","A list is an ordered collection that can be changed.","Create a list with square brackets. Indexes start at 0. append() adds an item, remove() removes a matching value, pop() removes an item by index, and len() returns the number of items. Lists can be processed with loops.","A shopping list stores several products in one place. You can add bread, remove milk, or check the first item.","append() adds an item, shopping[0] gets the first item, len() counts items, and remove() deletes a matching value.","Create a list of five favourite games, then add and remove an item.","What does append() do?","append(value) adds a value to the end of a list."],
    8:["Tuples, sets, and dictionaries","Choose the right way to store related data.","A tuple is an ordered sequence, a set stores unique values, and a dictionary stores key-value pairs.","Tuples use parentheses, for example point = (10, 20). Sets contain unique values. Dictionaries use key-value pairs, such as user = {'name': 'Ann', 'age': 16}. Access a value with user['name'].","A tuple is like coordinates, a set is like a guest list without duplicates, and a dictionary is like a contact card with labelled fields.","A repeated colour appears only once in a set. A dictionary value is accessed by its key and can be updated.","Create a character dictionary with name, level, and health.","How do you get the name from a dictionary?","Use the key in square brackets: user['name']."],
    9:["if / elif / else conditions","Make your program choose an action depending on a situation.","A condition runs different code depending on whether an expression is true or false.","if checks the first condition. elif checks another option if earlier conditions were false. else runs when none of the conditions matched. Add a colon and indent the code inside each block.","If it rains, take an umbrella; otherwise, go outside without one. A program can make a similar choice.","Python checks conditions from top to bottom and runs the first matching block.","Check whether a number is positive, negative, or zero.","What is else used for?","else runs when none of the previous conditions matched."],
    10:["for and while loops","Repeat actions without copying the same lines of code.","A loop repeats a block of code a number of times or while a condition remains true.","for iterates over a sequence or range(). range(5) produces 0 through 4. while repeats while its condition is true. Make sure a while loop can eventually stop. break exits a loop; continue skips to the next iteration.","If you need to hand out notebooks to 20 students, you do not need to write the same instruction 20 times. A loop repeats the action.","for processes each item in a sequence. while keeps repeating while its condition is true.","Print the numbers from 1 to 10 using a loop.","What can cause an infinite while loop?","A condition that never becomes false and no exit instruction."],
    11:["Functions","Group reusable instructions and give them meaningful names.","A function is a named block of code that performs a task.","Define a function with def. Parameters receive input values. return sends a result back to the place where the function was called. A function without return returns None. Keep functions focused on one task.","A recipe card describes how to make a dish. You can follow the same recipe more than once with different ingredients.","The function greets the name passed as an argument. return sends the calculated value back to the caller.","Write a function that calculates the area of a rectangle.","What does return do?","return sends a value back from a function."],
    12:["Errors and try / except","Handle incorrect input and prevent expected errors from stopping a program.","Exceptions are events that interrupt the normal flow of a program.","try contains code that may raise an exception. except handles a matching error. Use specific exception types such as ValueError instead of catching every error. else runs when no exception occurs; finally runs whether an exception occurred or not.","A form may contain an incorrect age. Instead of crashing, the program can explain what needs to be corrected.","The program tries to convert the input to an integer. If the input is invalid, ValueError is handled and a helpful message is shown.","Ask for a number and handle invalid input.","Which block handles an exception?","The except block handles a matching exception."],
    13:["Working with files","Save information so it remains available after the program closes.","Files let a program store and retrieve information.","open() opens a file. Use with open(...) so the file is closed automatically. Modes include 'r' for reading, 'w' for writing, and 'a' for appending. Choose an encoding such as utf-8 for text files.","A notebook keeps information after a lesson ends. A file lets a program do something similar.","The with block opens notes.txt, writes text, and closes the file automatically when the block ends.","Save a short list of tasks to a text file.","What does mode 'a' do?","It appends new content to the end of a file."],
    14:["Modules and libraries","Reuse code written in separate files and ready-made packages.","A module is a Python file that can be imported into another program.","import loads a module. You can import the whole module or selected names with from ... import .... The standard library includes modules such as random, math, and datetime. Third-party packages can be installed separately.","A toolbox contains ready-made tools. A library gives your program useful functions without having to write everything yourself.","random.randint(1, 6) returns a random integer from 1 to 6, including both endpoints.","Use the random module to choose a random item from a list.","Why do we import modules?","To reuse code and functionality from other modules."],
    15:["Algorithms and searching","Plan clear steps and find information in collections.","An algorithm is a sequence of steps for solving a problem.","Describe the input, expected output, and steps before coding. Linear search checks items one by one. Sorting arranges data. sorted() returns a new sorted list, while sort() changes the original list. The in operator checks membership.","Finding a contact in a small notebook may mean checking entries one by one. A sorted list can make some searches more efficient.","The loop checks each score. When it finds the target, break stops the search. sorted() returns a new sorted list.","Find the largest number in a list without using max().","What is an algorithm?","An algorithm is a sequence of steps for solving a problem."],
    16:["Classes and objects","Create your own data types for players, products, and characters.","A class describes structure and behaviour; an object is one instance of that class.","class declares a class. Calling the class creates an object. __init__ sets initial data, self refers to the current object, attributes store state, and methods describe behaviour.","A car blueprint describes properties and actions. Many cars can be built from the same blueprint with different values.","Player is the class. hero is an object with a name and health. take_damage() changes the object's health.","Create a Pet class with a name and animal type.","What is an object?","An object is a concrete instance of a class."],
    17:["Inheritance and OOP principles","Reuse shared code and organise responsibilities between objects.","Inheritance lets a new class extend an existing class.","A child class can inherit attributes and methods from a parent class. super() calls a parent implementation. Encapsulation keeps data and operations together and controls how an object changes its state. Use inheritance when there is a genuine shared relationship.","Employees may share a name and department, while designers and developers have different tasks. Shared properties can live in a base class.","Wizard inherits name and speak() from Character and adds its own cast_spell() method.","Create an Animal base class and a Cat child class.","What does inheritance allow?","A child class can reuse and extend a base class."],
    18:["Final project","Combine your knowledge in a small working program.","A project connects several topics into one useful program.","Start with a small version. Make the main scenario work first, then add improvements. Use functions to organise code, validate input, store data in lists or dictionaries, and use files for persistence. Split long code into smaller parts when it becomes difficult to understand.","A to-do list can show a menu, accept a choice, add tasks, mark them complete, and save the list to a file.","The list stores tasks, the function displays them, the loop repeats the menu, and conditions select an action.","Add a way to delete a task and save the list to a file.","What is the best way to start a project?","Start with a small working version and a clear main scenario."]
  };

  const extra = [
    ["Python выполняет код сверху вниз. Комментарии начинаются с # и не выполняются. Отступы важны: они показывают, какие строки относятся к одному блоку.","# Это комментарий\nprint('Первый запуск')\nprint('Второй шаг')"],
    ["print() умеет выводить несколько значений. Параметр sep меняет разделитель, а end — окончание вывода.","print('Python', 'это', 'интересно', sep=' | ')\nprint('Загрузка', end='...')\nprint('готово!')"],
    ["Переменная может получить новое значение. Операторы +=, -= и *= сокращают частые операции изменения переменной.","coins = 10\ncoins += 5\ncoins -= 2\nprint(coins)  # 13"],
    ["Проверь тип значения с помощью type(). bool() преобразует значение в логическое, но помни: пустая строка и ноль считаются False.","value = '25'\nprint(type(value))\nnumber = int(value)\nprint(type(number))"],
    ["Оператор // выполняет целочисленное деление, а % возвращает остаток. Вместе они помогают проверять чётность числа.","number = 14\nprint(number // 3)  # 4\nprint(number % 2 == 0)  # True"],
    ["Строки неизменяемы: методы создают новую строку, а не меняют исходную. Отрицательный индекс -1 обозначает последний символ.","word = 'programming'\nprint(word[-1])\nprint(word[0:4])\nprint(word.replace('pro', 'Py'))"],
    ["Списки могут хранить разные типы данных, но в одном проекте часто удобнее придерживаться единого типа. Срез list[start:stop] берёт часть списка.","scores = [10, 20, 30, 40]\nprint(scores[1:3])\nscores[0] = 15\nprint(scores)"],
    ["Кортеж подходит для набора значений, который не планируется менять. Множества удобно сравнивать операциями объединения | и пересечения &.","a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)"],
    ["Условия могут содержать несколько проверок. and требует истинности обеих частей, or — хотя бы одной. Сравнения можно объединять скобками.","age = 15\nhas_ticket = True\nif age >= 12 and has_ticket:\n    print('Вход разрешён')"],
    ["range(start, stop, step) задаёт начало, конец (не включая его) и шаг. break останавливает цикл, continue пропускает текущий шаг.","for number in range(2, 11, 2):\n    print(number)\n\nfor number in range(5):\n    if number == 2:\n        continue\n    print(number)"],
    ["Параметрам можно задавать значения по умолчанию. Это позволяет вызывать функцию, не передавая каждый аргумент.","def greet(name, greeting='Привет'):\n    print(f'{greeting}, {name}!')\n\ngreet('Маша')\ngreet('Alex', 'Hello')"],
    ["Обрабатывай только те ошибки, которые ожидаешь. Например, ValueError возникает, если текст нельзя преобразовать в число.","try:\n    count = int(input('Количество: '))\nexcept ValueError:\n    print('Введи целое число')"],
    ["Метод read() читает файл целиком, readline() — одну строку, а readlines() возвращает список строк. Для больших файлов удобнее читать построчно.","with open('notes.txt', 'r', encoding='utf-8') as file:\n    for line in file:\n        print(line.strip())"],
    ["Псевдоним as помогает использовать короткое имя модуля. Функция из модуля вызывается через точку.","import math as m\nprint(m.sqrt(81))\nprint(m.ceil(4.2))"],
    ["Сложность алгоритма описывает, как меняется объём работы при росте данных. Линейный поиск может проверить все n элементов, если нужного значения нет в начале.","numbers = [8, 3, 12, 5]\nsmallest = numbers[0]\nfor number in numbers:\n    if number < smallest:\n        smallest = number\nprint(smallest)"],
    ["У каждого объекта есть собственные атрибуты. Изменение hero.health не меняет здоровье другого объекта Player.","class Player:\n    def __init__(self, name):\n        self.name = name\n        self.level = 1\n\nfirst = Player('Mira')\nsecond = Player('Leo')\nfirst.level = 2\nprint(first.level, second.level)"],
    ["Переопределение метода позволяет дочернему классу изменить поведение родителя. super() помогает при этом сохранить общую часть логики.","class Animal:\n    def speak(self):\n        print('Звук')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Гав!')\n\nDog().speak()"],
    ["Перед расширением проекта проверь три вещи: работает ли основной сценарий, корректно ли обрабатывается ввод и сохраняются ли данные. Добавляй функции постепенно.","tasks = ['Выучить Python', 'Создать игру']\nfor index, task in enumerate(tasks, start=1):\n    print(f'{index}. {task}')"]
  ];
  const extraEN = [
    ["Python executes instructions from top to bottom. Comments start with # and are ignored. Indentation groups statements into blocks.","# This is a comment\nprint('First run')\nprint('Second step')"],
    ["print() can display multiple values. The sep parameter changes the separator, while end changes what is printed at the end.","print('Python', 'is', 'fun', sep=' | ')\nprint('Loading', end='...')\nprint('done!')"],
    ["A variable can be assigned a new value. Operators such as +=, -=, and *= are shortcuts for common updates.","coins = 10\ncoins += 5\ncoins -= 2\nprint(coins)  # 13"],
    ["Use type() to inspect a value. bool() converts a value to True or False. Empty strings and zero are considered False.","value = '25'\nprint(type(value))\nnumber = int(value)\nprint(type(number))"],
    ["// performs floor division and % returns the remainder. Together they can help you check whether a number is even.","number = 14\nprint(number // 3)  # 4\nprint(number % 2 == 0)  # True"],
    ["Strings are immutable: string methods return a new string instead of changing the original. Index -1 refers to the last character.","word = 'programming'\nprint(word[-1])\nprint(word[0:4])\nprint(word.replace('pro', 'Py'))"],
    ["Lists can contain different data types, but keeping similar values together often makes a program easier to understand. A slice selects part of a list.","scores = [10, 20, 30, 40]\nprint(scores[1:3])\nscores[0] = 15\nprint(scores)"],
    ["Tuples are useful for values that should not change. Sets support union | and intersection & operations.","a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)"],
    ["Conditions can combine several checks. and requires both sides to be true; or requires at least one side to be true.","age = 15\nhas_ticket = True\nif age >= 12 and has_ticket:\n    print('Entry allowed')"],
    ["range(start, stop, step) defines the beginning, exclusive end, and step. break stops a loop; continue skips to the next iteration.","for number in range(2, 11, 2):\n    print(number)\n\nfor number in range(5):\n    if number == 2:\n        continue\n    print(number)"],
    ["Parameters can have default values. This lets you call a function without providing every argument.","def greet(name, greeting='Hello'):\n    print(f'{greeting}, {name}!')\n\ngreet('Masha')\ngreet('Alex', 'Hi')"],
    ["Handle only errors you expect. ValueError, for example, occurs when text cannot be converted to a number.","try:\n    count = int(input('Count: '))\nexcept ValueError:\n    print('Enter a whole number')"],
    ["read() reads a whole file, readline() reads one line, and readlines() returns a list of lines. Iterating over a file is useful for larger files.","with open('notes.txt', 'r', encoding='utf-8') as file:\n    for line in file:\n        print(line.strip())"],
    ["The as keyword creates a shorter alias for a module. Functions and values inside a module are accessed with a dot.","import math as m\nprint(m.sqrt(81))\nprint(m.ceil(4.2))"],
    ["Algorithmic complexity describes how the amount of work grows as the input grows. A linear search may inspect all n items.","numbers = [8, 3, 12, 5]\nsmallest = numbers[0]\nfor number in numbers:\n    if number < smallest:\n        smallest = number\nprint(smallest)"],
    ["Each object has its own attributes. Changing hero.health does not change the health of another Player object.","class Player:\n    def __init__(self, name):\n        self.name = name\n        self.level = 1\n\nfirst = Player('Mira')\nsecond = Player('Leo')\nfirst.level = 2\nprint(first.level, second.level)"],
    ["Method overriding lets a child class change inherited behaviour. super() can preserve the shared part of the parent implementation.","class Animal:\n    def speak(self):\n        print('Sound')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Woof!')\n\nDog().speak()"],
    ["Before expanding a project, check that its main scenario works, input is validated, and data is saved. Add features one at a time.","tasks = ['Learn Python', 'Build a game']\nfor index, task in enumerate(tasks, start=1):\n    print(f'{index}. {task}')"]
  ];

  function setText(selector, value) { const el = document.querySelector(selector); if (el && value) el.textContent = value; }
  function translateStatic() {
    const t = labels[language];
    document.documentElement.lang = language;
    setText(".breadcrumbs span", t.textbook);
    setText("#crumb-current", t.home);
    setText(".sidebar-label", t.groups);
    setText(".progress-row span", t.overall);
    setText("#progress-caption", t.first);
    setText(".level-pill", t.level);
    setText("#start-learning", t.start);
    setText(".hero-copy > p", t.heroText);
    setText(".hero-note", t.learnAt);
    setText(".section-heading .eyebrow", t.program);
    setText(".section-heading h2", t.courseTitle);
    setText(".section-heading p", t.courseText);
    setText("#lesson-search", "");
    const search = document.querySelector("#lesson-search");
    if (search) search.placeholder = t.search;
    document.querySelectorAll(".filter-tab").forEach((b,i)=>b.textContent=[t.all,t.todo,t.done][i] || b.textContent);
    setText(".bottom-banner b", t.tip);
    setText(".bottom-banner p", t.tipText);
    setText(".sidebar-bottom span:last-child", t.learnAt);
    setText(".breadcrumbs b", location.hash.startsWith("#lesson-") ? (lessons[Number(location.hash.split("-")[1])-1]?.title || t.home) : t.home);
    const count = document.querySelector(".course-count");
    if (count) count.lastChild.textContent = " / " + t.completed;
    const hero = document.querySelector(".hero h1");
    if (hero) hero.innerHTML = language === "en" ? 'Your Python journey<br><span class="highlight">starts here</span><span class="hero-period">.</span>' : 'Твой путь в<br><span class="highlight">Python</span> начинается здесь<span class="hero-period">.</span>';
    const eyebrow = document.querySelector(".hero .eyebrow");
    if (eyebrow) eyebrow.lastChild.textContent = language === "en" ? " PRACTICAL COURSE · 18 TOPICS" : " ПРАКТИЧЕСКИЙ КУРС · 18 ТЕМ";
    document.querySelectorAll(".stat-card").forEach((card,i)=>{const span=card.querySelector("span");if(span)span.textContent=[t.stats1,t.stats2,t.stats3,t.stats4][i]||span.textContent;});
    const langSelect = document.querySelector("#language-select");
    if (langSelect) langSelect.value = language;
  }

  const originalRenderNav = renderNav;
  renderNav = function(activeId=null) {
    originalRenderNav(activeId);
    if (language === "en") {
      document.querySelectorAll(".nav-group").forEach(el=>{el.textContent=el.textContent.replace("СТАРТ","START").replace("ОСНОВЫ","FUNDAMENTALS").replace("ДАННЫЕ","DATA").replace("КОЛЛЕКЦИИ","COLLECTIONS").replace("ЛОГИКА","LOGIC").replace("ФУНКЦИИ","FUNCTIONS").replace("ФАЙЛЫ","FILES").replace("ИНСТРУМЕНТЫ","TOOLS").replace("АЛГОРИТМЫ","ALGORITHMS").replace("ОБЪЕКТНОЕ ПРОГРАММИРОВАНИЕ","OBJECT-ORIENTED PROGRAMMING").replace("ФИНИШ","FINAL PROJECT");});
      document.querySelectorAll(".nav-item").forEach(el=>{const id=Number(el.dataset.open);if(lessonEN[id])el.querySelector("span:nth-child(2)").textContent=lessonEN[id][0];});
    }
  };

  const originalRenderGrid = renderGrid;
  renderGrid = function() {
    originalRenderGrid();
    if (language === "en") {
      document.querySelectorAll(".lesson-card").forEach(card=>{
        const id=Number(card.querySelector("[data-open]")?.dataset.open), data=lessonEN[id];
        if(!data)return;
        card.querySelector("h3").textContent=data[0];
        card.querySelector("p").textContent=data[1];
        card.querySelector(".card-open").lastChild.textContent=completed.has(id)?" Review":" Study ";
      });
      const empty=document.querySelector(".empty-state");if(empty){empty.querySelector("b").textContent=labels.en.empty;empty.querySelector("span").textContent=labels.en.emptyHint;}
    }
  };

  const originalRenderLesson = renderLesson;
  renderLesson = function(id) {
    originalRenderLesson(id);
    const lesson=lessons.find(x=>x.id===Number(id));
    if(!lesson)return;
    if(language==="en"){
      const d=lessonEN[lesson.id];
      if(d){
        lesson.title=d[0];lesson.short=d[1];lesson.summary=d[2];lesson.theory=d[3];lesson.life=d[4];lesson.explain=d[5];lesson.tasks=[d[6], "Change the example and observe the output.", "Create a small program using this topic."];lesson.question=d[7];lesson.why=d[8];
        lesson.options=lesson.options.map((_,i)=>i===lesson.answer?d[8]:["Choose another option.","This is not the correct explanation.","Try again."][i%3]);
      }
      const t=labels.en;
      const head=lessonView.querySelector(".lesson-head");
      if(head){
        head.querySelector(".back-link").lastChild.textContent=" "+t.allTopics;
        head.querySelector(".lesson-kicker").lastChild.textContent=" TOPIC "+String(lesson.id).padStart(2,"0")+" · "+(lesson.id===18?"FINAL PROJECT":"PYTHON");
        head.querySelector(".lesson-head-meta span:nth-child(2)").lastChild.textContent=" Level: "+(lesson.level==="Средний"?"Intermediate":"Beginner");
        head.querySelector(".lesson-head-meta span:nth-child(3)").lastChild.textContent=" "+(completed.has(lesson.id)?t.lessonDone:t.selfPace);
      }
      const headings=lessonView.querySelectorAll(".content-block h2");
      if(headings[0])headings[0].lastChild.textContent=" "+t.theory;
      if(headings[1])headings[1].lastChild.textContent=" "+t.code;
      if(headings[2])headings[2].lastChild.textContent=" "+t.practice;
      const blocks=lessonView.querySelectorAll(".content-block");
      if(blocks[1]?.querySelector("p"))blocks[1].querySelector("p").textContent=t.codeHint;
      if(blocks[1]?.querySelector(".tip-card b"))blocks[1].querySelector(".tip-card b").textContent=t.how;
      if(blocks[2]?.querySelector("h3"))blocks[2].querySelector("h3").lastChild.textContent=" "+t.tasks;
      if(blocks[2]?.querySelector(".exercise-card > p"))blocks[2].querySelector(".exercise-card > p").textContent=t.taskHint;
      if(blocks[2]?.querySelector(".quiz h3"))blocks[2].querySelector(".quiz h3").lastChild.textContent=" "+t.quiz;
      const submit=lessonView.querySelector(".quiz-submit");if(submit)submit.lastChild.textContent=" "+t.check;
      const prev=lessonView.querySelector(".lesson-bottom-nav button:first-child");if(prev)prev.textContent="← Previous topic";
      const next=lessonView.querySelector(".lesson-bottom-nav button:last-child");if(next)next.textContent=lesson.id===18?"Review the course →":t.next+" →";
      const aside=lessonView.querySelectorAll(".aside-card");
      if(aside[0]){aside[0].querySelector("h3").textContent=t.progress;aside[0].querySelector("small").textContent=completed.size+" / "+lessons.length+" "+t.completedTopics;aside[0].querySelector("button").textContent=completed.has(lesson.id)?t.markTodo:t.markDone;}
      if(aside[1]){aside[1].querySelector("h3").textContent=t.inLesson;aside[1].querySelectorAll("a")[0].lastChild.textContent=" "+t.theoryLink;aside[1].querySelectorAll("a")[1].lastChild.textContent=" "+t.exampleLink;aside[1].querySelectorAll("a")[2].lastChild.textContent=" "+t.practiceLink;}
      if(aside[2]){aside[2].querySelector("h3").textContent=t.slow;aside[2].querySelector("small").textContent="The best way to learn is to run code, change it, and observe the result. Mistakes are part of learning.";}
      const feedback=lessonView.querySelector("#quiz-feedback");
      lessonView.querySelector("#quiz-form").addEventListener("submit",()=>{setTimeout(()=>{if(feedback && feedback.textContent){feedback.textContent=feedback.textContent.replace("Верно!","Correct!").replace("Пока не совсем. Подумай ещё раз. Подсказка:","Not quite. Try again. Hint:").replace("Выбери один ответ, затем нажми «Проверить ответ».","Choose an answer, then click “Check answer”.");}},0);});
    }
    const add=language==="en"?extraEN[lesson.id-1]:extra[lesson.id-1];
    const t=labels[language];
    const content=lessonView.querySelector(".lesson-content");
    if(content && add){
      const section=document.createElement("section");
      section.className="content-block extra-learning";
      section.innerHTML='<h2>'+t.deeper+'</h2><p>'+add[0]+'</p><div class="code-block"><div class="code-block-head"><span>example.py</span></div><pre><code></code></pre></div>';
      section.querySelector("code").textContent=add[1];
      content.insertBefore(section,content.querySelector(".lesson-bottom-nav"));
      const theoryBlock=content.querySelector(".content-block");
      if(theoryBlock){const p=document.createElement("p");p.className="extra-theory";p.textContent=language==="en"?"Key idea: understand not only what the code does, but why each step is needed.": "Важно: старайся понимать не только, что делает код, но и зачем нужна каждая команда.";theoryBlock.insertBefore(p,theoryBlock.querySelector(".life-card"));}
    }
    const copyBtn=lessonView.querySelector(".copy-btn");
    if(copyBtn && language==="en")copyBtn.innerHTML="Copy";
    translateStatic();
  };

  function applyLanguage(){
    language=document.querySelector("#language-select")?.value || language;
    localStorage.setItem(languageKey,language);
    translateStatic();
    if(location.hash.match(/^#lesson-\d+$/))renderLesson(Number(location.hash.split("-")[1]));
    else {renderNav();renderGrid();}
  }

  const topActions=document.querySelector(".top-actions");
  if(topActions && !document.querySelector("#language-select")){
    const select=document.createElement("select");
    select.id="language-select";select.className="language-select";select.setAttribute("aria-label","Interface language");
    select.innerHTML='<option value="ru">RU</option><option value="en">EN</option>';
    select.value=language;
    topActions.insertBefore(select,topActions.firstChild);
    select.addEventListener("change",applyLanguage);
  }
  const style=document.createElement("style");
  style.textContent='.language-select{height:36px;padding:0 10px;border:1px solid var(--border);border-radius:10px;background:var(--panel);color:var(--text);font:700 11px Manrope,sans-serif;cursor:pointer}.extra-learning{border:1px solid var(--border);border-radius:16px;padding:20px;background:var(--panel)}.extra-learning pre{white-space:pre-wrap;overflow-x:auto}.extra-theory{padding:12px 14px;border-left:2px solid var(--green);background:var(--panel2);border-radius:0 10px 10px 0}';
  document.head.appendChild(style);
  translateStatic();
  if(language==="en" && location.hash.match(/^#lesson-\d+$/))renderLesson(Number(location.hash.split("-")[1]));
  else {renderNav();renderGrid();}
})();