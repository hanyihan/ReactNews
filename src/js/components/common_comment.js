import React from 'react';
import {Row,Col} from 'antd';
import {Menu, Icon, Tabs, message, Form, Input, Button, CheckBox,Modal} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class CommonComments extends React.Component {
  constructor(){
    super();
    this.state = {
      comments:''
    };

  };
  componentDidMount(){
    var myFetchOptions = {
      method: 'GET'
    };
    fetch();
  };

  handleSubmit(e) {

  };
  render(){
    let {getFieldProps} = this.props.form;
    const {comments} = this.state;
    const commnetList.map = 
    return(
      <div class="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initialValue:''})}/>
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommonComments = Form.create({})(CommonComments);
