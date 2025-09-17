let randomBtn = document.querySelector(`.randomBtn`);
let colorinput = document.querySelector(`#colorinput`);
let ApplyBtn = document.querySelector(`.ApplyBtn`);
let currentColorValue = document.querySelector(`.currentColorValue`);
let container = document.querySelector(`.container`);

const changecolor=(color)=>{
    container.style.backgroundColor = color;
}
changecolor(`green`);

const handleRandomBtnClick=()=>{
    console.log("random btn click")
}
randomBtn.addEventListener(`click`, handleRandomBtnClick)

const handleApplyBtnClick = () => {
  const color =colorinput.value;
  changecolor(color);
};
ApplyBtn.addEventListener(`click`, handleApplyBtnClick);

