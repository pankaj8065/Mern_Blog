import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://meetmeindepartures.com/wp-content/uploads/2022/12/blog-computer-canva.jpg);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom -100px;
    background-size: cover;
    object-fit: contain;
`;

const Wrapper = styled(Box)`
    padding: 10px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #000000;
`;


const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Blogging Website</Typography> 
                <Text variant='h5'>This is a Blogging Website that i made 
                 using MERN stack Technology.In this website user can read posts , create posts and coment on the post as well. And JWT Authenticated
                 is used for user authentication and only authenticate user can edit their posts. I created this platform to foster a vibrant community of content creators and consumers, providing a 
                 user-friendly, feature-rich space for sharing knowledge, passions, and stories."
               </Text>    
               
            </Wrapper>
        </Box>
    );
}

export default About;