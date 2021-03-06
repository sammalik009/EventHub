import React from 'react';
import { List, Button } from 'antd';
import axios from 'axios';
class OrganizerRequests extends React.Component{
    handleApprove = (id)=>{
        axios.post('http://127.0.0.1:8000/user/api/OrganizerRequests/approve_request/',{
            id : id
        })
        .then(res =>{})
        .catch();
        window.location.reload(false);
    }    
    handleDisapprove = (id)=>{
        axios.post('http://127.0.0.1:8000/user/api/OrganizerRequests/disapprove_request/',{
            id : id
        })
        .then(res =>{})
        .catch();
        window.location.reload(false);
    }
    render(){ 
        return(
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 20,
                }}
                dataSource={this.props.data}
                grid={{ gutter: 16, column: 4,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 4,
                    }}
                renderItem={item => (
                <List.Item style={{borderColor: 'black',}}
                    key={item.event_title}
                >  
                    <List.Item.Meta
                    title={<a href={`/event/myEvents/${item.event}/`}><h5>{String(item.user_name).toUpperCase()}</h5></a>}
                    />
                            <div>
                                { item.status==="PENDING" ?
                                    <div>
                                        <Button type="primary" htmlType="submit" style={{marginRight: 8,}} onClick={()=>this.handleApprove(item.id)}>
                                            APPROVE
                                        </Button>
                                        <Button type="danger" htmlType="submit" onClick={()=>this.handleDisapprove(item.id)}>
                                            DISAPPROVE
                                        </Button>
                                    </div>
                                    :
                                    <Button type="primary"><a href={`/events/${item.event}/`}>View Event</a></Button>
                                }
                            </div>
                </List.Item>
                )}
            />
        );
    }
}
export default OrganizerRequests;