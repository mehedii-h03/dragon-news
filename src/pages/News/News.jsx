import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {
    const news = useLoaderData();
    const { image_url, title, details, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" className='p-2' src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All News In This Category <FaArrowLeft></FaArrowLeft></Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;