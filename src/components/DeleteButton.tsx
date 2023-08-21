import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export interface DeleteButtonProps {
    id: number 
}

const DeleteButton = (props:DeleteButtonProps) => {
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

    const onClick = () => { 
        mutation.mutate(); 
        queryClient.invalidateQueries(['Invoices']); 
    }
    return (    
        <IconButton aria-label="delete" onClick={() => { onClick() }}>
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteButton;
