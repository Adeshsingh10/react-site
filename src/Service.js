import React from 'react';
import { Row, Col } from 'antd';
import Sdata from "./Sdata";
import { Card } from 'antd';

const { Meta } = Card;

class Service extends React.Component {
    render() {
        return (

            <>
                <div className="my-5">
                    <h1 className="text-center"> Our Services </h1>
                </div>
                            
                    <Row gutter={[16, 16]}>
                    {Sdata.map(data => {
                        return  <Col span={8}>
                            <Card
                                hoverable
                                cover={<img className="Cardimg"  alt="Web Development" src={data.imgsrc} />}
                            >
                                <Meta title={data.title} style={{ textAlign: "center" }} />
                            </Card>
                        </Col>
                    })}
                        </Row>             

                <footer className="w-100 bg-light text-center my-auto">
                    <p> © 2021 Netlink. All Rights Reserved | Terms and Conditions</p>
                </footer>

            </>
        );
    }
}

export default Service;