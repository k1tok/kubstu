var coursesData = {
    faculty1: {
        courses: ["1 курс", "2 курс","3 курс","4 курс","5 курс"],
        groups: {
            "1 курс": ["22-АО-МА1", "22-АО-МВ1","22-АО-МС1","22-АО-СРП1","22-АО-ТТС1","22-МБ-АП1",
            "22-МБ-КТ1","22-МБ-ТП1","22-МБ-ХТ1","22-МБ-ЭТ1","22-МБ-ЭТ2","22-ММ-АП1",
            "22-ММ-КТ1","22-ММ-КТ2","22-ММ-ТП1","22-ММ-ХТ1","22-М-СЖ1"],
            "2 курс": ["21-АО-МС1", "21-АО-МС2","21-АО-ПЭ4","21-МБ-АП1","21-МБ-КТ1","21-МБ-ТМ1",
            "21-МБ-ТП1","21-МБ-ТП2","21-МБ-ХТ1","21-МБ-ЭТ1","21-ММ-АП1","21-ММ-КТ1","21-ММ-КТ2",
            "21-ММ-ТП1","21-М-НС1","21-М-СЖ1"],
            "3 курс": ["20-АО-МС1","20-АО-МС2","20-АО-ЭТ1","20-МБ-АП1","20-МБ-КТ1","20-МБ-ТМ1",
            "20-МБ-ТП1","20-МБ-ХТ1","20-МБ-ЭТ1","20-М-НС1","20-М-СЖ1"],
            "4 курс": ["19-АО-ММ1","19-АО-МС3","19-МБ-АП1","19-МБ-КТ1","19-МБ-ТМ1","19-МБ-ТП1",
            "19-МБ-ХТ1","19-МБ-ЭТ1","19-М-НС1","19-М-СЖ1"],
            "5 курс": ["18-М-НС1","18-М-СЖ1"]
        }
    },
    faculty2: {
        courses: ["1 курс", "2 курс","3 курс","4 курс","5 курс","6 курс"],
        groups: {
            "1 курс": ["22-АО-АУТ1", "22-АО-ИБ1","22-АО-СА1","22-К-АС1","22-К-АС2","22-КБ-ИБ1","22-КБ-ИБ2",
            "22-КБ-ИБ3","22-КБ-ИВ1","22-КБ-ПИ1","22-КБ-ПИ2","22-КБ-ПР1","22-КБ-ПР2","22-КБ-ПР3","22-КБ-УС1",
            "22-К-КБ1","22-К-КБ2","22-КМ-ИБ1","22-КМ-ИВ1","22-КМ-ПИ1","22-КМ-ПР1","22-КМ-УС1"],
            "2 курс": ["21-АО-ИБ1", "21-АО-ИВТ1","21-АО-УТС1","21-К-АС1","21-К-АС2","21-КБ-ИБ1",
            "21-КБ-ИБ2","21-КБ-ИБ3","21-КБ-ПИ1","21-КБ-ПИ2","21-КБ-ПР1","21-КБ-ПР2","21-КБ-ПР3",
            "21-КБ-УС1","21-К-КБ1","21-К-КБ2","21-КМ-ИБ1","21-КМ-ИВ1","21-КМ-ПИ1","21-КМ-ПР1","21-КМ-УС1"],
            "3 курс": ["20-АО-ИБ1","20-АО-ИВТ1","20-АО-УТС1","20-К-АС1","20-КБ-ИБ1","20-КБ-ИБ2","20-КБ-ИВ1",
            "20-КБ-ПИ1","20-КБ-ПИ2","20-КБ-ПР1","20-КБ-ПР2","20-КБ-УС1","20-К-КБ1"],
            "4 курс": ["19-АО-ИБ1","19-АО-ИВТ1","19-АО-УТС2","19-К-АС1","19-КБ-ИБ1","19-КБ-ИБ2","19-КБ-ИВ1","19-КБ-ПИ1","19-КБ-ПР1","19-КБ-УС1","19-К-КБ1"],
            "5 курс": ["18-К-АС1","18-К-КБ1"],
            "6 курс": ["17-К-КБ1"]
        }
    },
    faculty3: {
        courses: ["1 курс", "2 курс","3 курс","4 курс"],
        groups: {
            "1 курс": ["22-АО-ОТ1", "22-АО-ПС1","22-АО-ПС2","22-АО-ПС3","22-ПБ-ГД1","22-ПБ-ПЖ1","22-ПБ-ПР1","22-ПБ-ПР2",
            "22-ПБ-ПР3","22-ПБ-ПР4","22-ПБ-ТБ1","22-ПБ-ТВ1","22-ПБ-ТО1","22-ПМ-ПЖ1","22-ПМ-ПР1","22-ПМ-ПР2","22-ПМ-ПР3","22-ПМ-ПР4",
            "22-ПМ-СС1","22-ПМ-ТБ1","22-ПМ-ТВ1","22-ПМ-ТО1"],
            "2 курс": ["21-АО-НОЗ1", "21-АО-ПЭ2","21-АО-ПЭ5","21-ПБ-ГД1","21-ПБ-ПЖ1","21-ПБ-ПР1","21-ПБ-ПР2","21-ПБ-ПР3","21-ПБ-ПР4",
            "21-ПБ-СМ1","21-ПБ-ТБ1","21-ПБ-ТВ1","21-ПБ-ТМ1","21-ПБ-ТО1","21-ПБ-УК1","21-ПМ-ПЖ1","21-ПМ-ПР1","21-ПМ-ПР2","21-ПМ-ПР3",
            "21-ПМ-ПР5","21-ПМ-СМ1","21-ПМ-СС1","21-ПМ-ТБ1","21-ПМ-ТБ2","21-ПМ-ТВ1","21-ПМ-ТО1"],
            "3 курс": ["20-АО-ПЭ1","20-АО-ПЭ2","20-АО-ТБ1","20-ПБ-ГД1","20-ПБ-ПЖ1","20-ПБ-ПР1","20-ПБ-ПР2","20-ПБ-ПР3","20-ПБ-ПР4",
            "20-ПБ-СМ1","20-ПБ-ТБ1","20-ПБ-ТВ1","20-ПБ-ТМ1","20-ПБ-ТО1","20-ПБ-УК1"],
            "4 курс": ["19-Ао-ПЭ1","19-АО-ПЭ2","19-ПБ-ГД1","19-ПБ-ПЖ1","19-ПБ-ПЖ2","19-ПБ-ПР1","19-ПБ-ПР2","19-ПБ-ПР3","19-ПБ-ПР4",
            "19-ПБ-СМ1","19-ПБ-ТБ1","19-ПБ-ТВ1","19-ПБ-ТМ1","19-ПБ-ТО1","19-ПБ-УК1"]
        }
    },
    faculty4: {
        courses: ["1 курс", "2 курс","3 курс","4 курс","5 курс"],
        groups: {
            "1 курс": ["22-АО-РОЭ2","22-АО-РОЭ3","22-ЭБ-ГУ1","22-ЭБ-МН1","22-ЭБ-МН2","22-ЭБ-ЭК1","22-ЭБ-ЭК2","22-ЭМ-МН1","22-ЭМ-МН2",
            "22-Э-ЭБ1"],
            "2 курс": ["21-АО-Э1","21-АО-Э2","21-ЭБ-ГУ1","21-ЭМ-МН1","21-ЭБ-МН2","21-ЭБ-ЭК1","21-ЭМ-ГУ1","21-ЭМ-МН1","21-ЭМ-МН2",
            "21-ЭМ-ЭК1","21-Э-ЭБ1","21-Э-ЭБ2"],
            "3 курс": ["20-ЭБ-ГУ1","20-ЭБ-МН1","20-ЭБ-МН2","20-ЭБ-ЭК1","20-ЭБ-ЭК2","20-Э-ЭБ1","20-Э-ЭБ2"],
            "4 курс": ["19-ЭБ-ГУ1","19-ЭБ-МН1","19-ЭБ-МН2","19-ЭБ-ЭК1","19-ЭБ-ЭК2","19-ЭБ-ЭК3","19-Э-ЭБ1","19-Э-ЭБ2","19-Э-ЭБ3"],
            "5 курс": ["18-Э-ЭБ1","18-Э-ЭБ2","18-Э-ЭБ3"]
        }
    },
        faculty5: {
            courses: ["1 курс","2 курс","3 курс","4 курс","5 курс","6 курс"],
            groups: {
                "1 курс": ["23-АО-ПСК1","23-АО-РОЭЭ1","23-АО-СК1","23-АО-СМ1","23-СБ-ЖК1","23-СБ-ЗК1","23-СБ-СТ1","23-СБ-СТ2","23-СБ-СТ3","23-СБ-СТ4",
                "23-СБ-СТ5","23-СМ-ЗК1","23-СМ-СТ1","23-СМ-СТ2","23-СМ-СТ3","23-СМ-СТ4","23-СМ-СТ5","23-СМ-СТ5","23-СМ-СТ6","23-С-УС1","23-С-УС2"],
                "2 курс": ["22-АО-ПСК1","22-АО-РОЭ1","22-АО-СК1","22-СБ-ЗК1","22-СБ-СТ1","22-СБ-СТ2","22-СБ-СТ3","22-СБ-СТ4","22-СБ-СТ5","22-СМ-СТ1",
                "22-СМ-СТ2","22-СМ-СТ3","22-С-УС1","22-С-УС2"],
                "3 курс": ["21-АО-ТТС1","21-СБ-ЗК1","21-СБ-СТ1","21-СБ-СТ2","21-СБ-СТ3","21-СБ-СТ4","21-С-УС1","21-С-УС2"],
                "4 курс": ["20-АО-ТТС1","20-АО-ТТС2","20-СБ-ЗК1","20-СБ-СТ1","20-СБ-СТ2","20-СБ-СТ3","20-СБ-СТ4","20-СБ-СТ6","20-С-УС1","20-С-УС2","20-С-УС3"],
                "5 курс": ["19-С-УС1","19-С-УС2"],
                "6 курс": ["18-С-УС1","18-С-УС2"]
            }
    },
        faculty6: {
            courses: ["1 курс","2 курс","3 курс","4 курс","5 курс"],
            groups: {
                "1 курс": ["23-АО-МА1","23-АО-МВ1","23-АО-МС1","23-АО-СРП1","23-АО-ТТС1","23-МБ-АП1","23-МБ-КТ1","23-МБ-ТП1","23-МБ-ТП2","23-МБ-ХТ1","23-МБ-ЭТ1",
                "23-МБ-ЭТ2","23-ММ-АП1","23-ММ-КТ1","23-ММ-КТ2","23-ММ-ТП1","23-ММ-ХТ1","23-ММ-ЭТ1","23-М-НС1","23-М-СЖ1"],
                "2 курс": ["22-АО-МА1","22-АО-МВ1","22-АО-МС1","22-Ао-СРП1","22-АО-ТТС1","22-МБ-АП1","22-МБ-КТ1","22-МБ-ТП1","22-МБ-ТП2","22-МБ-ХТ1",
                "22-МБ-ЭТ1","22-МБ-ЭТ2","22-ММ-АП1","22-ММ-КТ1","22-ММ-КТ2","22-ММ-ТП1","22-ММ-ХТ1","22-М-СЖ1"],
                "3 курс": ["21-АО-МС1","21-АО-МС2","21-АО-ПЭ4","21-МБ-АП1","21-МБ-КТ1","21-МБ-ТМ1","21-МБ-ТП1","21-МБ-ТП2","21-МБ-ХТ1","21-МБ-ЭТ1","21-М-НС1","21-М-СЖ1"],
                "4 курс": ["20-АО-МС1","20-АО-МС2","20-АО-ТМ1","20-АО-ЭТ1","20-МБ-АП1","20-МБ-КТ1","20-МБ-ТМ1","20-МБ-ТП1","20-МБ-ХТ1","20-МБ-ЭТ1","20-М-НС1","20-М-СЖ1"],
                "5 курс": ["19-М-НС1","19-М-СЖ1"]
            }
    },
        faculty7: {
            courses: ["1 курс","2 курс","3 курс","4 курс"],
            groups: {
                "1 курс": ["23-АО-МТП1","23-АО-ОИ1","23-АО-РОЭ4","23-АО-СПФ1","23-ФБ-ДА1","23-ФБ-РС1","23-ФБ-РС2","23-ФБ-СЦ1","23-ФМ-СЦ1"],
                "2 курс": ["22-АО-МТП1","22-АО-ОИ1","22-АО-РОЭ4","22-АО-СПФ1","22-ФБ-ДА1","22-ФБ-РС1","22-ФБ-РС2","22-ФБ-СЦ1","22-ФМ-СЦ1"],
                "3 курс": ["21-АО-Э3","21-ФБ-ДА1","21-ФБ-РС1","21-ФБ-РС2","21-ФБ-СЦ1","21-ФБ-СЦ2"],
                "4 курс": ["20-АО-ХТ1","20-ЭБ-ДА1","20-ЭБ-РС1","20-ЭБ-СЦ1"]
            }
        },
        faculty8: { 
            courses: ["1 курс","2 курс","3 курс","4 курс"],
            groups: {
                "1 курс": ["23-ИТК9-БД1","23-ИТК9-БУ1","23-ИТК9-МН1","23-ИТК9-МН2","23-ИТК9-НГ1","23-ИТК9-НГ2","23-ИТК9-НГ3","23-ИТК9-ОП1",
                "23-ИТК9-ОП2","23-ИТК9-ПД1","23-ИТК9-ПД2","23-ИТК9-СА1","23-ИТК9-СА2","23-ИТК9-СЭ1","23-ИТК9-СЭ2","23-ИТК9-СЭ3","23-ИТК9-ТЭ1",
                "23-ИТК-БД1","23-ИТК-БУ1","23-ИТК-МН1","23-ИТК-МН2","23-ИТК-НГ1","23-ИТК-НГ2","23-ИТК-ОП1","23-ИТК-ПД1","23-ИТК-СА1","23-ИТК-СА2",
                "23-ИТК-СЭ1","23-ИТК-СЭ2","23-ИТК-ТЭ1"],
                "2 курс": ["22-ИТК9-БД1","22-ИТК9-БД2","22-ИТК9-БУ1","22-ИТК9-БУ2","22-ИТК9-МН1","22-ИТК9-МН2","22-ИТК9-НГ1","22-ИТК9-НГ2","22-ИТК9-НГ3",
                "22-ИТК9-НГ4","22-ИТК9-ОП1","22-ИТК9-ОП2","22-ИТК9-СА1","22-ИТК9-СА2","22-ИТК9-СЭ1","22-ИТК9-СЭ2","22-ИТК9-СЭ3","22-ИТК9-СЭ4","22-ИТК9-ТЭ1","22-ИТК9-ТЭ2","22-ИТК-БД1",
                "22-ИТК-БУ1","22-ИТК-БУ2","22-ИТК-МН1","22-ИТК-МН2","22-ИТК-НГ1","22-ИТК-НГ2","22-ИТК-НГ3","22-ИТК-ОП1","22-ИТК-ОП2","22-ИТК-СА1","22-ИТК-СА2",
                "22-ИТК-СЭ1","22-ИТК-СЭ2","22-ИТК-ТЭ1"],
                "3 курс": ["21-ИТК9-БУ1","21-ИТК9-МН1","21-ИТК9-НГ1","21-ИТК9-НГ2","21-ИТК9-НГ2","21-ИТК9-НГ3","21-ИТК9-ОП1","21-ИТК9-СЭ2","21-ИТК9-СЭ3","21-ИТК9-ТЭ1","21-ИТК-МН1",
                "21-ИТК-НГ1","21-ИТК-НГ2","21-ИТК-ОП1","21-ИТК-СА1","21-ИТК-СЭ1","21-ИТК-СЭ2"],
                "4 курс": ["20-ИТК9-МН1","20-ИТК9-МН2","20-ИТК9-НГ1","20-ИТК9-НГ2","20-ИТК9-ОП1","20-ИТК9-СА1","20-ИТК9-СА2","20-ИТК9-СЭ1","20-ИТК9-СЭ2"]
            }  
        },
        faculty9:{
            courses: ["Отсутствует"],
            groups:{
                "Отсутствует": ["Отсутствует"]
            }
        },
        faculty10:{
            courses: ["1 курс","2 курс","3 курс","4 курс"],
            groups: {
                "1 курс": ["23-СПО11-ИС","23-СПО11-СЭ","23-СПО11-ТЭ","23-СПО-ИС","23-СПО-СЭ","23-СПО-ТЭ","23-ФН-АП1","23-ФН-СТ1"],
                "2 курс": ["22-СПО11-ТЭ","22-СПО-СЭ","22-СПО-ТЭ","22-ФН-СТ1"],
                "3 курс": ["21-СПО-ТЭ"],
                "4 курс": ["20-СПО-ПК"]
            }
        },
        faculty11:{
            courses: ["1 курс","2 курс","3 курс","4 курс"],
            groups: {
                "1 курс": ["23-ФАБ-ИВ1","23-ФАБ-НД1","23-ФАБ-СТ1","23-ФАБ-ЭТ1","23-ФАБ-ЭЭ1"],
                "2 курс": ["22-ФАБ-ИВ1","22-ФАБ-НД1","22-ФАБ-СТ1","22-ФАБ-ЭТ1","22-ФАБ-ЭЭ1"],
                "3 курс": ["21-ФАБ-ИВ1","21-ФАБ-НД1","21-ФАБ-СТ1","21-ФАБ-ЭТ1","21-ФАБ-ЭЭ1"],
                "4 курс": ["20-ФАБ-ИВ1","20-ФАБ-НД1","20-ФАБ-СТ1","20-ФАБ-ЭТ1","20-ФАБ-ЭЭ1"]
            }
        }
        
    }



