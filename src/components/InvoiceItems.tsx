import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormContext } from "react-hook-form";


const InvoiceItemsBox = styled.div`
    
`;

const InvoiceItems = () => {
    const { t } = useTranslation();
    const { register } = useFormContext();

    interface Item {
        name: string;
        amount: number;
        unit: string;
        tax: number;
        price: number;
        [key: string]: string | number;
      }

    const emptyItem = { name: "", amount: 0, unit: "h", tax: 0, price: 0 }

    const [itemsList, setItemsList] = useState<Item[]>([emptyItem]);

    let handleChange = (i:number, e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let newFormValues = [...itemsList];
        newFormValues[i][e.target.name] = e.target.value;
        setItemsList(newFormValues);
     }
        
    let addFormFields = () => {
        setItemsList([...itemsList, emptyItem])
     }
    
    let removeFormFields = (i:number) => {
        let newFormValues = [...itemsList];
        newFormValues.splice(i, 1);
        setItemsList(newFormValues)
    }

    return (
        <InvoiceItemsBox>
            <h2>{t('items')}</h2>
            {itemsList.map((item, index) => (
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <TextField
                        label={t('name')}
                        fullWidth
                        variant="standard"
                        defaultValue={item.name || ""}
                        {...register(`itemsList[${index}].name`)} 
                        onChange={e => handleChange(index, e)}
                    />
                    </Grid>
                    <Grid item xs={1}>
                    <TextField
                        label={t('amount')}
                        fullWidth
                        variant="standard"
                        defaultValue={item.name || 0}
                        {...register(`itemsList[${index}].amount`)} 
                        onChange={e => handleChange(index, e)}
                    />
                    </Grid>
                    <Grid item xs={1}>
                    <TextField
                        label={t('unit')}
                        fullWidth
                        variant="standard"
                        defaultValue={item.unit || "h"}
                        {...register(`itemsList[${index}].unit`)} 
                        onChange={e => handleChange(index, e)}
                    />
                    </Grid>
                    <Grid item xs={1}>
                    <TextField
                        label={t('tax')}
                        fullWidth
                        variant="standard"
                        defaultValue={item.tax || 0}
                        {...register(`itemsList[${index}].tax`)} 
                        onChange={e => handleChange(index, e)}
                    />
                    </Grid>
                    <Grid item xs={2}>
                    <TextField
                        label={t('price')}
                        fullWidth
                        variant="standard"
                        defaultValue={item.price || 0}
                        {...register(`itemsList[${index}].price`)} 
                        onChange={e => handleChange(index, e)}
                    />
                    </Grid>
                    
                    <Grid item xs={2}>
                    {
                        index ? 
                        <IconButton onClick={() => removeFormFields(index)} aria-label="delete" sx={{marginTop: '10px'}}>
                            <DeleteIcon />
                        </IconButton>
                        : null
                    }
                    </Grid>
                </Grid>
            ))}

            <Button onClick={() => addFormFields()} variant="contained" color="primary" sx={{marginTop: '20px'}}>
                {t('add_item')}
            </Button>
        </InvoiceItemsBox>
    );
};
  

export default InvoiceItems;