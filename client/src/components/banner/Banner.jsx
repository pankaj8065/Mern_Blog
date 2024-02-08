
import { styled, Box } from '@mui/material';
const Image = styled(Box)`
    background: url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80) center/55% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
   flex-dairection: column;
    align-items: center;
    justify-content: center;
    `;
const Banner = () => {
    return (
        <Image></Image>
    )
}
export default Banner;