function updateCoursesAndGroups() {
    var facultySelect = document.getElementById('faculty');
    var courseSelect = document.getElementById('course');
    var groupSelect = document.getElementById('group');

    
    courseSelect.innerHTML = '<option value="">Выберите курс</option>';
    groupSelect.innerHTML = '<option value="">Выберите группу</option>';

    
    if (facultySelect.value !== "") {
        var courses = coursesData[facultySelect.value].courses;
        courses.forEach(function(course) {
            var option = document.createElement('option');
            option.value = course;
            option.text = course;
            courseSelect.appendChild(option);
        });
    }
}

function updateGroups() {
    var facultySelect = document.getElementById('faculty');
    var courseSelect = document.getElementById('course');
    var groupSelect = document.getElementById('group');

    
    groupSelect.innerHTML = '<option value="">Выберите группу</option>';

    
    if (facultySelect.value !== "" && courseSelect.value !== "") {
        var groups = coursesData[facultySelect.value].groups[courseSelect.value];
        groups.forEach(function(group) {
            var option = document.createElement('option');
            option.value = group;
            option.text = group;
            groupSelect.appendChild(option);
        });
    }
}

function submitForm() {
    var facultySelect = document.getElementById('faculty');
    var courseSelect = document.getElementById('course');
    var groupSelect = document.getElementById('group');

    var errorMessage = '';

    if (!groupSelect.value) {
        errorMessage += 'Выберите группу. ';
    }

    if (errorMessage !== '') {
        alert(errorMessage);
        return;
    }


    
    var selectedFaculty = facultySelect.value;
    var selectedCourse = courseSelect.value;
    var group = groupSelect.value;

    
    var url = 'расписание/' + selectedFaculty + '/расписание_' + group + '.html';
    window.location.href = url;
     
}
