import React, { Component } from 'react'
import {Button, DatePicker, Space } from 'antd'
import {WechatOutlined, WeiboOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary">按钮1</Button>
        <Button>按钮2</Button>
        <Button type="link">按钮3</Button>
        <WechatOutlined />
        <WeiboOutlined />
        <Space direction="vertical">
          <DatePicker onChange={this.onChange} />
          <RangePicker />
        </Space>,
      </div>
    )
  }

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

}
