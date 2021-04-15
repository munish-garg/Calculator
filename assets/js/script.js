let button = document.getElementsByTagName('button');
let input = document.getElementById('calculator')

for(let btn of button){
    btn.addEventListener('click', (e)=>{
        //event captured or listened...
        if(e.target.innerText === 'X'){
            input.value+='*';
        }
        else if(e.target.innerText === 'C'){
            input.value = '';
        }
        else if(e.target.innerText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'Invalid Operation!!!';
            }
        }
        else if(e.target.innerText === 'Del'){
            if(input.value!==''){
                //It means that there is some length of string present..
                let arr = input.value.split('');
                arr.pop();
                input.value = arr.join('');
            }
        }
        else{
            input.value+=e.target.innerText;
        }
    })
}