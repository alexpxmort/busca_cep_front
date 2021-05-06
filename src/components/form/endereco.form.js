/**
 * Componente Customizado de Formulario
 * 
 */




 import { InputCustom } from '../input-custom';
 import {Form} from '@unform/web'

 const FormCustomEndereco = ({id,initialData})=>{
     return(
         <div style={{marginTop:80,marginLeft:20}}>
             <Form id={id}  initialData={initialData}  data-testid='form_endereco'>
                 <InputCustom data-testid="cep" role="cep" disabled name={'cep'} label="Cep" variant="outlined"  type={'text'}/>
                 <InputCustom  disabled label="Logradouro"  name={'logradouro'} variant="outlined"   type={'text'} />
                 <InputCustom disabled name={'complemento'} label="Complemento" variant="outlined"  type={'text'}/>
                 <InputCustom  disabled label="Bairro"  name={'bairro'} variant="outlined"   type={'text'} />
                 <InputCustom disabled name={'uf'} label="Uf" variant="outlined"  type={'text'}/>
                 <InputCustom  disabled label="Ibge"  name={'ibge'} variant="outlined"   type={'text'} />
                 <InputCustom  disabled label="Gia"  name={'gia'} variant="outlined"   type={'text'} />
                 <InputCustom  disabled label="DDD"  name={'ddd'} variant="outlined"   type={'text'} />
                 <InputCustom  disabled label="Siafi"  name={'siafi'} variant="outlined"   type={'text'} />
                 <InputCustom data-testid="localidade" role="localidade" disabled label="Localidade"  name={'localidade'} variant="outlined"   type={'text'} />
             </Form>
         </div>
     )
 }
 
 export default FormCustomEndereco;