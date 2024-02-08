
import { Box, styled, Typography, Link } from '@mui/material';
import {  GitHub,Instagram, Email, Facebook } from '@mui/icons-material';


const Banner = styled(Box)`
    background-image: url(https://www.vitelglobal.com/blog/wp-content/uploads/2023/10/Mobile-First-Omnichannel-Customer-Service.png);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom -100px;
    background-size: cover;
    
   
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #000000;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h4">you can contact me via my Profiles given below</Typography>    
                <Text variant="h5">
                    Reach out to me on Instagram
                    <Link href="https://www.instagram.com/pankaj__2903/?hl=en" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:pankajlahre29@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    reach my github profile
                    <Link href="https://github.com/pankaj8065" target="_blank" color="inherit">
                        <GitHub/>
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;