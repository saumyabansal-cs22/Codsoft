var output=document.getElementById('output-screen');
// var val=output.value;

function display(num){
            output.value +=num;
        }
function Calculate(){
            try{
                output.value=eval(output.value);
            }
            catch(err){
                output.value="Invalid input"
            }
        }
function Clear(){
            output.value=""; 
            
        }
function del(){
            output.value=output.value.slice(0,-1)
        }
// output.addEventListener('keyup',(e)=>{
//     var val=output.value;
//     if (e.code === '13'){
//         Calculate(val);
//         }
//     })
