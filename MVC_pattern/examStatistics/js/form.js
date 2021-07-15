// Use constructor StudentList
var listsForPassedFailed = new StudentsList ();

// Function for add data in pass/fail list
function addStudentDataToList () {
    
    // Use constructor Exam
    if (!inputNameData.value) {
        alert ('Name is required !!!')
    } else if (inputNameData.value.split(' ').length !== 2) {
        alert ('BOX NAME - must have First name and Second name !!!')
    } else if (!inputGradeData.value) {
        alert('Grade is required !!!')
    } else {
        var examInfo = new Exam (subjectSelect.value, inputNameData.value, inputGradeData.value);
        var passOrFail = examInfo.hasPassed();
        var elementLi = document.createElement('li');
        
        if (passOrFail === 'Passed') {
            passedListNode.appendChild(elementLi);
            elementLi.textContent = examInfo.getExaminfo() + ' ' + examInfo.grade;
            listsForPassedFailed.addStudentsToPassList(examInfo);
        } else if (passOrFail === 'Failed') {
            failedListNode.appendChild(elementLi);
            elementLi.textContent = examInfo.getExaminfo() + ' ' + examInfo.grade;
            listsForPassedFailed.addStudentsToFailList(examInfo);
        }
    }
    
}

// Func for refresh statistics
function refreshStatistic () {

    var numPassStudents = listsForPassedFailed.passedStudents.length;
    var numFailStudents = listsForPassedFailed.failedStudents.length;
    statisticPassNode.textContent = numPassStudents;
    statisticFailNode.textContent = numFailStudents;
    statisticPercentPassNode.textContent = Math.round(numPassStudents * 100 / (numPassStudents + numFailStudents)) + '%';
    statisticPercentFailNode.textContent = 100 - Math.round(numPassStudents * 100 / (numPassStudents + numFailStudents)) + '%';
}