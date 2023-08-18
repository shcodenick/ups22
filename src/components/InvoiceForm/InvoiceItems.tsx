import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormContext, useFieldArray } from "react-hook-form";

const InvoiceItemsBox = styled.div`
    
`;


type InvoiceItemsProps = {
    disabled: boolean; 
};


const InvoiceItems: React.FC<InvoiceItemsProps> = ({ disabled }) => {
    const { t } = useTranslation();
    
    type ItemFormType = { items: {
        name: string;
        amount: number;
        unit: string;
        tax: number;
        price: number;
    }[] };

    const { register, formState } = useFormContext<ItemFormType>();

    const { fields, append, remove } = useFieldArray({
        name: "items",
    });

    let button;
    if (!disabled) {
        button = 
        <Button onClick={() => append({})} variant="contained" color="primary" sx={{marginTop: '20px'}}>
            {t('add_item')}
        </Button>;
    } else {
        button = '';
    }

    return (
        <InvoiceItemsBox>
            <h2>{t('items')}</h2>
            {fields.map((item, index) => (
                <Grid key={item.id} container spacing={2}>
                    <Grid item xs={2}>
                        <TextField
                            label={t('name')}
                            fullWidth
                            variant="standard"
                            {...register(`items.${index}.name`)}
                            disabled={disabled}
                        />
                        <p className="error">{t(formState.errors.items?.[index]?.name?.message || "")}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label={t('amount')}
                            fullWidth
                            variant="standard"
                            {...register(`items.${index}.amount`)} 
                            disabled={disabled}
                        />
                        <p className="error">{t(formState.errors.items?.[index]?.amount?.message || "")}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label={t('unit')}
                            fullWidth
                            variant="standard"
                            {...register(`items.${index}.unit`)} 
                            disabled={disabled}
                        />
                        <p className="error">{t(formState.errors.items?.[index]?.unit?.message || "")}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label={t('tax')}
                            fullWidth
                            variant="standard"
                            {...register(`items.${index}.tax`)} 
                            disabled={disabled}
                        />
                        <p className="error">{t(formState.errors.items?.[index]?.tax?.message || "")}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label={t('price')}
                            fullWidth
                            variant="standard"
                            {...register(`items.${index}.price`)} 
                            disabled={disabled}
                        />
                        <p className="error">{t(formState.errors.items?.[index]?.price?.message || "")}</p>
                    </Grid>
                    
                    <Grid item xs={2}>
                    {
                        index && !disabled ? 
                        <IconButton onClick={() => remove(index)} aria-label="delete" sx={{marginTop: '10px'}}>
                            <DeleteIcon />
                        </IconButton>
                        : null
                    }
                    </Grid>
                </Grid>
            ))}

            {button}

        </InvoiceItemsBox>
    );
};
  

export default InvoiceItems;