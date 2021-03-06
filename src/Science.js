import { Component } from 'react';

class Science extends Component{


    constructor(id, study, name, depends){
        super();
        this.id = id;
        this.study = study;
        this.name = name;
        this.depends = depends;
        this.json = '[{"id":1,"study":0,"name":"Автомобиль","depends":[7,53],"influence":[42]},{"id":2,"study":0,"name":"Алфавит","depends":[],"influence":[52,17,26,38]},{"id":3,"study":0,"name":"Астрономия","depends":[29,26],"influence":[32,55]},{"id":4,"study":0,"name":"Атомная теория","depends":[55,60],"influence":[45]},{"id":5,"study":0,"name":"Банковское дело","depends":[57,48],"influence":[16,22]},{"id":6,"study":0,"name":"Взрывчатые вещества","depends":[41,62],"influence":[7,8]},{"id":7,"study":0,"name":"Внутреннее сгорание","depends":[35,6],"influence":[40,1]},{"id":8,"study":0,"name":"Воинская повинность","depends":[48,6],"influence":[]},{"id":9,"study":0,"name":"Генетика","depends":[27,22],"influence":[]},{"id":10,"study":0,"name":"Глиноделие","depends":[],"influence":[]},{"id":11,"study":0,"name":"Демократия","depends":[61,24],"influence":[37]},{"id":12,"study":0,"name":"Деньги","depends":[33],"influence":[57,21]},{"id":13,"study":0,"name":"Езда верхом","depends":[],"influence":[50]},{"id":14,"study":0,"name":"Железная дорога","depends":[36,31],"influence":[16]},{"id":15,"study":0,"name":"Изобретения","depends":[56,24],"influence":[36,41]},{"id":16,"study":0,"name":"Индустриализация","depends":[34,5],"influence":[19,22,53]},{"id":17,"study":0,"name":"Картография","depends":[2],"influence":[32]},{"id":18,"study":0,"name":"Колесо","depends":[],"influence":[56]},{"id":19,"study":0,"name":"Коммунизм","depends":[61,16],"influence":[43]},{"id":20,"study":0,"name":"Компьютеры","depends":[26,65],"influence":[23,49]},{"id":21,"study":0,"name":"Конструирование","depends":[54,12],"influence":[56,31]},{"id":22,"study":0,"name":"Корпорации","depends":[5,16],"influence":[42,35,9]},{"id":23,"study":0,"name":"Космические полеты","depends":[20,44],"influence":[39]},{"id":24,"study":0,"name":"Литература","depends":[38,52],"influence":[11,15,61,48]},{"id":25,"study":0,"name":"Магнетизм","depends":[32,60],"influence":[64]},{"id":26,"study":0,"name":"Математика","depends":[2,54],"influence":[3,60,58,20]},{"id":27,"study":0,"name":"Медицина","depends":[61,57],"influence":[62,9]},{"id":28,"study":0,"name":"Металлургия","depends":[41,58],"influence":[53,64]},{"id":29,"study":0,"name":"Мистицизм","depends":[63],"influence":[3,61]},{"id":30,"study":0,"name":"Монархия","depends":[63,52],"influence":[59]},{"id":31,"study":0,"name":"Мостостроение","depends":[34,21],"influence":[14]},{"id":32,"study":0,"name":"Навигация","depends":[17,3],"influence":[60,25]},{"id":33,"study":0,"name":"Обработка бронзы","depends":[],"influence":[12,34]},{"id":34,"study":0,"name":"Обработка железа","depends":[33],"influence":[31,41]},{"id":35,"study":0,"name":"Очистка","depends":[62,22],"influence":[7,39]},{"id":36,"study":0,"name":"Паровой двигатель","depends":[60,15],"influence":[14]},{"id":37,"study":0,"name":"Переработка","depends":[42,11],"influence":[]},{"id":38,"study":0,"name":"Письменность","depends":[2],"influence":[47,24]},{"id":39,"study":0,"name":"Пластмассы","depends":[35,23],"influence":[51,49]},{"id":40,"study":0,"name":"Полеты","depends":[7,60],"influence":[46]},{"id":41,"study":0,"name":"Порох","depends":[15,34],"influence":[28,6]},{"id":42,"study":0,"name":"Производство","depends":[1,22],"influence":[45,51,37,43]},{"id":43,"study":0,"name":"Профсоюзы","depends":[42,19],"influence":[]},{"id":44,"study":0,"name":"Ракетостроение","depends":[46,65],"influence":[23]},{"id":45,"study":0,"name":"Расщеплание атома","depends":[42,4],"influence":[67]},{"id":46,"study":0,"name":"Реактивные полеты","depends":[40,64],"influence":[44]},{"id":47,"study":0,"name":"Религия","depends":[61,38],"influence":[]},{"id":48,"study":0,"name":"Республика","depends":[52,24],"influence":[5,8]},{"id":49,"study":0,"name":"Роботы","depends":[39,20],"influence":[]},{"id":50,"study":0,"name":"Рыцарство","depends":[59,13],"influence":[]},{"id":51,"study":0,"name":"Сверхпроводимость","depends":[39,42],"influence":[66]},{"id":52,"study":0,"name":"Свод законов","depends":[2],"influence":[30,57,24,48]},{"id":53,"study":0,"name":"Сталь","depends":[28,16],"influence":[1]},{"id":54,"study":0,"name":"Строительство","depends":[],"influence":[26,59,21]},{"id":55,"study":0,"name":"Теория гравитации","depends":[55,58],"influence":[4]},{"id":56,"study":0,"name":"Техника","depends":[18,21],"influence":[65,15]},{"id":57,"study":0,"name":"Торговля","depends":[12,52],"influence":[27,5]},{"id":58,"study":0,"name":"Университет","depends":[26,61],"influence":[62,28,55]},{"id":59,"study":0,"name":"Феодализм","depends":[54,30],"influence":[50]},{"id":60,"study":0,"name":"Физика","depends":[26,32],"influence":[4,25,36,40]},{"id":61,"study":0,"name":"Философия","depends":[29,24],"influence":[11,27,58,47,19]},{"id":62,"study":0,"name":"Химия","depends":[58,27],"influence":[35,6]},{"id":63,"study":0,"name":"Церемония сожжения","depends":[],"influence":[30,29]},{"id":64,"study":0,"name":"Электричество","depends":[28,28],"influence":[65,46]},{"id":65,"study":0,"name":"Электроника","depends":[56,64],"influence":[20,44,67]},{"id":66,"study":0,"name":"Энергия распада","depends":[67,51],"influence":[]},{"id":67,"study":0,"name":"Ядерная энергия","depends":[45,65],"influence":[66]}]';
        this.activeScience = [];
        this.arrayScience = [];
        this.arrayScience = this.getArrayScience();
    }

