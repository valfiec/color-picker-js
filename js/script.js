const colorHexString = document.querySelector('#colorHexString');
const pickedColor = document.querySelector('#colorPicker');
const copyBtn = document.getElementById('copy');

const changeBGcol = () => {
    console.log(pickedColor.value); // checks current cp value. 
    document.body.style.backgroundColor = pickedColor.value;

    if (pickedColor.value === '#ffffff') {
        colorHexString.textContent = `Color Value:${pickedColor.value}(white)`;
    }
    else if (pickedColor.value === '#000000'){
        colorHexString.textContent = `Color Value:${pickedColor.value}(black)`;
    }
    else if (pickedColor.value === '#ff0000'){
        colorHexString.textContent = `Color Value:${pickedColor.value}(red)`;
    } 
    else if (pickedColor.value === '#0000ff'){
        colorHexString.textContent = `Color Value:${pickedColor.value}(blue)`;
    }
    else {
        colorHexString.textContent = `Color Value:${pickedColor.value}`;
    }
}

//changeBGcolは関数　カラーピッカーでinputイベントがあればchangeBGcolを実行
pickedColor.addEventListener('input', changeBGcol); 

//クリップボードにカラーコードをコピー
copyBtn.addEventListener('click', () => {
    console.log('copied!');
    navigator.clipboard.writeText(pickedColor.value);
    alert('Copied!');
});

//colorHexStringのtextContentを#colorPickerのvalueに置き換える
colorHexString.textContent = `Color Value:${pickedColor.value}`;



