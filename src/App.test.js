/**
 * Testes dos Componentes
 */



 import {render, screen } from '@testing-library/react';
 import Spinner from './components/loading/loading.compont';
 import { InputCustom } from './components/input-custom';
 import {Form} from '@unform/web'
 import HomePageEndereco from './pages/home';

 import userEvent from '@testing-library/user-event'
 

 
 describe('Test components',()=>{

   it('show loading',async()=>{
     render(<Spinner/>)
 
     const container = screen.getByTestId(`loading`);
 
     expect(container).toBeInTheDocument()
   })
 
   it('show input custom',async ()=>{
 
     let _name = 'nome';
 
     render(<Form>
       <InputCustom required name={_name} label="Nome" variant="outlined"  type={'text'}/>
     </Form>)
 
 
     const container = screen.getByTestId(`${_name}_input`)
 
     let _val = '123';
 
     expect(container.querySelector('input').getAttribute('name')).toEqual(_name)
 
     container.querySelector('input').setAttribute('value',`${_val}`);
 
     expect(container.querySelector('input').getAttribute('value')).toEqual(`${_val}`)
 
    
   })

   it('test home page success',async ()=>{
     render(<HomePageEndereco/>)

     const container = screen.getByTestId(`search_box`)

     let input = container.querySelector('input')


     const btn = screen.getByTestId('btn_search')

     await userEvent.type(input, '14010150')

     await userEvent.click(btn);

     const loading = await screen.getByTestId('loading');

     expect(loading).toBeInTheDocument();


   })


   
   it('test home page fail',async ()=>{
    render(<HomePageEndereco/>)

    const container = screen.getByTestId(`search_box`)

    let input = container.querySelector('input')


    const btn = screen.getByTestId('btn_search')

    await userEvent.type(input, 'xx')


    await userEvent.click(btn);

    expect(document.getElementById('loading')).not.toBeInTheDocument();

   
    
  })



 
 
 
 })