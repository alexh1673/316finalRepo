import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import { Fab, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import  AuthContext  from '../auth';
import DeleteModal from './DeleteModal'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

const commentBox = () => {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);

return(
    <div>
        <Box sx={{ p: 1 }}>
                store.comment
        </Box>
    </div>
)
}