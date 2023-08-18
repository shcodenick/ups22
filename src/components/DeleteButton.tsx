import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteButton = (props:any) => {
    const { id } = props;
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => {
          return axios.delete(`http://localhost:3001/invoices/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['Invoices']); 
        }
      })

    const onClick = (data: any) => { 
        mutation.mutate(data); 
        queryClient.invalidateQueries(['Invoices']); 
    }
    return (
        <IconButton aria-label="delete" onClick={() => { onClick(id) }}>
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteButton;
