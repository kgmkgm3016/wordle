let index = 0;
let attempts = 0;

function appStart() {
  const handleEnterKey = () => {
    console.log("엔터키");
  };

  const handlekeydown = (event) => {
    // if (index === 5) return;

    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (event.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) {
      return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };
  window.addEventListener("keydown", handlekeydown); //key 키를 누르자마자 이벤트로 받아들임
}

appStart();
//camel표기법: 띄어쓰기 대신 띄어쓰는 단어의 첫글자를 대문자로 치환 hiImIronMan ...
//snake표기법: 띄어쓰기 대신 _로 치환 hi_im_iron_man
//하나의 펑션으로 모든 로직을 묶음
