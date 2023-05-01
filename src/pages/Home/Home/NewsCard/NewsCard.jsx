
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex gap-4 align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>
                            {
                                moment(author?.published_date).format("YYYY-MM-D")
                            }
                        </small></p>
                    </div>
                    <div>
                        <FaRegBookmark className='me-3'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link className='' to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <span className='ms-2'>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;