import React from 'react'
import { Box, Dialog, InputBase, styled } from '@mui/material'
import { Close } from '@mui/icons-material'

const dialogstyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}
const Headers = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500,
        padding: '0px 15px',
    },
    '& > svg': {
        padding: '10px 15px'
    }
})

const ComposeMail = () => {
    return (
        <div>
            <Dialog open={true} PaperProps={{ sx: dialogstyle }}>
                <Headers><p>New Message</p><Close fontSize='small' /></Headers>
                <Box>
                    <InputBase></InputBase>
                </Box>
                <Box>textarea</Box>
                <Box></Box>
            </Dialog>
        </div>
    )
}

export default ComposeMail
