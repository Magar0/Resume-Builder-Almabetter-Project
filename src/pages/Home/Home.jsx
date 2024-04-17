import { useNavigate } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';
import './home.css'; // Import the CSS file

const Home = () => {

    const navigate = useNavigate();
    //list of templates in array
    const resumeTemplates = [
        { id: 1, name: 'Template 1', description: 'Classic Resume Template', image: '/images/1.jpg' },
        { id: 2, name: 'Template 2', description: 'Modern Resume Template', image: '/images/2.jpg' },
        { id: 3, name: 'Template 3', description: 'Creative Resume Template', image: '/images/3.jpg' },
        { id: 4, name: 'Template 4', description: 'Professional Resume Template', image: '/images/4.jpg' },
        { id: 5, name: 'Template 5', description: 'Minimalist Resume Template', image: '/images/5.jpg' },
        { id: 6, name: 'Template 6', description: 'Elegant Resume Template', image: '/images/6.jpg' },
        { id: 7, name: 'Template 7', description: 'Traditional Resume Template', image: '/images/7.jpg' },
        { id: 8, name: 'Template 8', description: 'Unique Resume Template', image: '/images/8.jpg' },
        { id: 9, name: 'Template 9', description: 'Customizable Resume Template', image: '/images/9.jpg' },
    ];

    const handleSelectTemplate = () => {
        // Navigate to the "Details filling" page
        navigate('/details')
    };

    return (
        <div className="container1">
            <Typography variant="h4" gutterBottom>
                Hi, I am <span style={{ color: 'teal' }}>Rakesh Magar</span>.
                Welcome to my Website
            </Typography>
            <Typography variant="h6" gutterBottom>
                Select a Resume Template below
            </Typography>
            <Grid container spacing={3}>
                {resumeTemplates.map((template) => (
                    <Grid item xs={12} sm={6} md={4} key={template.id}>
                        <div className="template1">
                            <div className="template-image-container1">
                                <img src={template.image} alt={template.name} className="template-image1" />
                            </div>
                            <div className="template-content1">
                                <Typography variant="h6" className="template-name1">
                                    {template.name}
                                </Typography>
                                <Typography variant="body2" className="template-description1">
                                    {template.description}
                                </Typography>
                                <Button onClick={handleSelectTemplate} variant="contained" color="primary" className="select-button1">
                                    Select Template
                                </Button>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;