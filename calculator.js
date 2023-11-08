var lis = document.querySelectorAll("ul li");

lis.forEach(node =>{
    node.addEventListener("click",function(event){
        event.preventDefault();
        const value = node.innerText.trim();
        //This value is more important
        const result = document.querySelector(".result");
        // $result.innerText = value;//value is neglicated
        const resultText = result.innerText.trim();
         
        if (value == '='){
            let solution = eval(/*result.innerText.trim()*/ resultText);
            result.innerText = solution;
            return true;
        }

        if(resultText == '0' || resultText =='undefined' || resultText =='Infinity'){
            result.innerText = '';
        }

       if(value.toLowerCase() == 'c'){
        result.innerText = '0';
        return true;
       }

       result.append(value);

    })
})
