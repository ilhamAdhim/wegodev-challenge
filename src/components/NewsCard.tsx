import { Button, Card, Dropdown, Col, Divider, Row, Menu } from 'antd';
import { ReadFilled } from '@ant-design/icons';
import { INewsAPI } from './NewsList';
import { CSSProperties } from 'react';
import { DownOutlined } from '@ant-design/icons';

import "../styles/textInImage.css";
import dateFormat from 'dateformat';

export const NewsCard = (props: INewsAPI) => {
    const { Meta } = Card;

    const formattedDate: string = dateFormat(props?.publishedAt, "dS mmmm yyyy")
    const first20Words: string | undefined = props?.description?.split(' ').slice(0, 20).join(' ')

    const titleStyle: CSSProperties = {
        overflow: 'visible', whiteSpace: 'normal', color: 'white',
    }

    const dateStyle: CSSProperties = {
        color: '#0050b3', marginTop: '1em', fontWeight: 'bold'
    }

    const displaySource = (
        <Menu style={{ width: '100%' }}>
            <Menu.Item key="1" style={{ overflow: 'visible', whiteSpace: 'normal' }}> {props.url} </Menu.Item>
        </Menu>
    );


    return (
        <Card
            style={{ width: 300 }}
            cover={
                <>
                    <img
                        alt={`Article by ${props.author}`}
                        src={props.urlToImage}
                        style={{ height: '180px', width: '99.5%' }}
                    />
                    <h4 className="bottom-left" style={titleStyle}> {props.title} </h4>
                </>
            }
            actions={[
                <>
                    <a href={props.url}>
                        <span style={{ marginRight: '1em' }}> Read More </span>
                        <ReadFilled key="Read" />
                    </a>
                </>,
            ]}
        >
            <Meta
                description={
                    <>
                        <div style={dateStyle}> Posted on {formattedDate} </div>
                        {`${first20Words} ...`}
                        <br />
                        <div style={{ fontWeight: 'bold' }}>
                            <span style={{ fontWeight: 'bold' }}> By {props.author} </span>
                            <br />
                            <Dropdown overlay={displaySource}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <Button style={{ width: '100%', marginTop: '1em' }}> See source  <DownOutlined /></Button>
                                </a>
                            </Dropdown>
                        </div>
                    </>
                }
            />
        </Card >
    );
}
