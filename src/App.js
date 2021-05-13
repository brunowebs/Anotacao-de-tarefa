
import './App.css';
import{useEffect, useState} from 'react';

function App() {

  const [tarefas, setarTarefas]= useState([
 /*   
{
  id:0,
  tarefa:'Minha tarefa do dia',
  finalizada:false
},
{
  id:0,
  tarefa:'Minha tarefa do dia 2',
  finalizada:true
},
*/

  ]);

const salvarTarefa=()=>{
 //TODO: salvar tarefa
      var tarefa = document.getElementById('content-tarefa');


      setarTarefas([
        ...tarefas,
        {
          id:new Date().getTime(),
          tarefa:tarefa.value,
          finalizada:false        
        }

      ]);
 setModal(false);
}

  const[modal, setModal]= useState(false);

  const abrirModal=()=>{
        setModal(!modal);
  }
  const marcarConcluida=(id)=>{
    let novasTarefas=tarefas.filter(function(val){
             if(val.id==id){
               val.finalizada=true;
            }
            return val;

    })
    setarTarefas(novasTarefas);

  } 


  useEffect(()=>{
    //fazer uma chamada para api e preencher o estado tarefa
  },[])


  return (
    <div className="App">
      {
        modal?
        <div className="modal">
          <div className="modalContent">
            <h3>Adicionar sua Tarefa</h3>
            <input id ="content-tarefa" type="text"/>
            <button onClick={ ()=> salvarTarefa()}>Salvar!</button> 
            </div>
          </div>
          :
          <div></div>
      }
      <div onClick={()=>abrirModal()} className="addTarefa">+</div>
      <div className="boxTarefas">
        <h2>Minhas Tarefas do Dia</h2>
       {
         tarefas.map((val)=>{
           if(!val.finalizada){
             return(
               <p onClick={()=>marcarConcluida(val.id)}> {val.tarefa} </p>
               
             );
           }else{
             return(
               <p onClick={()=>marcarConcluida(val.id)} style={{textDecoration:'line-through'}}>{val.tarefa}</p>
             );
           }
         })
       }


      </div>
      
    </div>
  );
}

export default App;
