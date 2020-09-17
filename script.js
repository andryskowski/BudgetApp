class activity  {
    constructor(description, value, comeOrIncome) {
        this.description = description;
        this.value = value;
        this.comeOrIncome = comeOrIncome;
      }
};

document.querySelector(`.addToBudget`).addEventListener("click", addActivity);

const comeOrIncome = document.querySelector('.comeOrIncome');
comeOrIncome.addEventListener("click", (e) => {e.target.classList.toggle('income');});

function addActivity(){
    const description = document.querySelector('.inputDescription');
    const valueOfActivity = document.querySelector('.inputValue');
    const ACTIVITY = new activity(description.value, valueOfActivity.value, checkIfCome());
    console.log(ACTIVITY);

    updateBudget(ACTIVITY);
}

function checkIfCome() {
    let flagIncome;
    if(comeOrIncome.classList.contains('income'))
    {
        flag = 1;
    }
    else{
        flag = 0;
    }
    return flag;
}

function updateBudget(ACTIVITY) {
    let budget = Number(document.querySelector('.budgetState span').innerHTML);
    if(ACTIVITY.comeOrIncome == 0){
        budget+=Number(ACTIVITY.value);
    }
    document.querySelector('.budgetState span').innerHTML = budget;
}