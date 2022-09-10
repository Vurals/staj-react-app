import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Alert, Button, Radio, AutoComplete, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const { Option } = AutoComplete;

const Ant = () => {
    const [state, setState] = useState({ date: '', radio: 0, input: []});
    const handleChange = value => {
        const date = value;
        message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
        setState({ ...state, date });
    };

    const onChange = (e) => {
        console.log('radio checked', e.target.value)
        const radio = e.target.value;
        setState({ ...state, radio });
    }

    const handleSearch = (value) => {
        let res = [];

        if (value.length === 0) {
            return;
        }
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
        }

        setState({...state, input: res});
    };

    return (

        <><Row justify="center">
            <Col span={ 24} >
                <DatePicker onChange={handleChange} />
            </Col>
            <Col span={ 24}>
                <div style={{ marginTop: 5, marginBottom: 5 }}>
                    <Alert message="Selected Date" description={state.date ? state.date.format('YYYY-MM-DD') : 'None'} />
                </div>
            </Col>
            <Col span={4} >
                <Button type="primary">Primary Button</Button>
            </Col>
            <Col span={4}  >
                <Button>Default Button</Button>
            </Col>
        </Row>
        <Row justify="center">    
                <Radio.Group onChange={onChange} value={state.radio}>
                    <Row>
                    <Col>
                        <Radio value={1}>A</Radio>
                        </Col>
                    <Col >
                        <Radio value={2}>B</Radio>
                    </Col>
                    <Col >
                        <Radio value={3}>C</Radio>
                    </Col>
                    <Col>
                        <Radio value={4}>D</Radio>
                        </Col>
                    </Row>
            </Radio.Group>             
        </Row>
        <Row justify= "center">
                <AutoComplete
                    style={{
                        width: 200,
                    }}
                    onSearch={handleSearch}
                    placeholder="input here"
                >
                    {state.input.map((email) => (
                        <Option key={email} value={email}>
                            {email}
                        </Option>
                    ))}
                </AutoComplete>
        </Row></>   
    );
};

export default Ant;