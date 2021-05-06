
/**
 * Componente de Search
 * props placeholder
 * e ref
 */



 import {TextField,FormGroup} from '@material-ui/core';
 import {forwardRef} from 'react'
 
 export const SearchBox = ({placeholder},ref)=>{
 
       return(
         <FormGroup style={{marginTop:40,marginBottom:10,width:500,marginLeft:10}} data-testid="search_box">
             <TextField inputProps={{ maxLength: 9 }} type='search' label={placeholder} variant={'outlined'} ref={ref}  />
         </FormGroup>
       )
     
 }
 
 export default forwardRef(SearchBox)