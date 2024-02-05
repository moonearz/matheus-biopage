const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const dimeButton = document.getElementById('dime');
const moneyButton = document.getElementById('money');

const setAudio = () => {
    if(localStorage.getItem('audio') === 'money') {
        setMoney();
        moneyButton.click();
    } 
    else {
        setDime();
        dimeButton.click();
    }
};

const setDime = () => {
    document.querySelector('body').classList = 'dime';
};
const setMoney = () => {
    document.querySelector('body').classList = 'money';
};

console.log(document.querySelector('body').classList);
setAudio();
console.log(document.querySelector('body').classList);
for(var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', event => {
        if(dimeButton.checked) {
            setDime();
            localStorage.setItem('audio', 'dime');
        }
        else {
            setMoney();
            localStorage.setItem('audio', 'money');
        }  
    });
}