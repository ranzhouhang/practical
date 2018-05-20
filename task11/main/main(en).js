let getNumber=require('cli-interact').getNumber;
let question = require('cli-interact').question;

const first='请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：';
const second='请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：';
const third='请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
const third2='请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
const transcriptHead=`成绩单
姓名|数学|语文|英语|编程|平均分|总分
======================== `;
const transcriptEnd=`========================
全班总分平均数：`
const transcript=`全班总分中位数：`

let studentNumber='';

function start(){
    return`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
}
//判断输入是否符合标准
function judge(array) {
    return (/\d+/.test(array[1]))
}
//分割得到的字符串
function string(str) {
    str = str + "";
    return str.split(',')
}
//判断第二次输入的字符串
function judgethird(infor){
    for(item of string(infor)){
        return  /\d+/.test(item)
    }
}
//得到的数据进行处理
function calculateGrade(studentInformation,studentNumber){
    let student=[];
    studentInformation.forEach(
        item=>{
            if(studentNumber.some(a=>a===item[1])){
                student.push(item)
            }
        }
    )
    return student;
}
//若输入的数据是乱的可以进行排列
function matching(item) {
    let math=0;chinese=0;english=0;computer=0;tran='';
    for (i = 3; i < 7; i++) {
        item[i] = item[i] + "";
        switch (item[i].split(':')[0]) {
            case 'math' :
                math = parseInt(item[i].split(':')[1], 10)
                break
            case 'Chinese':
                chinese = parseInt(item[i].split(':')[1], 10)
                break
            case 'English':
                english = parseInt(item[i].split(':')[1], 10)
                break
            case 'programme'  :
                computer = parseInt(item[i].split(':')[1], 10)
                break
        }
        let average = (math + chinese + english + computer) / 4;
        let total = math + chinese + english + computer;
        tran = item[0] + `|` + math + `|` + chinese + `|` + english + `|` + computer + `|` + average + `|` + total;
    }
    console.log(tran);
}

function arrange(student){
        for(let item of student)
        {
            matching(item);
        }
}
//求总分
function averager(student){
    let sum=[];
    for(let item of student){
        for (i=3;i<7;i++) {
            sum.push(parseInt(item[i].split(':')[1], 10))
        }
    }
    return sum
}
//求总分
function sumAverage(sum){
    let num=0;
    for(item of sum){
        num+=item
    }
    num=num/parseInt(sum.length,10)
    return num;
}
//求中位数
function median(array) {
    array.sort(function compare(a,b){return a-b;});
    if(array.length%2!==0){
        return array[(array.length-1)/2];
    }
    else{
        return (array[(array.length-2)/2]+array[array.length/2])/2;
    }}
let studentInformation = [];

function main() {
    while (true) {
        switch (getNumber(start())) {
            case 1:
                let array = '';
                array = string(question(first))
                while (!Boolean(judge(array))) {
                    array = string(question(second))
                }
                if (Boolean(judge(array))) {
                    studentInformation.push(array);
                    console.log('学生' + array[0] + '的成绩被添加')
                }
                break
            case 2:
                let infor = '';
                infor = question(third);
                while (!Boolean(judgethird(infor))) {
                    infor = string(question(third2));
                }
                if (Boolean(judgethird(infor))) {
                    studentNumber = string(infor);
                    console.log(transcriptHead);
                    arrange(calculateGrade(studentInformation, studentNumber))
                    console.log(transcriptEnd +
                        sumAverage(averager(calculateGrade(studentInformation, studentNumber)))
                        + `\n` + transcript
                        + median(averager(calculateGrade(studentInformation, studentNumber))));
                }
                break;
            case 3:
                return;
            default :
                break;
        }
    }
}
module.exports = main;

//mike,04151812,班级03,math:88,English:75,Chinese:86,programme:82
//jan,05181716,班级05,math:99,English:98,Chinese:98,programme:99