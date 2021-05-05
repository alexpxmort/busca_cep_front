 /**
 * Página de Home do Endereço
 * 
 */
    

  import FormCustomEndereco from "../../components/form/endereco.form"
  import{useState,useEffect,useRef,useCallback} from 'react'
  import Spinner from "../../components/loading/loading.compont";
  import SearchBox from '../../components/search-box';
  import { Button, Container } from '@material-ui/core';
  import {createMethod} from '../../requests/api/api'
  import {empty} from '../../utils/string.utils'
  import Message from "../../components/msg_alerts/msg_alert";

  
  
  const HomePageEndereco = ()=>{

  
      let _initialData = {
        cep:'',
        logradouro:'',
        complemento:'',
        bairro:'',
        uf:'',
        ibge:'',
        gia:'',
        ddd:'',
        siafi:'',
        localidade:''
      };

      
    
      const [initialData,setData] = useState(_initialData)
      const [loading,setLoading] = useState(false)
      const[loadingCep,setLoadingCep]  = useState(false)
      const[endereco,setEndereco] = useState(null)
      const[error,setError] = useState(null);
      const refInput = useRef(null);
  
 

       useEffect(()=>{
           if(!empty(endereco)){
               setFieldsInitial(endereco)
           }
       },[endereco]);

   


  
      const id_form = 'endereco_form_edit';
      
    
      const setFieldsInitial = (endereco)=>{
          if(!empty(endereco)){
  
              let{cep,logradouro,complemento,bairro,uf,ibge,gia,ddd,siafi,localidade} = endereco;
                
              let _obj = {
                cep:cep,
                logradouro:logradouro,
                complemento:complemento,
                bairro:bairro,
                uf:uf,
                ibge:ibge,
                gia:gia,
                ddd:ddd,
                siafi:siafi,
                localidade:localidade
              }
  
              
              setData(_obj)
  
              setTimeout(()=>{
                  setLoading(false)
              },1000)
          }
        
      }

      const  handleClick= useCallback(async()=>{
          
    
        let cep = refInput.current.querySelector('input').value

        if(empty(cep)){
            Message('Preencha o campo de Cep!','warning');

            return false;
        }

        let _cepReplace = cep.replace(/-/g, '')

        if(isNaN(_cepReplace)){
            Message('Formato de Cep Inválido','warning');

            return false;
        }

        let _resp = await getData(_cepReplace);
        

      },[])

      const getData = async(cep)=>{

        setLoadingCep(true);
        let _data = await createMethod({cep:cep},'enderecos');

        if(!_data.error){
           setEndereco(_data.endereco);

           setError(null);

           setLoadingCep(false);
        }else{
            setError(_data.msg);
            setLoadingCep(false);
        }

      }


      const renderScreen = ()=>{

        if(loadingCep){
            return   <Spinner/>;
        }

        if(!empty(error)){
           return(
            <Container style={{position:'relative',left:40,top:150}}>
                <h2>{error}</h2>
            </Container>
           )
        }else{
            return  <FormCustomEndereco id={id_form}  initialData ={initialData}/>;
        }
      }
  
  
  
  
      if(!loading){
          return(
               <div>
                <SearchBox placeholder={'Procurar por Cep:'} ref={refInput}/>
                <Button data-testid="btn_search"  style={{marginLeft:10,marginTop:15,padding:15}} variant="contained" color="primary" type={'button'} onClick={handleClick}>
                Buscar
                </Button>
                   
                   {
                    renderScreen()
                   }
               </div>
          )
      }else{
          return (
              <Spinner/>
          )
      }
  }
  
  export default HomePageEndereco;