    getStudy(){
        return this.study;
    }

    getDepends(){
        return this.depends;
    }

    getArrayScience(){
        return JSON.parse(this.json);
    }

    getActiveScience(){

        //const arrayScience = this.getArrayScience();
        for (let science of this.arrayScience){
            //if (science.depends)
            if(science.depends.length === 0 && science.study === 0){
                this.activeScience.push(science);
            }
        }
        return this.activeScience;
    }

    setStudy(elem){
        this.study = 1;
        document.getElementById(elem.id).style.display="none";
        this.activeScience.splice(this.activeScience.indexOf(elem), 1);
        this.checkActiveScience(elem);

    }

    getScienceByID(id){
        for (let science of this.arrayScience) {
            if (science.id === id){
                return science;
            }
        }

    }

    checkActiveScience(elem){

        //console.log(elem.name + ' -- ' + elem.influence);
        for (let influence of elem.influence){
            let influenceScience = this.getScienceByID(influence);
            this.arrayScience[this.arrayScience.indexOf(influenceScience)].depends.splice(this.arrayScience[this.arrayScience.indexOf(influenceScience)].depends.indexOf(influence),1);

            influenceScience.depends.splice(elem.id, 1);
            if (this.arrayScience[this.arrayScience.indexOf(influenceScience)].depends.length === 0){
                this.addToActiveScience(this.arrayScience[this.arrayScience.indexOf(influenceScience)]);
            }
        }
        if (this.activeScience.length === 0){
            const parentElem = document.getElementById('rootApp');
            const div = document.createElement('div');
            div.innerHTML = "Изучены все технологии";
            div.className = "effect";
            parentElem.appendChild(div);
            setTimeout(function(){
                div.style.opacity=1;
            },1000)

        }
    }

    press(science){
        //console.log(" ---- " + science.name + ' === ' + this.activeScience[0].name);
        this.setStudy(science);
    }

    addToActiveScience(science){
        this.activeScience.push(science);
        const parentElem = document.getElementById('rootApp');
        const div = document.createElement('div');
        div.id = science.id;
        div.innerHTML = science.name;
        div.className = "effect";
        div.onclick = this.press.bind(this, science);
        parentElem.appendChild(div);
        setTimeout(function(){
            div.style.opacity=1;
        },1000)

    }
}


export default Science;